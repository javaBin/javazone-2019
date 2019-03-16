import React, { Component } from 'react';

interface PageProps {
    children: React.ReactNode;
}

function Page(props: PageProps) {
    return (
        <>
            {props.children}
        </>
    )
}

export default Page;