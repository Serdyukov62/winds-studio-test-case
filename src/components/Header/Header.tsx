import styles from "./index.module.css";
import menu_button from '@/assets/menu_button.svg'
import back_button from '@/assets/back_button.svg'


export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.icon_container}>
        <img
          className={styles.icon}
          src={menu_button}
          alt="Меню"
        />

        <img
          className={styles.icon}
          src={back_button}
          alt="Кнопка назад"
        />
      </div>
      <div className={styles.title_container}>
        <p className={styles.title}>Просмотр</p>
        <p className={styles.title}>Управление</p>
      </div>
    </header>
  );
}
