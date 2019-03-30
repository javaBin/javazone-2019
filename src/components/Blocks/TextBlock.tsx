import React from 'react';
import styled from 'styled-components';

export interface SectionProps {
    children?: React.ReactNode;
    title: string;
    className: string;
}

const TextBlockTitle = styled.h1`
    font-size: 3em;
    text-transform: uppercase;
    margin: 1rem 0;
    color: inherit;
`

function TextBlock(props: SectionProps) {
    return (
        <div className={props.className}>
            <TextBlockTitle>{props.title}</TextBlockTitle>
            {props.children}
        </div>
    )
}

const StyledTextBlock = styled(TextBlock)`
    margin: 3rem 0;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export { StyledTextBlock as TextBlock };