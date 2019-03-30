import React from 'react';
import styled from 'styled-components';
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
    height: 30rem;
`

const PageBannerTitle = styled.h1`
    font-size: 5em;
    margin: 0;
`

const PageBannerSubTitle = styled.h2`
    font-size: 3.5em;
    margin: 0;
`

const ParticleWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%; 
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