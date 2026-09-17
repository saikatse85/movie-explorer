const URL= "https://api.tvmaze.com"

export const getAllMovies= async ()=>{
    const response= await fetch(`${URL}/shows`)
    if(!response){
        throw new Error("Failed to fetch movies")
    }
    const data= await response.json()

    console.log(data);
    return data;
}

export const searchMovies=async (query)=>{
    const response=await fetch(`${URL}/search/shows?q=${encodeURIComponent(query)}`)

    if(!response){
        throw new Error("Failed to fetch movies")
    }
    const data= await response.json()

    console.log(data);
    return data.map((item)=> item.show)
}