import { Movies } from "./movies.js";

import { Api } from "../data.js";
export class Home{



    constructor(){

        this.Api= new Api();
        this.viewHome();
        this.dropdown = document.querySelector('.dropdown');
        this.dropdown.addEventListener('click', this.btnToMovies);

        
        this.searchInput = document.querySelector('.search-input');
        this.searchInput.addEventListener('click',this.searchMovies);

    }

    viewHome=()=>{

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
            <input class="inp-src" type="text" placeholder="Search movies here">
            <i class="bi bi-search"></i>
        </div>

    </header>

    <div class="main">

        <div id="carouselExampleControls" class="carousel slide carousel-dark" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../images/f9-poster.jpeg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../images/john-wick-3.jpeg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../images/The_Expendables_logo.webp" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>

            <div class="more-info-btn-div">
                <button class="more-info-btn">MORE INFO</button>
            </div>
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

    btnToMovies=async (e)=>{

        let el = e.target;
        if(el.textContent == "MOVIES"){
           

            let api = new Api();


            let movies= await api.getAllMovies();


            new Movies(movies);
        }
    }

     searchMovies =async (e)=>{

        e.preventDefault();
        let el = e.target;

        if(el.classList.contains("bi-search")){

            let inpSrc = document.querySelector('.inp-src').value;

            let api = new Api();


            let movies= await api.filterMovies( inpSrc);


            new Movies(movies);
        }
        

    }

    

}