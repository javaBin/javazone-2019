import * as React from 'react';
import styles from './Jumbotron.module.scss';

interface JumbotronProps {
    title?: string;
    subTitle?: string;
    children?: React.ReactNode;
}

export class Jumbotron extends React.Component<JumbotronProps> {

    constructor(props: JumbotronProps) {
        super(props);
    }

    public render() {
        return (
            <div className={styles.jumbotron}>
                <video muted autoPlay loop>
                    <source src="stockholm_at_night.mp4" type="video/mp4" />
                    Your browser sucks ass
                </video>
                <div className={styles.jumbotronContent}>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subTitle}</h2>
                </div>
            </div>
        )
    }
}