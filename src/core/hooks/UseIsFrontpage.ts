import { useState, useEffect } from "react";

export function useIsFrontpage(pathname: string) {
    const [isFrontpage, setIsFrontpage] = useState(true);
    useEffect(() => {
        setIsFrontpage(pathname === '/');
    }, [pathname]);  
    return isFrontpage
}