import React from 'react';
import styles from './ImageSection.module.scss';

interface ImageSectionProps {
    imageName: string;
}

export function ImageSection(props: ImageSectionProps) {
    const imagePath = `https://storage.googleapis.com/javazone-assets/images/${props.imageName}.jpg`;
    return (
        <div className={styles.section}>
            <img src={imagePath} />
        </div>
    )
}