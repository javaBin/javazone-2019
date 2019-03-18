import React from 'react';
import { Jumbotron } from '../components/Jumbotron/Jumbotron';
import Page from '../components/Layouts/Page';

function NotFoundPage() {
    return (
        <Page>
            <Jumbotron title="404" subTitle="Where did it go?" />
        </Page>
    )
}

export default NotFoundPage;