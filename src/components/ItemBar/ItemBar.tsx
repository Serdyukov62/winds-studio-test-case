import { PROJECT_LIST } from '@/utils'
import icon from '@assets/project_icon.svg'
import styles from './index.module.css'

export function ItemBar() {
  return (
    <aside className={styles.aside}>
        {PROJECT_LIST.map((project,index) => (
            <div className={styles.container} key={index}>
                <img className={styles.icon} src={icon} alt="Иконка проекта" />
                <p className={styles.project_title}>{project}</p>
            </div>
        ))}
    </aside>
  )
}
