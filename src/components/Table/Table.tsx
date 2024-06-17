import React from 'react'

import styles from './index.module.css'

interface TableParams {
    children: React.ReactNode
}

export function Table({children}:TableParams) {
  return (
    <div className={styles.container}>
        <div className={styles.table_header}>
            <p className={styles.table_header_item}>Уровень</p>
            <p className={styles.table_header_item}>Наименование работ</p>
            <p className={styles.table_header_item}>Основная з/п</p>
            <p className={styles.table_header_item}>Оборудование</p>
            <p className={styles.table_header_item}>Накладные расходы</p>
            <p className={styles.table_header_item}>Сметная прибыль</p>
        </div>
        {children}
    </div>
  )
}
