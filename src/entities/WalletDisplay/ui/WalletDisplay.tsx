import { RiWalletLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import styles from "./WalletDisplay.module.scss";
import SolIcon from "shared/icons/sol.svg?react";
import UsdcIcon from "shared/icons/usdc.svg?react";

const WalletDisplayContent = () => {
  return <div>1111</div>;
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

const WalletDisplay = () => {
  return (
    <Dropdown
      content={<WalletDisplayContent />}
      trigger={<WalletDisplayTrigger />}
    />
  );
};

export default WalletDisplay;
