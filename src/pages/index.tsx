import React from 'react';
import Page from '../components/Layouts/Page';

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

function Index() {
    return (
        <Page>
            <h1>Landing</h1>
        </Page>
    )
}

export default Index;
