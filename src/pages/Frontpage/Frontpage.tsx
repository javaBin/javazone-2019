import React from 'react';
import Particles from 'react-particles-js';
import { config } from '../../core/particlesConfig';
import styled, { keyframes } from 'styled-components';
import { Link } from '../../components/Link/Link';

const logo = `${process.env.PUBLIC_URL}/logo-sharp.svg`;
const floating = `${process.env.PUBLIC_URL}/floating-logo.svg`;
const hamburger = `${process.env.PUBLIC_URL}/menu.svg`;

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

const Header = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Brand = styled.div`
    pointer-events: auto;
    line-height: 0;
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2rem 1rem;
    & > h1 {
        font-size: 2.5rem;
        margin-left: 1rem;
    }
`

const Logo = styled.img`
    width: 4rem;
`

const Icon = styled.img`
    height: 2rem;
    width: 2rem;
`

const Menu = styled.button`
    pointer-events: auto;
    margin: 1rem;
    padding: 0.5rem;
    background: #FFC236;
    border-radius: 0.4rem;
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

function Index() {
    return (
        <>
            <Particles width="100vw" height="99vh" params={config} />
            <Content>
                <Header>
                    <Brand>
                        <Logo src={logo} />
                        <h1>JAVAZONE</h1>
                    </Brand>
                    <Menu>
                        <Icon src={hamburger} />
                    </Menu>
                </Header>
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

