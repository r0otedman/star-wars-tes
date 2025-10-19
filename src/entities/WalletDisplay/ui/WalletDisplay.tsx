import { RiWalletLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import styles from "./WalletDisplay.module.scss";
import SolIcon from "shared/icons/sol.svg?react";
import UsdcIcon from "shared/icons/usdc.svg?react";
import Button from "shared/ui/Button/Button";
import { memo } from "react";

const WalletDisplayContent = () => {
  return (
    <div className={styles.walletDisplayContent}>
      <Button className={styles.walletDisplayContentBtn} variant="confirm">
        deposit
      </Button>
      <Button className={styles.walletDisplayContentBtn} variant="cancel">
        widthdraw
      </Button>
    </div>
  );
};

const WalletDisplayTrigger = () => {
  return (
    <div className={styles.walletDisplayTriggerContainer}>
      <RiWalletLine size={18} />
      <div className={styles.solDisplay}>
        <SolIcon />
        <p>300</p>
      </div>
      <div className={styles.usdcDisplay}>
        <UsdcIcon />
        <p>12000.037</p>
      </div>
      <IoIosArrowDown size={18} />
    </div>
  );
};

const WalletDisplay = memo(() => {
  return (
    <Dropdown
      content={<WalletDisplayContent />}
      trigger={<WalletDisplayTrigger />}
    />
  );
});

export default WalletDisplay;
