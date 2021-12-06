import styles from "./styles.module.scss";

interface InfoCardProps {
  title: string;
  description: string;
  className: string;
}

export const InfoCard = ({ title, description, className }: InfoCardProps) => {
  return (
    <div className={`${className} ${styles.infoCard}`}>
      <h6 className={styles.cardTitle}>{title}</h6>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};
