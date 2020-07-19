// All DOM elements

export const DOMelements = {
    searchInput: document.getElementById("searchKeyword"),
    searchForm: document.getElementById("searchform"),
    searchResults: document.getElementById("search-results"),
    movieDisplay: document.getElementById("movie-display"),
    movieCards: document.getElementsByClassName("movie-card-wrapper"),
    onboardingDisplay: document.getElementById("onboarding"),
    gobackToSearch: document.getElementById("goback-to-search"),

    searchAnything: document.getElementById("searchform-anything"),
    searchMovies: document.getElementById("searchform-movies"),
    searchTV: document.getElementById("searchform-tv"),
    searchPeople: document.getElementById("searchform-people"),
    searchCollection: document.getElementById("searchform-collection"),
    searchKeyword: document.getElementById("searchform-keyword"),
    searchForms: document.getElementById("search-forms"),

    searchChooserID: document.getElementById("search-chooser"),
    scba: document.getElementById("scba"),

   anythingChooser: document.getElementById("google-search"),
   moviesChooser: document.getElementById("movies-search"),
   TVChooser: document.getElementById("tv-search"),
   peopleChooser: document.getElementById("people-search"),
   collectionChooser: document.getElementById("collection-search"),
   keywordChooser: document.getElementById("keyword-search"),
   searchChooser: ["google", "movies", "tv", "people", "collection", "all"],
}