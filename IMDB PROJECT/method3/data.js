export class Api{

    constructor(){
        
    }


    async getAllMovies(){


        let movies = await fetch('https://www.omdbapi.com/?s=predator&apikey=3c08c583');
        movies = await movies.json();
        movies = await movies.Search;
        
        return movies;
    }


    async filterMovies (input){
       let movies =  await fetch(`https://www.omdbapi.com/?s=${input}&apikey=3c08c583`).then(data=>data.json());
       return movies.Search;
    }

    async moviesByTitle(title){
        let movies = await fetch(`https://www.omdbapi.com/?t=${title}&plot=full&apikey=3c08c583`).then(data=>data.json());
        console.log(movies);
    }

}


