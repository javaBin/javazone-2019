import React, { Component } from 'react';
import Navigation, { NavRoute } from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { CookieDisclaimer } from '../CookieDisclaimer/CookieDisclaimer';
import { InlineLink } from '../InlineLink/InlineLink';

const routes: NavRoute[] = [
    {title: 'Info', url: '/info', show: true},
    {title: 'Tickets', url: '/tickets', show: true},
    {title: 'Speakers', url: '/speakers', show: true},
    {title: 'Partners', url: '/partners', show: true},
    {title: 'Academy', url: '/academy', show: true},
    {title: 'Kids', url: '/kids', show: true},
    {title: 'About', url: '/about', show: true},
    {title: 'Cookies', url: '/privacy-cookies', show: false},
    {title: 'Tips for Speakers', url: '/speakers/tips', show: false},
    {title: 'Monetary Policy', url: '/speakers/monetary-policy', show: false},
  ];
  

interface PageProps {
    children: React.ReactNode;
}

function Page(props: PageProps) {
    return (
        <>
            <Navigation sticky routes={routes} />
            {props.children}
            <Footer routes={routes} />
            <CookieDisclaimer>
                We have given you a dedicated cookie from our cookie jar in order to store your favorite program schedule. We also use cookies to improve your experience on our site. By using this site you agree to this. For more information please visit our <InlineLink url="/privacy-cookies">cookie information page.</InlineLink>
            </CookieDisclaimer>
        </>
    )
}

export default Page;