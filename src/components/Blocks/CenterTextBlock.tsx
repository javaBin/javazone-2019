import React from 'react';
import styled from 'styled-components/macro';

export interface SectionProps {
    children?: React.ReactNode;
    title: string;
    className: string;
}

const TextBlockTitle = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    text-align: left;
    margin: 1rem 0;
    color: inherit;
    @media only screen and (max-width: 450px) {
        font-size: 2rem;
    }
`

function TextBlock(props: SectionProps) {
    return (
        <div className={props.className}>
            <TextBlockTitle>{props.title}</TextBlockTitle>
            {props.children}
        </div>
    )
}

const AlignedParagraph = styled.div`
    text-align: ${(props: any) => props.align};
    width: 100%;
`

const StyledCenterTextBlock = styled(TextBlock)`
    margin: 3rem 0;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media only screen and (max-width: 450px) {
        margin: 1.5rem 0;
    }
`

export { StyledCenterTextBlock as CenterTextBlock, AlignedParagraph };