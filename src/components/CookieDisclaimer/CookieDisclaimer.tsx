import React, { useEffect, useState } from 'react';
import styles from './CookieDisclaimer.module.scss';
import Cookies from 'universal-cookie';

export interface CookieDisclaimerProps {
    children: React.ReactNode;
}

export function CookieDisclaimer(props: CookieDisclaimerProps) {

    const cookies = new Cookies();
    const [hasAcceptedCookieDisclaimer, setHasAcceptedCookieDisclaimer] = useState(!!cookies.get('javazone-cookie-disclaimer'));
    
    function handleAcceptCookieDisclaimer() {
        const expiration = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        console.log('exp', expiration);
        cookies.set('javazone-cookie-disclaimer', true, {expires: expiration});
        setHasAcceptedCookieDisclaimer(true);
    }

    return (
        <>
            {!hasAcceptedCookieDisclaimer ?
            <div className={styles.container}>
                <div className={styles.disclaimer}>
                    <p>{props.children}</p>
                    <button onClick={handleAcceptCookieDisclaimer}>Accept</button>
                </div>
            </div> : null}
        </>
    )
}