import { DOMelements } from "./getDOMelements.js"
export const moviesRender = (data) =>{
    let cardshtml = ""
    let results = data.results
    for(let i=0; i<results.length; i++){
        const onecard = 
        `<div class="movie-card-wrapper">
            <div class="movie-card" id="${results[i].id}">
                ${changeimage(results, i)}

                <div class="movie-card-details">
                    <div class="movie-name">${results[i].title}</div>
                    <div class="movie-year">${results[i].release_date.split("-")[0]}</div>
                    <div class="movie-language">Language <span>${results[i].original_language?"Yes":"No"}</span></div>
                    <div class="movie-rating">TMDB Rating <span>${Math.round(results[i].vote_average*0.5 * 10) / 10 }/5</span></div>
                </div>
                <div class="movie-score">Score <span>${results[i].vote_average*10}%</span></div>
            </div>
        </div>`;
        cardshtml = cardshtml + onecard
        console.log(results)
    }

    DOMelements.searchResults.innerHTML = cardshtml;
}

const changeimage = (results, i) =>{
    if(results[i].poster_path){
        return `<img data-src="https://image.tmdb.org/t/p/w220_and_h330_face/${results[i].poster_path}" 
        data-srcset="https://image.tmdb.org/t/p/w220_and_h330_face/${results[i].poster_path} 1x, https://image.tmdb.org/t/p/w440_and_h660_face/${results[i].poster_path} 2x" 
        alt="" src="https://image.tmdb.org/t/p/w220_and_h330_face/${results[i].poster_path}" 
        srcset="https://image.tmdb.org/t/p/w220_and_h330_face/${results[i].poster_path} 1x, https://image.tmdb.org/t/p/w440_and_h660_face/${results[i].poster_path} 2x">`
    }
    else{
        return `<img src="/Movie Trailer Extension/img/fallback poster.png">`
    }
}

export const rendermovie = (movie) => {
    
    // console.log(movie)
}