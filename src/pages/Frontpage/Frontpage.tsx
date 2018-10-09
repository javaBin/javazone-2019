import * as React from 'react';
import { Jumbotron } from '../../components/Jumbotron/Jumbotron';

export class Frontpage extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Jumbotron title="JavaZone 2019" subTitle="See you next year" />
            </div>
        )
    }
}
