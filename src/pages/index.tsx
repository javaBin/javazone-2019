import React from 'react';
import Page from '../components/Layouts/Page';
import { Jumbotron } from '../components/Jumbotron/Jumbotron';

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

function Index() {
    return (
        <Page>
            <Jumbotron title="JavaZone 2019" subTitle="September 11th - 12th" location="Oslo Spektrum" />
        </Page>
    )
}

export default Index;
