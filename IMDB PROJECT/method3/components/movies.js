import { Api } from "../data.js";
import movieDetails from "./details.js";



export class Movies{

    


    constructor(movies){
        this.movies=movies;
        this.viewMovies();

        this.mainMovies = document.querySelector('.main-movies');
        this.populateMovies(movies);

        this.mainMovies = document.querySelector('.main-movies');
        this.mainMovies.addEventListener('click', this.movieDetails);
    }


    viewMovies=()=>{

        let container = document.querySelector('.container');

        container.innerHTML = `
        <header class="hdr">

        <i class="bi bi-film"></i>

        <div class="movie-icon">
            
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  MENU
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">MOVIES</a></li>
                  <li><a class="dropdown-item" href="#">TV SHOWS</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>

        </div>

        

        <div class="search-input">
            <input type="text" placeholder="Search movies here">
            <i class="bi bi-search"></i>
        </div>

    </header>

    <div class="main-movies">

        <div class="movie-item">

            

        </div>


    </div>




    <footer class="ftr">
        
        <div class="media-icons">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-github"></i>
        </div>

        <div>
            <p>&#169; All rights reserved</p>
        </div>

    </footer>

        `


    }

    populateMovies=(arr)=>{

        this.mainMovies.innerHTML = "";
        
        arr.forEach(e=>{
    
            this.mainMovies.innerHTML += `
            
            <div class="movie-item">
                <p> <span> TITLE: </span> ${e.Title}</p>
                <p> <span>Type:</span> ${e.Type}</p>
                <p> <span>Year:</span> ${e.Year}</p>
                <p> ${e.imdbID}</p>
            </div>
            `
        })
    
    }

    movieDetails= async (e)=>{

        let el = e.target;
       
        if(el.classList.contains("movie-item")){

            let childs = el.children;
            let first = childs[3];
            

            let movies = await fetch(`https://www.omdbapi.com/?i=${first.textContent}&apikey=3c08c583`);
            movies = await movies.json();
            console.log(movies);
           
            
            
            let mv = new movieDetails;
            mv.movieDetails();
            mv.populateMovieDetails(movies);
        
              

        }



    }


    



}