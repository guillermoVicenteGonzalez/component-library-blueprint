import React from 'react'
import styles from './test.module.css'

export interface TestProps  {}

export const Test : React.FC<TestProps> = ({}) =>{
    return <div data-testid="test" className={styles.container}></div>
}