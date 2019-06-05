import {useEffect, useState} from "react";

function useFetch<T>(url: string) {
    const [data, setData] = useState<T[]>([]);

    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        fetchUrl();
        // eslint-disable-next-line
    }, []);
    return data;
}

export {useFetch};