import {renderTimeDetails} from './render.js';
import {DOMelements, searchforms} from './getDOMelements.js'
import { moviesRender, rendermovie } from './getMovies.js';

const apikey = "d945889bb9934bf3d4195cc152d6f401"

//EVENT LISTENERS
let searchbarlencalc = () =>{
    DOMelements.searchInput.onkeyup = function searchbarLength(){
            this.style.width = ((this.value.length + 1) * 100) + 'px';
            if(this.value.length == 0)
            this.style.width = ((46 + 1) * 100) + 'px';
        // console.log(`${this.value.length} and ${counter}`)
    }
}
searchbarlencalc()

let myvar
let goback = () =>{
    document.getElementById("goback-to-search").addEventListener("click", function(){
        DOMelements.onboardingDisplay.style.display = "flex"
        DOMelements.movieDisplay.style.display= "none"
        myvar.clearInterval()
    })
}

let SearchChooser = () =>{
    let lastSearchClicked = `${DOMelements.searchChooser[0]}-search`
    for(let j=0; j<DOMelements.searchChooser.length; j++){
        let x= `${DOMelements.searchChooser[j]}-search`
        document.getElementById(x).addEventListener("click", () =>{
            // DOMelements.searchChooserID.removeclas
            document.getElementById("scba").classList.remove(`${lastSearchClicked}after`)
            document.getElementById("scba").classList.add(`${x}after`)
            lastSearchClicked = x
            document.getElementById("search-forms").innerHTML = `${searchforms[j]}`
        })
    }
}
SearchChooser()

const afterRenderMovieCalls = (moviedetails) => {
    SearchChooser()
    console.log("clikedawc")
    goback()
    console.log("clikvaed")
    searchbarlencalc()
    console.log("clikdawed")
    submitformlistener()
    console.log("clikewdad")
    myvar = setInterval(function(){renderTimeDetails(moviedetails.runtime)}, 1000)
}

let submitformlistener;
const moviesAddEventListeners = () =>{
    const moviecards = Array.from(DOMelements.movieCards)
    moviecards.forEach(element => {
        element.addEventListener("click", async ()=>{
            const moviedetails = await getMovie(element.closest(".movie-card-wrapper").id)
            DOMelements.onboardingDisplay.style.display = "none"
            DOMelements.movieDisplay.style.display= "flex"
            rendermovie(moviedetails)
            afterRenderMovieCalls(moviedetails)
        })
    });
}

submitformlistener = () =>{
    DOMelements.searchForm.onsubmit = async function searchresults(){
        //get serach results
        const data = await getSearchResults()
        //render search results with pagination
        // renderSearchCleaning()
        moviesRender(data)
        moviesAddEventListeners()
        // clearInput()
    }
}
submitformlistener()

//UTILITIES

let counter=0;
const clearInput = () => {
    // DOMelements.searchInput.value=""
    // searchbarLength()
}



////////////

async function getSearchResults(){
    const keyword = DOMelements.searchInput.value;
    let resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`)
    let datas = await resp.json()
    // console.log("inside search result")
    return datas
}

const renderSearchCleaning = () => {
    //do the animation and cleaning stuffs
    DOMelements.searchInput.style.transform = "translateY(-500px)"
    DOMelements.searchresults.style.visibility = "visible";
    //put the json value inside cards

    // render the results
}

async function getMovie(id){
    let res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
    // let res = await fetch(`https://api.themoviedb.org/3/movie/550/videos?api_key=${apikey}&language=en-US`)
    let data = await res.json()
    return data
    // console.log(data)
}

// let resp = await fetch(`https://api.themoviedb.org/3/search/${keyword}?api_key=${apikey}&page=1`)
    // http://api.themoviedb.org/3/search/movie?query=relic&api_key=d945889bb9934bf3d4195cc152d6f401
    // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

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
    // displayTime()
}

const controller = () => {
    renderAll()
}
controller()