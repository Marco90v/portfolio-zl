const URLBase = "https://raw.githubusercontent.com/Marco90v/JSONs/main/tonsang/";
const FileJSON = "data.json";

const getData = async (URL:string) => {
    const res = await fetch(URL, { next: { revalidate: 300 } });
    const json = await res.json();
    return json;
}

export { URLBase, FileJSON, getData};