import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface StepProgressItem {
  active?: boolean;
  currentActive?: boolean;
  children: ReactNode;
}

export const StepProgressItem = ({
  currentActive = false,
  active = false,
  children,
}) => {
  const className = active ? "active" : "notActive";

  return (
    <div
      className={`${styles.stepProgressItem} ${
        active ? styles.active : styles.notActive
      } ${currentActive ? styles.currentActive : ""}`}
    >
      <div className={styles.progressBall} />
      <p>{children}</p>
    </div>
  );
};
