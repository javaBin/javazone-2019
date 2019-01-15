import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.scss';

interface LinkProps {
    url: string;
    children: React.ReactNode;
    external?: boolean;
    noBlankTarget?: boolean;
}

function Link(props: LinkProps) {
    return (
        props.external 
            ? <a className={styles.link} href={props.url} target={props.noBlankTarget ? '' : '_blank'}>{props.children}</a>
            : <RouterLink className={styles.link} to={props.url}>
                {props.children}
            </RouterLink>
    )
}

export default Link;