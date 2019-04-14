import React, { useState, useEffect } from 'react';
import ParticleField from 'react-particles-webgl';
import { getParticlesConfig } from '../../core/particlesConfig';
import styled, { keyframes } from 'styled-components/macro';
import { useWindowWidth } from '../../core/hooks/UseWindowWidth';

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
    display: grid;
    grid-template-areas: 'logo bannerstuff';
    @media (max-width: 1150px) {
        grid-template-areas: 'logo' 'bannerstuff';
        justify-items: center;
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

const BannerTitle = styled.h1`
    pointer-events: auto;
    margin: 0;
    grid-area: title;
    font-size: 18rem;
    @media (max-width: 1600px) {
        font-size: 14rem;
    }
    @media (max-width: 690px) {
        font-size: 10rem;
    }
    @media (max-width: 500px) {
        font-size: 8rem;
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

interface BackgroundFloatersProps {
    className: string;
}

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
            <Art src={floaters[1]} delay={3} 
                imgSize={floaterProps[1].imgSize} top={floaterProps[1].top} left={floaterProps[1].left} />
            <Art src={floaters[2]} delay={1} 
                imgSize={floaterProps[2].imgSize} top={floaterProps[2].top} left={floaterProps[2].left} />
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

const ParticleWrapper = styled.div`
    width: 100%;
    height: 100vh;
`

function NotFoundPage() {
    const width = useWindowWidth();
    return (
        <>
            <ParticleWrapper>
                <ParticleField config={getParticlesConfig('frontpage')} />
            </ParticleWrapper>
            <StyledBackgroundFloaters width={width} />
            <Content>
                <LandingBanner>
                    <BannerContent>
                        <BannerTitle>404</BannerTitle>
                    </BannerContent>
                </LandingBanner>
            </Content>
        </>
    )
}

export {NotFoundPage};

