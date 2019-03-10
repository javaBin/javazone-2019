import React, { ReactElement } from 'react';
import styles from './PartnerPrices.module.scss';

interface PartnerPriceListProps {
    children: React.ReactNode; 
}

export function PartnerPriceList(props: PartnerPriceListProps) {
    return (
       <div className={styles.priceList}>
            {props.children}
       </div> 
    )
}

interface PartnerPriceProps {
    item: string;
    children: React.ReactNode;
}

export function PartnerPrice(props: PartnerPriceProps) {
    return (
        <div className={styles.price}>
            <p>
                {props.item}
            </p>
            <p className={styles.soldOut}>
                NOK {props.children},-
            </p>
        </div>
    )
}