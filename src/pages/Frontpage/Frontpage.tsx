import React from 'react';
import Particles from 'react-particles-js';
import { config } from '../../core/particlesConfig';
import styled, { keyframes } from 'styled-components';
import { Link } from '../../components/Link/Link';

const logo = `${process.env.PUBLIC_URL}/logo-sharp.svg`;
const floating = `${process.env.PUBLIC_URL}/floating-logo.svg`;
const hamburger = `${process.env.PUBLIC_URL}/menu.svg`;

const floatingTree1 = `${process.env.PUBLIC_URL}/floating-tree1.svg`;
const floatingTree2 = `${process.env.PUBLIC_URL}/floating-tree2.svg`;
const floatingKid1 = `${process.env.PUBLIC_URL}/floating-kid1.svg`;
const floatingAstronaut = `${process.env.PUBLIC_URL}/floating-astronaut.svg`;
const floatingPlanet = `${process.env.PUBLIC_URL}/floating-planet.svg`;

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    pointer-events: none;
    flex-direction: column;
`

const LandingBanner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

const BannerContent = styled.div`
    position: relative;
    top: -10rem;
    display: grid;
    grid-template-rows: auto;
    grid-template-areas:
        'logo title'
        'logo date'
        'logo location'
        'logo actions';
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

const FloatingLogo = styled.img`
    grid-area: logo;
    margin: 2rem;
    width: 16rem;
    animation: ${float} 4s infinite;
`

const BannerTitle = styled.h1`
    pointer-events: auto;
    margin: 0;
    grid-area: title;
    font-size: 5.5rem;
`

const BannerDate = styled.h2`
    pointer-events: auto;
    margin: 0;
    grid-area: date;
    line-height: 50%;
    font-size: 3rem;
`

const BannerLocation = styled.h3`
    pointer-events: auto;
    margin: 0;
    grid-area: location;
    line-height: 50%;
    font-size: 2.5rem;
`

const BannerActions = styled.div`
    pointer-events: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const Gap = styled.div`
    width: 0.6rem;
    height: 100%;
`


const Art = styled.img`
    position: fixed;
    width: ${(props: any) => `${props.imgSize}rem`}; 
    top: ${(props: any) => `calc(100vh - ${props.top}vh)`};
    left: ${(props: any) => `calc(100vw - ${props.left}vw)`};
    animation: ${float} 4s infinite; 
    animation-delay: ${(props: any) => `-${props.delay}s`};
`

interface BackgroundFloatersProps {
    className: string;
    floaters: {}[];
}

function BackgroundFloaters(props: BackgroundFloatersProps) {

    function getRandomAnimationProps() {
        const delay = Math.floor(Math.random() * Math.floor(4));
        const size = Math.floor(Math.random() * (Math.floor(14) - Math.ceil(6) + 1)) + Math.ceil(6);
        const top = Math.floor(Math.random() * (Math.floor(80) - Math.ceil(20) + 1)) + Math.ceil(20);
        const left = Math.floor(Math.random() * (Math.floor(80) - Math.ceil(20) + 1)) + Math.ceil(20);
        return {delay: delay, imgSize: size, top: top, left: left};
    }

    return (
        <div className={props.className}>
            {props.floaters.map(art => {
                return <Art src={art} {...getRandomAnimationProps()}  />
            })}
        </div>
    );
}

const StyledBackgroundFloaters = styled(BackgroundFloaters)`
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 6rem;
    box-sizing: border-box;
`


function Index() {
    return (
        <>
            <Particles width="100vw" height="99vh" params={config} />
            <StyledBackgroundFloaters floaters={[floatingTree1, floatingTree2, floatingAstronaut, floatingKid1, floatingPlanet]} />
                {/* <Art src={floatingTree1} size={4} top={10} left={10} delay={1} />
                <Art src={floatingTree2} size={8} top={30} left={40} delay={3} />
                <Art src={floatingKid1} size={6} top={13} left={20} delay={2} />
                <Art src={floatingTree2} size={10} top={0} left={80} delay={1} />
                <Art src={floatingAstronaut} size={7} top={30} left={40} delay={2} /> */}
            <Content>
                <LandingBanner>
                    <BannerContent>
                        <FloatingLogo src={floating} />
                        <BannerTitle>JavaZone 2019</BannerTitle>
                        <BannerDate>September 11th - 12th</BannerDate>
                        <BannerLocation>Oslo Spektrum, Norway</BannerLocation>
                        <BannerActions>
                            <Link color="red" url="/tickets">Get your ticket</Link>
                            <Gap />
                            <Link color="blue" url="/speakers">Call for speakers</Link>
                        </BannerActions>
                    </BannerContent>
                </LandingBanner>
            </Content>
        </>
    )
}

export default Index;

