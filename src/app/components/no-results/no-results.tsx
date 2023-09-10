
import styles from "./no-results.module.scss"
interface NoResultsProps {
  message: string;
};

const NoResults = ({ message }: NoResultsProps) => <p className={styles.NoResults}>{message}</p>;

export default NoResults;
