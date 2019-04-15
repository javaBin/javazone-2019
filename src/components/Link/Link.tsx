import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components/macro';

interface LinkProps {
    url: string;
    children: React.ReactNode;
    external?: boolean;
    noBlankTarget?: boolean;
    color?: string;
    className: string;
}

function Link(props: LinkProps) {
    return (
        props.external 
            ? <a className={props.className} href={props.url} target={props.noBlankTarget ? '' : '_blank'}>{props.children}</a>
            : <RouterLink className={props.className} to={props.url}>
                    {props.children}
                </RouterLink>
    )
}

const StyledLink = styled(Link)`
    width: fit-content;
    font-size: 1.6rem;
    padding: 0.8rem 1.8rem;
    font-weight: bold;
    box-sizing: border-box;
    border-radius: 3px;
    background: ${(props: any) => props.theme.colors[`${props.color}300`]};
    border: 4px solid transparent; 
    text-decoration: none;
    text-align: center;
    color: white;
    cursor: pointer;
    transition: 400ms background;
    &:hover {
        border: 4px solid rgba(255, 255, 255, 0.5);
        background: ${(props: any) => props.theme.colors[`${props.color}400`]};
    }
`

export { StyledLink as Link };