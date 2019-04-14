import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface InlineLinkProps {
    external?: boolean;
    noBlankTarget?: boolean;
    url: string;
    children: React.ReactNode;
    className: string;
    plain?: boolean;
}

function InlineLink(props: InlineLinkProps) {
    return (
        props.external 
            ? <a className={props.className} href={props.url} target={props.noBlankTarget ? '' : '_blank'}>{props.children}</a>
            : <Link className={props.className} to={props.url}>
                {props.children}
            </Link>
    )
}

const StyledInlineLink = styled(InlineLink)`
    font-weight: 700;
    text-decoration: none;
    border: 2px solid transparent;
    padding: 0.1rem 0.4rem;
    color: ${(props: any) => props.plain ? 'white' : props.theme.colors['warm400']};
    &:hover {
        color: white;
        border-radius: 5px;
        border: 2px solid rgba(255, 255, 255, 0.6);
        background: ${(props: any) => props.plain ? 'rgba(255, 255, 255, 0.3)' : props.theme.colors['warm400']};
    }
`

StyledInlineLink.defaultProps = {
    external: false,
    noBlankTarget: false,
    plain: false
}
export { StyledInlineLink as InlineLink};