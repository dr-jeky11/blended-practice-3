import { BarLoader } from 'react-spinners';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <BarLoader />
    </div>
  );
};
