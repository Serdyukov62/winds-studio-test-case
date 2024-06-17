import styles from './index.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="../../../public/menu_button.svg" alt="" />
      <img src="../../../public/back_button.svg" alt="" />
      <p>Просмотр</p>
      <p>Управление</p>
    </header>
  );
};

export default Header;
