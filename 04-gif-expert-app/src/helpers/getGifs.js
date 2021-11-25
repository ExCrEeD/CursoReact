export const getGifs = async (category) =>{
    const apikey = '2CGUOfkAqP2y5DTK3Y6WKJGFp1NJoVdd';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${apikey}&limit=10`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map(gif=> {
        return {
            id:gif.id,
            title:gif.title,
            url: gif.images?.downsized_medium.url
        };
    });
    return gifs;
}