
const getimagen = async()=>{
    try {
        const apikey= "XMf3Cjz5LuFmxYXXsLEElkMiq7mxeeNh"
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
        const data = await resp.json()
    
        return data
        
    } catch (error) {
        console.error(error)
    }
}

getimagen().then(({data})=>{
    const {url} = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})
.catch(console.warn)