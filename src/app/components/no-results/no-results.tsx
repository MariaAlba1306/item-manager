import { FC } from "react";
import styles from "./no-results.module.scss";

interface NoResultsProps {
  message: string;
}

const NoResults: FC<NoResultsProps> = ({ message }) => (
  <p className={styles.NoResults} data-testid="no-results">
    {message}
  </p>
);

export default NoResults;
