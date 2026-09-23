import { getData } from "./utils/data.js";
import { renderOffers } from "./utils/render.js";
import { getFavorites, getApplications } from "./utils/storage.js";

const favoritesGrid = document.querySelector(".favorites-grid");
const applicationsGrid = document.querySelector(".applications-grid");

const allOffers = await getData();


const favoriteIds = new Set(getFavorites().map(id => String(id)));
const favoriteOffers = allOffers.filter(offer => favoriteIds.has(String(offer.id)));

if (favoritesGrid) {
    favoritesGrid.innerHTML = "";
    if (favoriteOffers.length === 0) {
        favoritesGrid.innerHTML = "<p>No favorite offers saved yet.</p>";
    } else {
        renderOffers(favoritesGrid, favoriteOffers);
    }
}


const appliedIds = new Set(getApplications().map(id => String(id)));
const appliedOffers = allOffers.filter(offer => appliedIds.has(String(offer.id)));

if (applicationsGrid) {
    applicationsGrid.innerHTML = "";
    if (appliedOffers.length === 0) {
        applicationsGrid.innerHTML = "<p>No applications submitted yet.</p>";
    } else {
        renderOffers(applicationsGrid, appliedOffers);
    }
}