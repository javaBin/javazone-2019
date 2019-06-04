import React from 'react';
import styled from 'styled-components/macro';
import { RouteComponentProps, withRouter } from 'react-router';
import { NavRoute } from '../Navigation/Navigation';
import { Section } from '../Section/Section';
import { useWindowWidth } from '../../core/hooks/UseWindowWidth';

const facebook = `${process.env.PUBLIC_URL}/facebook.svg`;
const twitter = `${process.env.PUBLIC_URL}/twitter.svg`;
const email = `${process.env.PUBLIC_URL}/email.svg`;

interface FooterProps extends RouteComponentProps {
    routes: NavRoute[];
    className: string;
}

const FooterLink = styled.a`
    padding: 0.5rem 1.5rem;
    border-radius: 3px;
    border: 4px solid transparent; 
    grid-area: ${(props: any) => props.grid};
    justify-self: center;
    font-weight: 700;
    font-size: 1.3em;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: 400ms border;
    &:hover {
        border: 4px solid rgba(0, 0, 0, 0.5);
    }
`

const SocialIcon = styled.img`
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
`


function Footer(props: FooterProps) {
    const isSubpage = props.location.pathname !== '/';
    const width = useWindowWidth();
    if(!isSubpage) return null;
    return (
        <Section particles color="orange">
            <footer className={props.className}>
                <FooterLink grid="javabin" target="_blank" href="https://javabin.no">Made by javaBin</FooterLink>
                <FooterLink grid="coc" target="_blank" href="https://javabin.no/principles">Code of Coduct</FooterLink>
                <FooterLink grid="facebook" target="_blank" href="https://facebook.com/javazoneconference">
                    <SocialIcon src={facebook} />
                    {width < 450 ? '' : 'Facebook'}
                </FooterLink>
                <FooterLink grid="twitter" target="_blank" href="https://twitter.com/javazone">
                    <SocialIcon src={twitter} />
                    {width < 450 ? '' : 'Twitter'}
                </FooterLink>
                <FooterLink grid="email" target="_blank" href="mailto:javazone@java.no">
                    <SocialIcon src={email} />
                    {width < 450 ? '' : 'Email'}
                </FooterLink>
            </footer>
        </Section>
    )
}

const StyledFooter = styled(withRouter(Footer))`
    width: 100%;
    min-height: 15rem;
    display: grid;
    align-items: center;
    grid-template-areas:
        'javabin . coc'
        'twitter facebook email';
    @media only screen and (max-width: 450px) {
        grid-template-areas:
            'javabin javabin javabin'
            'coc coc coc'
            'twitter facebook email';  
    };
`

export { StyledFooter as Footer};