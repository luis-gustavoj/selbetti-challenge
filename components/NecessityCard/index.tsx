import { ReactNode, useEffect } from "react";

interface NecessityCardProps {
  children: ReactNode;
  title: string;
  isChecked?: boolean;
  onClick?: () => void;
}

import styles from "./styles.module.scss";

export const NecessityCard = ({
  children,
  title,
  isChecked,
  onClick,
}: NecessityCardProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`d-flex flex-column flex-grow-1 text-center align-items-center justify-content-evenly rounded-3 py-2 px-2 ${
        styles.necessityCard
      } ${isChecked ? styles.checked : ""}`}
      style={{ background: "#fff", minHeight: "117px" }}
    >
      {children}
      <p style={{ fontSize: "0.75rem", color: "#707070", margin: 0 }}>
        {title}
      </p>
    </button>
  );
};
