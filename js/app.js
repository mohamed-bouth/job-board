import { getData } from "./utils/data.js";
import { renderOffers ,renderCitesHome } from "./utils/render.js";
import { paginate } from "./utils/paginate.js";
import { loadMainSearchEvent } from "./utils/saveHomeSearchOption.js";
import { filterCities } from "./utils/filterSearchData.js";

const paginationBtn = document.querySelector(".pagination-btn")
const CardContainer = document.querySelector(".grid")
const citiesSelect = document.querySelector('#search-city')
const flex = document.querySelector(".flex")

let pageNumber = 1
let cardsrendered = 6
const offers = await getData()

const cities = filterCities(offers)
renderCitesHome(citiesSelect ,cities)
loadMainSearchEvent()

if (offers.length === 0) {
    console.log('hello')
    renderOffers(flex, [])
} else {
    const paginatedOffers = paginate(offers, cardsrendered, pageNumber)
    renderOffers(CardContainer, paginatedOffers)
    paginationBtn.textContent = `Load more offers (${offers.length - (pageNumber * cardsrendered)} remaining)`
}

paginationBtn.addEventListener("click", () => {
    const newPaginatedOffers = paginate(offers, cardsrendered, ++pageNumber)
    renderOffers(CardContainer, newPaginatedOffers, false)
    if (offers.length - (pageNumber * cardsrendered) <= 0) {
        paginationBtn.disabled = true
        paginationBtn.textContent = "No more offers to load"
    } else {
        paginationBtn.textContent = `Load more offers (${offers.length - (pageNumber * cardsrendered)} remaining)`
    }
})