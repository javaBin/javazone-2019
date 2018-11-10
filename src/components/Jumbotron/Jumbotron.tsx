import * as React from 'react';
import './Jumbotron.scss';

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
            <div className="jumbotron">
                <video muted autoPlay loop>
                    <source src="stockholm_at_night.mp4" type="video/mp4" />
                    Your browser sucks ass
                </video>
                <div className="jumbotron__content">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subTitle}</h2>
                </div>
            </div>
        )
    }
}