'use client'

import { ReactElement } from 'react'
import Designer from './components/designer'
import styles from './page.module.css'

export default function Home(): ReactElement<HTMLElement> {
  return (
    <main className={styles.main}>
      <Designer />
    </main>
  )
}
