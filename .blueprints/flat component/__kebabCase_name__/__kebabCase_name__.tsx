import React from 'react'
import styles from './{{ kebabCase name }}.module.css'

export interface {{pascalCase name}}Props  {}

export const {{pascalCase name}} : React.FC<{{pascalCase name}}Props> = ({}) =>{
    return <div data-testid="{{ kebabCase name }}" className={styles.container}></div>
}