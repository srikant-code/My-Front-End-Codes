import { DOMelements } from "./getDOMelements.js"
export const moviesRender = (data) =>{
    let cardshtml = ""
    let results = data.results
    for(let i=0; i<results.length; i++){
        const onecard = 
        `<div class="movie-card-wrapper">
            <div class="movie-card" id="${results[i].id}">
                <img data-src="https://image.tmdb.org/t/p/w220_and_h330_face/${results[i].poster_path}" 
                data-srcset="https://image.tmdb.org/t/p/w220_and_h330_face/${results[i].poster_path} 1x, https://image.tmdb.org/t/p/w440_and_h660_face/${results[i].poster_path} 2x" 
                alt="" src="https://image.tmdb.org/t/p/w220_and_h330_face/${results[i].poster_path}" 
                srcset="https://image.tmdb.org/t/p/w220_and_h330_face/${results[i].poster_path} 1x, https://image.tmdb.org/t/p/w440_and_h660_face/${results[i].poster_path} 2x" >
                <div class="movie-card-details">
                    <div class="movie-name">${results[i].title}</div>
                    <div class="movie-year">${results[i].release_date.split("-")[0]}</div>
                    <div class="movie-score">${results[i].vote_average*10}%</div>
                </div>
            </div>
        </div>`;
        cardshtml = cardshtml + onecard
        console.log(results)
    }

    DOMelements.searchResults.innerHTML = cardshtml;
}

export const rendermovie = (movie) => {
    console.log(movie)
}