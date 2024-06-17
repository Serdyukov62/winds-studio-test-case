import styles from "./index.module.css";
import icon from "@assets/option_select.svg";
export function TopBar() {
  return (
    <div className={styles.container}>
      <div className={styles.select_container}>
        <div>
          <h3 className={styles.select}>Название проекта</h3>
          <p className={styles.select}>Аббревиатура</p>
        </div>
        <img className={styles.icon} src={icon} alt="Иконка выбора опций" />
      </div>
      <div className={styles.option_container}>
        <h3 className={styles.option}>Строительно-монтажные работы</h3>
      </div>
    </div>
  );
}
