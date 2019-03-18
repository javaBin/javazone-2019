import React, { Component } from 'react';
import Navigation, { NavRoute } from '../Navigation/Navigation';

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
            <Navigation routes={routes} />
            {props.children}
        </>
    )
}

export default Page;