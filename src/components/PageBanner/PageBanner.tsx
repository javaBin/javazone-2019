import React from 'react';
import styled from 'styled-components/macro';
import { Section } from '../Section/Section';
export interface PageBannerProps {
    header: string;
    subHeader: string;
    color?: 'green' | 'blue' | 'pink' | 'orange' | 'warm';
}

const PageBannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    min-height: 30rem;
    @media only screen and (max-width: 450px) {
        min-height: 20rem;
    }
`

const PageBannerTitle = styled.h1`
    font-size: 5rem;
    margin: 0;
    @media only screen and (max-width: 450px) {
        font-size: 3rem;
    }
`

const PageBannerSubTitle = styled.h2`
    font-size: 3.5rem;
    margin: 0;
    @media only screen and (max-width: 450px) {
        font-size: 2rem;
    }
`

function PageBanner(props: PageBannerProps) {
    return (
        <Section particles color={props.color}>
            <PageBannerContent>
                <PageBannerTitle>{props.header}</PageBannerTitle>
                <PageBannerSubTitle>{props.subHeader}</PageBannerSubTitle>
            </PageBannerContent>
        </Section>
    )
}

export default PageBanner;