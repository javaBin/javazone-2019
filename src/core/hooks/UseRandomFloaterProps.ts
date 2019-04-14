import { useState, useEffect } from "react";

function getAvailableViewportSize(setHeight: (n: number) => void, setWidth: (n: number) => void) {
    let timer: any;
    window.addEventListener('resize', function(e) {
        let node = this;
        window.clearTimeout(timer);
        timer = setTimeout(function() {
            setWidth(node.innerWidth);
            setHeight(node.innerHeight);
        }, 200);
    });
};

export interface FloaterProps {
    img: {};
    imgSize: number;
    top: number;
    left: number;
}

function getRandomTopAndLeft(viewportWidth: number, viewportHeight: number) {
    const imgWidth = Math.floor(Math.random() * (Math.floor(12) - Math.ceil(3))) + Math.ceil(3);
    const padding = 4*16;
    const leftMax = Math.floor(viewportWidth - imgWidth*16);
    const left = Math.floor(Math.random() * (leftMax - padding)) + padding;
    const wat = viewportHeight - 300;
    const top = Math.floor(Math.random() * Math.floor(wat));
    return [top, left, imgWidth];
}

export function useRandomFloaterProps(floaters: any[]): FloaterProps[] {
    const [floaterProps, setFloaterProps] = useState([] as FloaterProps[]);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    useEffect(() => {
        getAvailableViewportSize(setViewportHeight, setViewportWidth);
        const floaterProps: FloaterProps[] = [];
        floaters.map(floater => {
            const [top, left, imgSize] = getRandomTopAndLeft(viewportWidth, viewportHeight);
            floaterProps.push({img: floater, top, left, imgSize});
        })
        setFloaterProps(floaterProps);
    }, [viewportHeight, viewportWidth]);
    return floaterProps;
}