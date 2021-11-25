const apikey = '2CGUOfkAqP2y5DTK3Y6WKJGFp1NJoVdd';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
/* peticion.then( res=>{
    res.json().then(data=>
        console.log(data)   
        );
    
}).catch(console.warn) */

peticion.then( res=> res.json())
.then(({data})=>
{
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}).catch(console.warn);