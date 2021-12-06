import { ReactNode } from "react";
import { StepProgressItem } from "./StepProgressItem";
import styles from "./styles.module.scss";

interface StepProgressBarProps {
  children: ReactNode;
}

export const StepProgressBar = ({ children }: StepProgressBarProps) => {
  return <div className={styles.stepProgressBar}>{children}</div>;
};
