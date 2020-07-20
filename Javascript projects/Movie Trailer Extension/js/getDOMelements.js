// All DOM elements

export const DOMelements = {
    searchInput: document.getElementById("searchKeyword"),
    searchForm: document.getElementById("searchform"),
    searchResults: document.getElementById("search-results"),
    movieDisplay: document.getElementById("movie-display"),
    movieCards: document.getElementsByClassName("movie-card-wrapper"),
    onboardingDisplay: document.getElementById("onboarding"),
    gobackToSearch: document.getElementById("goback-to-search"),

    // searchAnything: document.getElementById("searchform-anything"),
    // searchMovies: document.getElementById("searchform-movies"),
    // searchTV: document.getElementById("searchform-tv"),
    // searchPeople: document.getElementById("searchform-people"),
    // searchCollection: document.getElementById("searchform-collection"),
    // searchKeyword: document.getElementById("searchform-keyword"),
    searchForms: document.getElementById("search-forms"),

    searchChooserID: document.getElementById("search-chooser"),
    scba: document.getElementById("scba"),

//    anythingChooser: document.getElementById("google-search"),
//    moviesChooser: document.getElementById("movies-search"),
//    TVChooser: document.getElementById("tv-search"),
//    peopleChooser: document.getElementById("people-search"),
//    collectionChooser: document.getElementById("collection-search"),
//    keywordChooser: document.getElementById("keyword-search"),
   searchChooser: ["google", "movies", "tv", "people", "collection", "all"],
}

export const searchforms = [
    `<form id="searchform-anything" method="get" target="dummyframe" autocomplete="off">
        <input autofocus class="search-bar" type="text" id="search-anything" name="search" placeholder="Start typing to search anything...">
        <input type="submit" style="position: absolute; left: -9999px; width: 1px; height: 1px;" tabindex="-1" />
    </form>`,

    `<form id="searchform-movies" method="get" target="dummyframe" autocomplete="off">
        <input autofocus class="search-bar" type="text" id="search-movies" name="search" placeholder="Start typing to search Movies.">
        <input type="submit" style="position: absolute; left: -9999px; width: 1px; height: 1px;" tabindex="-1" />
    </form>`,

    `<form id="searchform-tv" method="get" target="dummyframe" autocomplete="off">
        <input autofocus class="search-bar" type="text" id="search-tv" name="search" placeholder="Start typing to search TV Shows.">
        <input type="submit" style="position: absolute; left: -9999px; width: 1px; height: 1px;" tabindex="-1" />
    </form>`,

    `<form id="searchform-people" method="get" target="dummyframe" autocomplete="off">
        <input autofocus class="search-bar" type="text" id="search-people" name="search" placeholder="Start typing to search People.">
        <input type="submit" style="position: absolute; left: -9999px; width: 1px; height: 1px;" tabindex="-1" />
    </form>`,

    `<form id="searchform-collection" method="get" target="dummyframe" autocomplete="off">
        <input autofocus class="search-bar" type="text" id="search-collection" name="search" placeholder="Start typing to search Collections.">
        <input type="submit" style="position: absolute; left: -9999px; width: 1px; height: 1px;" tabindex="-1" />
    </form>`,

     `<form id="searchform-keyword" method="get" target="dummyframe" autocomplete="off">
        <input autofocus class="search-bar" type="text" id="search-keyword" name="search" placeholder="Start typing to search all.">
        <input type="submit" style="position: absolute; left: -9999px; width: 1px; height: 1px;" tabindex="-1" />
    </form>`,
]