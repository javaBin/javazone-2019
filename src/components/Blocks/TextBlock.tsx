import React from 'react';
import styled from 'styled-components/macro';

export interface TextBlockProps {
    children?: React.ReactNode;
    title: string;
    color: string;
    className: string;
}

const TextBlockTitle = styled.h1`
    font-size: 2.5rem;
    text-transform: uppercase;
    text-align: left;
    margin: 1rem 0;
    color: ${(props: any) => props.color ? props.theme.colors[`${props.color}400`] : 'inherit'};
    @media only screen and (max-width: 450px) {
        font-size: 2rem;
    }
`

function TextBlock(props: TextBlockProps) {
    return (
        <div className={props.className}>
            <TextBlockTitle color={props.color}>{props.title}</TextBlockTitle>
            {props.children}
        </div>
    )
}

const AlignedParagraph = styled.div`
    text-align: ${(props: any) => props.align};
    width: 100%;
`

const StyledTextBlock = styled(TextBlock)`
    margin: 3rem 0;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    @media only screen and (max-width: 450px) {
        margin: 1.5rem 0;
    }
`

export { StyledTextBlock as TextBlock, AlignedParagraph };