export default class movieDetails{


    constructor(){


    }




    movieDetails=()=>{

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

        <div class="movie-details">

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

    populateMovieDetails=(e)=>{

        let movieDetails = document.querySelector('.movie-details');

            movieDetails.innerHTML = `
            
                <p> <span> TITLE: </span> ${e.Title}</p>
                <p> <span>Type:</span> ${e.Type}</p>
                <p> <span>Year:</span> ${e.Year}</p>
                <p> <span>Plot:</span> ${e.Plot}</p>
                <p> <span>Actors:</span> ${e.Actors}</p>
                <p> <span>Runtime:</span> ${e.Runtime}</p>
                <p> <span>IMDB ID:</span ${e.imdbID}</p>
            
            `
    }
}
