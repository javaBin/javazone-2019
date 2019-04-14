import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { Section } from '../Section/Section';
import { useWindowWidth } from '../../core/hooks/UseWindowWidth';
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

const desktopProps = [
        {
            imgSize: 15,
            top: 16,
            left: 84
        },
        {
            imgSize: 12,
            top: 68,
            left: 70
        },
        {
            imgSize: 8,
            top: 30,
            left: 7
        }
]

const mobileProps = [
        {
            imgSize: 3,
            top: 25,
            left: 84
        },
        {
            imgSize: 4,
            top: 85,
            left: 60
        },
        {
            imgSize: 4,
            top: 15,
            left: 7
        }
]

interface BackgroundFloatersProps {
    className: string;
}

const floatingTree1 = `${process.env.PUBLIC_URL}/floating-tree1.svg`;
const floatingTree2 = `${process.env.PUBLIC_URL}/floating-tree2.svg`;
const floatingTurtle = `${process.env.PUBLIC_URL}/floating-turtle.svg`;
const floatingRocket = `${process.env.PUBLIC_URL}/floating-rocket.svg`;
const floatingAstronaut = `${process.env.PUBLIC_URL}/floating-astronaut.svg`;
const floatingPlanet = `${process.env.PUBLIC_URL}/floating-planet.svg`;

const floaterList = [
    floatingTree1,
    floatingTree2,
    floatingTurtle,
    floatingRocket,
    floatingAstronaut,
    floatingPlanet
];

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
    position: absolute;
    width: ${(props: any) => `${props.imgSize}rem`}; 
    height: auto;
    top: ${(props: any) => `${props.top}%`};
    left: ${(props: any) => `${props.left}%`};
    animation: ${float} 4s infinite; 
    animation-delay: ${(props: any) => `-${props.delay}s`};
`

function BackgroundFloaters(props: BackgroundFloatersProps) {
    const [floaters, setFloaters] = useState(['']);
    const [floaterProps, setFloaterProps] = useState(mobileProps)
    const width = useWindowWidth();
    function getRandomFloaters() {
        const shuffled = floaterList.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 3);
        setFloaters(selected);
    }
    useEffect(() => {
        getRandomFloaters();
    }, []);
    useEffect(() => {
        if(width < 650) {
            setFloaterProps(mobileProps);
        } else {
            setFloaterProps(desktopProps);
        }
    }, [width]);
    return (
        <div className={props.className}>
            <Art src={floaters[0]} delay={2} 
                imgSize={floaterProps[0].imgSize} top={floaterProps[0].top} left={floaterProps[0].left} />
        </div>
    );
}

const StyledBackgroundFloaters = styled(BackgroundFloaters)`
    overflow: hidden;
    pointer-events: auto;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
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