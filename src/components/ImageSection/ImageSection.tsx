import React from 'react';
import styles from './ImageSection.module.scss';
import classnames from 'classnames';

interface ImageSectionProps {
    imageName: string;
    bottom?: boolean;
    top?: boolean;
}

export function ImageSection(props: ImageSectionProps) {
    const imagePath = `https://storage.googleapis.com/javazone-assets/images/${props.imageName}.jpg`;
    const classes = classnames(
        {[styles.center]: !props.bottom && !props.top},
        {[styles.bottom]: props.bottom},
        {[styles.top]: props.top}
    )
    return (
        <div className={styles.section}>
            <img className={classes} src={imagePath} />
        </div>
    )
}

ImageSection.defaultProps = {
    bottom: false,
    top: false
}