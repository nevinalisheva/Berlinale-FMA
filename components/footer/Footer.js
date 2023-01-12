import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <span> Berlinale Fleet Management App</span> &copy;{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
