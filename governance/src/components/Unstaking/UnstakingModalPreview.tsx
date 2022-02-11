import React, { useMemo } from "react";
import styled from "styled-components";

import {
  BaseModalContentColumn,
  SecondaryText,
  Subtitle,
  Title,
} from "shared/lib/designSystem";
import colors from "shared/lib/designSystem/colors";
import { UnstakeIcon } from "shared/lib/assets/icons/icons";
import moment from "moment";
import { useRBNTokenAccount } from "shared/lib/hooks/useRBNTokenSubgraph";
import useTextAnimation from "shared/lib/hooks/useTextAnimation";
import { formatBigNumber } from "shared/lib/utils/math";
import { ActionButton } from "shared/lib/components/Common/buttons";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: ${colors.red}1F;
  border-radius: 100px;
`;

interface UnstakingModalPreviewProps {
  onUnstake: () => void;
}

const UnstakingModalPreview: React.FC<UnstakingModalPreviewProps> = ({
  onUnstake,
}) => {
  const { data: rbnTokenAccount, loading } = useRBNTokenAccount();
  const loadingText = useTextAnimation(loading);

  const canUnstake = useMemo(() => {
    if (loading || !rbnTokenAccount || !rbnTokenAccount.lockEndTimestamp) {
      return false;
    }

    return moment().isSameOrAfter(
      moment.unix(rbnTokenAccount.lockEndTimestamp)
    );
  }, [loading, rbnTokenAccount]);

  const lockupAmountDisplay = useMemo(() => {
    if (loading) {
      return loadingText;
    }

    return `${
      rbnTokenAccount?.lockedBalance
        ? formatBigNumber(rbnTokenAccount?.lockedBalance)
        : "0"
    } RBN`;
  }, [loading, loadingText, rbnTokenAccount?.lockedBalance]);

  const lockupExpiryDisplay = useMemo(() => {
    if (loading) {
      return loadingText;
    }

    if (!rbnTokenAccount?.lockEndTimestamp) {
      return "---";
    }

    return moment.unix(rbnTokenAccount.lockEndTimestamp).format("MMM, Do YYYY");
  }, [loading, loadingText, rbnTokenAccount?.lockEndTimestamp]);

  return (
    <>
      <BaseModalContentColumn>
        <LogoContainer>
          <UnstakeIcon size="32px" color={colors.red} />
        </LogoContainer>
      </BaseModalContentColumn>
      <BaseModalContentColumn marginTop={16}>
        <Title fontSize={22} lineHeight={28}>
          Unlock Your Ribbon
        </Title>
      </BaseModalContentColumn>
      <BaseModalContentColumn>
        <div className="d-flex w-100 justify-content-between">
          <SecondaryText lineHeight={24}>Lockup Amount</SecondaryText>
          <Subtitle fontSize={14} lineHeight={24} letterSpacing={1}>
            {lockupAmountDisplay}
          </Subtitle>
        </div>
      </BaseModalContentColumn>
      <BaseModalContentColumn>
        <div className="d-flex w-100 justify-content-between">
          <SecondaryText lineHeight={24}>Lockup Expiry</SecondaryText>
          <Subtitle fontSize={14} lineHeight={24} letterSpacing={1}>
            {lockupExpiryDisplay}
          </Subtitle>
        </div>
      </BaseModalContentColumn>
      <BaseModalContentColumn>
        <ActionButton
          onClick={onUnstake}
          className="py-3"
          color={colors.red}
          disabled={!canUnstake}
        >
          Unlock RBN
        </ActionButton>
      </BaseModalContentColumn>
    </>
  );
};

export default UnstakingModalPreview;