import React from 'react';
import styled from 'styled-components/macro';
import ParticleField from 'react-particles-webgl';
import { getParticlesConfig } from '../../core/particlesConfig';


export interface SectionProps {
    children?: React.ReactNode;
    particles?: boolean;
    className: string;
    full?: boolean;
}

function Section(props: SectionProps) {
    return (
        <section className={props.className}>
            {props.particles ? 
            <ParticleWrapper>
                <ParticleField config={getParticlesConfig('pageBanner')} />
            </ParticleWrapper>
            : null }
            <SectionContent full={props.full}>
                {props.children}
            </SectionContent>
        </section>
    )
}


const ParticleWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

const SectionContent = styled.div`
    position: relative;
    width: ${(props: any) => props.full ? '100%' : '100rem'};
    height: auto;
    @media only screen and (max-width: 103rem) {
        width: 100%;
    }
`

const StyledSection = styled(Section)`
    position: relative;
    box-sizing: border-box;
    padding: ${(props: any) => props.full ? '0 3rem' : ''};
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props: any) => props.color ? props.theme.colors[`${props.color}100`] : 'white'};
    color: ${(props: any) => props.color ? props.theme.colors[`${props.color}400`] : 'black'};
    @media only screen and (max-width: 103rem) {
        padding: 0 3rem;
    }
`

StyledSection.defaultProps = {
    particles: false,
    full: false
}

export { StyledSection as Section };