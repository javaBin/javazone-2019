import * as React from 'react';
import PageBanner from "../../components/PageBanner/PageBanner";
import styled from 'styled-components/macro';
import styles from './Movie.module.scss';


const MovieContainer = styled.div`
    margin-top: 6.5rem;
    margin-bottom: 6.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export function MoviePage() {
    const themeColor = 'pink';
    const pageArt = `${process.env.PUBLIC_URL}/page-about.svg`;

    const url = "https://www.youtube.com/embed/mRQTIrmFOEA";

    return (
        <>
            <PageBanner header="The J-Team" subHeader="Movie Time" color={themeColor} artPath={pageArt}/>
            <MovieContainer>
                <iframe id={styles.youtube}
                        title="youtube movie"
                        src={`${url}?origin=https://2019.javazone.no`}
                        frameBorder="0">

                </iframe>
            </MovieContainer>
        </>
    )
}
