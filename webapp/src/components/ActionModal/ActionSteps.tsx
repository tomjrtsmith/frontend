import React, { useCallback, useEffect, useState } from "react";
import { BigNumber } from "ethers";

import {
  ActionParams,
  ACTIONS,
  ActionType,
  MobileNavigationButtonTypes,
  PreviewStepProps,
  StepData,
  Steps,
  STEPS,
} from "./types";

import useVault from "../../hooks/useVault";
import PreviewStep from "./PreviewStep";
import ConfirmationStep from "./ConfirmationStep";
import SubmittedStep from "./SubmittedStep";
import FormStep from "./FormStep";
import usePendingTransactions from "../../hooks/usePendingTransactions";

export interface ActionStepsProps {
  show: boolean;
  onClose: () => void;
  onChangeStep: (stepData: StepData) => void;
  skipToPreview?: boolean;
  previewStepProps?: PreviewStepProps;
}

const ActionSteps: React.FC<ActionStepsProps> = ({
  show,
  onClose,
  onChangeStep,
  skipToPreview = false,
  previewStepProps,
}) => {
  const firstStep = skipToPreview ? STEPS.previewStep : STEPS.formStep;
  const [step, setStep] = useState<Steps>(firstStep);
  const [txhash, setTxhash] = useState("");
  const vault = useVault();
  const [
    pendingTransactions,
    setPendingTransactions,
  ] = usePendingTransactions();

  const [actionType, setActionType] = useState<ActionType>("deposit");
  const [amount, setAmount] = useState<BigNumber>(BigNumber.from("0"));
  const [positionAmount, setPositionAmount] = useState<BigNumber>(
    BigNumber.from("0")
  );
  const [actionParams, setActionParams] = useState<ActionParams>({
    action: "deposit",
    yield: 0,
  });

  // We need to pre-fetch the number of shares that the user wants to withdraw
  const [shares, setShares] = useState<BigNumber>(BigNumber.from("0"));

  const isDeposit = actionType === ACTIONS.deposit;
  const actionWord = isDeposit ? "Deposit" : "Withdrawal";

  const handleClose = useCallback(() => {
    setTxhash("");
    onClose();
  }, [onClose]);

  // Whenever the `show` variable is toggled, we need to reset the step back to 0
  useEffect(() => {
    return () => {
      // small timeout so it doesn't flicker
      setTimeout(() => {
        setStep(firstStep);
      }, 500);
    };
  }, [show, firstStep, setStep]);

  const amountStr = amount.toString();
  const sharesStr = shares.toString();

  // Update with previewStepProps
  useEffect(() => {
    if (previewStepProps) {
      setActionType(previewStepProps.actionType);
      setAmount(previewStepProps.amount);
      setPositionAmount(previewStepProps.positionAmount);
      setActionParams(previewStepProps.actionParams);
    }
  }, [previewStepProps]);

  useEffect(() => {
    if (vault) {
      (async () => {
        const shares = await vault.assetAmountToShares(amountStr);
        setShares(shares);
      })();
    }
  }, [amountStr, vault]);

  // append the txhash into the global store
  useEffect(() => {
    if (txhash !== "") {
      setPendingTransactions((pendingTransactions) => [
        ...pendingTransactions,
        {
          txhash,
          type: isDeposit ? "deposit" : "withdraw",
          amount: amountStr,
        },
      ]);
    }
  }, [txhash, setPendingTransactions, isDeposit, amountStr]);

  useEffect(() => {
    // we check that the txhash has already been removed
    // so we can dismiss the modal
    console.log(step, txhash, pendingTransactions);
    if (step === STEPS.submittedStep && txhash !== "") {
      const pendingTx = pendingTransactions.find((tx) => tx.txhash === txhash);
      if (!pendingTx) {
        setTimeout(() => {
          handleClose();
        }, 300);
      }
    }
  }, [step, pendingTransactions, txhash, handleClose]);

  const handleClickConfirmButton = async () => {
    if (vault !== null) {
      // check illegal state transition
      if (step !== STEPS.confirmationStep - 1) return;
      setStep(STEPS.confirmationStep);
      try {
        if (isDeposit) {
          const res = await vault.depositETH({ value: amountStr });
          setTxhash(res.hash);
          setStep(STEPS.submittedStep);
        } else {
          const res = await vault.withdrawETH(sharesStr);
          setTxhash(res.hash);
          setStep(STEPS.submittedStep);
        }
      } catch (e) {
        console.error(e);
        handleClose();
      }
    }
  };

  useEffect(() => {
    const titles = {
      [STEPS.formStep]: "",
      [STEPS.previewStep]: `${actionWord} Preview`,
      [STEPS.confirmationStep]: `Confirm ${actionWord}`,
      [STEPS.submittedStep]: "Transaction Submitted",
    };

    const navigationButtons: Record<Steps, MobileNavigationButtonTypes> = {
      [STEPS.formStep]: "back",
      [STEPS.previewStep]: "back",
      [STEPS.confirmationStep]: "close",
      [STEPS.submittedStep]: "close",
    };

    onChangeStep({
      title: titles[step],
      stepNum: step,
      navigationButton: navigationButtons[step],
    });
  }, [step, onChangeStep, actionWord]);

  const onSubmitForm = useCallback(
    (submittedFormProps) => {
      // check that it's a legal state transition
      // if not, just ignore
      if (step !== STEPS.previewStep - 1) return;
      setStep(STEPS.previewStep);

      setActionType(submittedFormProps.actionType);
      setAmount(submittedFormProps.amount);
      setPositionAmount(submittedFormProps.positionAmount);
      setActionParams(submittedFormProps.actionParams);
    },
    [step]
  );

  const stepComponents = {
    0: !skipToPreview && <FormStep onSubmit={onSubmitForm}></FormStep>,
    1: (
      <PreviewStep
        {...(previewStepProps || {
          actionType,
          amount,
          positionAmount,
          actionParams,
        })}
        onClickConfirmButton={handleClickConfirmButton}
      />
    ),
    2: <ConfirmationStep />,
    3: <SubmittedStep txhash={txhash} />,
  };

  return <>{stepComponents[step]}</>;
};

export default ActionSteps;