import * as React from 'react';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <a target="_blank" href="https://javabin.no">
                    Made by javaBin
                </a>
                <a target="_blank" href="https://java.no/principles">
                    Code of Conduct
                </a>
            </div>
            <div>
                <a target="_blank" href="mailto:javazone@java.no">
                    Mail
                </a>
                <a target="_blank" href="https://twitter.com/javazone">
                    Twitter
                </a>
                <a target="_blank" href="https://facebook.com/javazoneconference">
                    Facebook
                </a>
            </div>
        </footer>
    )
}