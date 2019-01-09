import React from 'react';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

export interface ButtonProps {
    onClick?: () => {};
    children: React.ReactNode;
}

export function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={styles.button}>
            {props.children}
        </button>
    )
}