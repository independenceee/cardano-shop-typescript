import { useState, useEffect } from "react";

type UrlApi = {
    url: string;
};

const useFetch = function ({ url }: UrlApi) {
    const [dataJson, setDataJson] = useState<any>([] && {});

    useEffect(() => {
        const fetchApi = async function () {
            try {
                const reponse = await fetch(`${url}`);
                const data = await reponse.json();
                setDataJson(data);
            } catch (error) {
                console.log(error);
            }
        };
    }, []);
    return dataJson;
};

export { useFetch };
