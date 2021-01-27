import { Button, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import { ethers } from "ethers";
import React, { useState } from "react";
import StyledStatistic from "../../designSystem/StyledStatistic";
import { InstrumentPosition } from "../../models";
import { toSignificantDecimals } from "../../utils/math";

type ExerciseModalProps = {
  position: InstrumentPosition;
  onClose: () => void;
  onExercise: () => Promise<void>;
};

const ExerciseModal: React.FC<ExerciseModalProps> = ({
  position,
  onExercise,
  onClose,
}) => {
  const [isExercising, setIsExercising] = useState(false);
  const { pnl, amounts } = position;
  const pnlUSD = parseFloat(ethers.utils.formatEther(pnl)).toFixed(2);
  const pnlETH = toSignificantDecimals(pnl, 8);
  const numContracts = ethers.utils.formatEther(amounts[0]); // we assume that we only take 2 options positions

  const handleExercise = async () => {
    setIsExercising(true);
    await onExercise();
    setIsExercising(false);
  };

  return (
    <Modal
      visible={true}
      onOk={handleExercise}
      onCancel={onClose}
      width={300}
      title="Confirm Exercise"
      footer={[
        <Button key="back" disabled={isExercising} onClick={onClose}>
          Cancel
        </Button>,
        <Button
          disabled={isExercising}
          key="submit"
          type="primary"
          loading={isExercising}
          onClick={handleExercise}
        >
          {isExercising ? "Exercising..." : "Exercise"}
        </Button>,
      ]}
    >
      <Row>
        <StyledStatistic
          title="I am exercising"
          value={`${numContracts} contracts`}
        ></StyledStatistic>
      </Row>
      <Row>
        <StyledStatistic
          title="This will be a profit of"
          value={`$${pnlUSD} (${pnlETH} ETH)`}
        ></StyledStatistic>
      </Row>
    </Modal>
  );
};
export default ExerciseModal;