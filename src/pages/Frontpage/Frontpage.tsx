import * as React from 'react';
import { Jumbotron } from '../../components/Jumbotron/Jumbotron';

export class Frontpage extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Jumbotron title="JavaZone 2019" subTitle="Time to prepare for another year!" />
            </div>
        )
    }
}