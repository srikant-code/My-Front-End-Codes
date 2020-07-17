import {renderTimeDetails} from './render.js';
import {DOMelements} from './getDOMelements.js'

const apikey = "d945889bb9934bf3d4195cc152d6f401"

//EVENT LISTENERS
DOMelements.searchForm.onsubmit = function searchresults(){
    //get serach results
    getSearchResults()
    //render search results with pagination
    // clearInput()
    renderSearchResults()
} 

DOMelements.searchInput.onkeydown = function searchbarLength(){
    if(counter==0){
        counter++
        this.style.width = ((this.value.length + 1) * 100) + 'px';
    }
    else{
        if(this.value.length<1){
            counter=0;
            this.style.width= '60vw'
            return
        }
        counter++
        this.style.width = ((this.value.length + 1) * 100) + 'px';
    }
    console.log(`${this.value.length} and ${counter}`)
}



//UTILITIES

let counter=0;
// const searchbarLength = () => {
    
// }

const clearInput = () => {
    // DOMelements.searchInput.value=""
    // searchbarLength()
}



////////////

async function getSearchResults(){
    const keyword = DOMelements.searchInput.value;
    // let resp = await fetch(`https://api.themoviedb.org/3/search/${keyword}?api_key=${apikey}&page=1`)
    // http://api.themoviedb.org/3/search/movie?query=relic&api_key=d945889bb9934bf3d4195cc152d6f401
    // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

    let resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`)
    let datas = await resp.json()
    console.log(datas)
}

const renderSearchResults = () => {
    //do the animation and cleaning stuffs
    DOMelements.searchInput.style.transform = "translateY(-500px)"
    DOMelements.searchresults.style.display = "block"
    //put the json value inside cards
    // render the results
}

function rendermovies(data){
    // let movieCard = `<div class="movie-card">
    //                     <img src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/${data.backdrop_path}" id="img" alt="${data.original_title}">
    //                     <p>${data.overview}</p>
    //                 </div>
    //                 `
    // const renderDiv = document.getElementById("render")
    // renderDiv.innerHTML = movieCard;

}

async function getMovies(){
    let res = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apikey}`)
    // let res = await fetch(`https://api.themoviedb.org/3/movie/550/videos?api_key=${apikey}&language=en-US`)
    let data = await res.json()
    rendermovies(data)
    // console.log(data)
}



// take in the search term and show results
// render moviw details
//   search for a movie
//   render its background images
//   render rating  
//   render watchtime
//   render votes
//   render imdb, netflix links
//   render time details

const renderAll = () => {
    renderTimeDetails()
}

const controller = () => {
    renderAll()
}
controller()