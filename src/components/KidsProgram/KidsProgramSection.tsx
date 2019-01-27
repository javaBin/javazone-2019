import React from 'react';
import styles from './KidsProgramSection.module.scss';

interface KidsProgramSectionProps {
    header?: React.ReactNode;
    children?: React.ReactNode;
    imageName: string;
    imageType?: string;
}

export function KidsProgramSection(props: KidsProgramSectionProps) {
    const imageType = !!props.imageType? props.imageType : 'jpg';
    const imagePath = `https://storage.googleapis.com/javazone-assets/images/${props.imageName}.${imageType}`;
    return (
        <div className={styles.section}>
            {props.header}
            <div className={styles.container}>
                <div className={styles.imageBlock}>
                    <img className={styles.img} src={imagePath}/>
                </div>
                <div className={styles.content}>
                        {props.children}
                </div>
            </div>
        </div>
    )
}