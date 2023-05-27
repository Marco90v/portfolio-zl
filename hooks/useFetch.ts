import { useEffect, useState } from "react";

const URLBase = "https://raw.githubusercontent.com/Marco90v/JSONs/main/tonsang/";
const JSON = "data.json";
function useFetch( URL:string ){
    const [data, setData] = useState<data | null>(null);
    useEffect(() => {
        (
            async function(){
                try {
                    const res = await fetch(URL, { next: { revalidate: 300 } });
                    const json = await res.json();
                    setData(json);
                } catch (error) {
                }
            }
        )();
    }, [URL]);
    return [ data ];
}

export { useFetch, URLBase, JSON }