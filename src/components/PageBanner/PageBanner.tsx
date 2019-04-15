import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { Section } from '../Section/Section';
import { useWindowWidth } from '../../core/hooks/UseWindowWidth';
export interface PageBannerProps {
    header: string;
    subHeader: string;
    artPath?: string;
    color?: 'green' | 'blue' | 'pink' | 'orange' | 'warm';
}

const PageBannerHeadings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
`

const PageBannerContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 30rem;
    @media only screen and (max-width: 450px) {
        min-height: 20rem;
    }
`

const PageBannerTitle = styled.h1`
    font-size: 6rem;
    z-index: 2;
    margin: 0;
    @media only screen and (max-width: 450px) {
        font-size: 3rem;
    }
`

const PageBannerSubTitle = styled.h2`
    font-size: 3.5rem;
    margin: 0;
    z-index: 2;
    @media only screen and (max-width: 450px) {
        font-size: 2rem;
    }
`

const float = keyframes`
    0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
`

const Art = styled.img`
    animation: ${float} 4s infinite;
    width: 15%;
    height: 15%;
    margin-right: 14rem;
    animation-delay: 2;
`

function PageBanner(props: PageBannerProps) {
    return (
        <Section particles color={props.color}>
            <PageBannerContent>
                <PageBannerHeadings>
                    <PageBannerTitle>{props.header}</PageBannerTitle>
                    <PageBannerSubTitle>{props.subHeader}</PageBannerSubTitle>
                </PageBannerHeadings>
                <Art src={props.artPath} />
            </PageBannerContent>
        </Section>
    )
}

export default PageBanner;