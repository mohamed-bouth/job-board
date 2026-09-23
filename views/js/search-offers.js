import { getData } from './utils/data.js'
import { renderSearchInfo, renderOffers } from './utils/render.js'
import { filterCities } from './utils/filterSearchData.js'

const citiesContainer = document.querySelector('.filter-group select')
const technologiesContainer = document.querySelector('.tech-cloud')
const offersContainer = document.querySelector('.results-list')

const offers = await getData()

renderSearchInfo(citiesContainer, technologiesContainer, offers)

const searchInput = document.querySelector('.search-input')
const citiesSelect = document.querySelector('.cities-select')
const contractTypes = document.querySelectorAll('.contrat')
const technologyTags = document.querySelectorAll('.tech-pill')
const offerNumberTag = document.querySelector('.highlight-text')
const clearBtn = document.querySelector(".btn-clear")
const contratInputDeafult = document.querySelector(".contrat-deafult")
const sortSelect = document.querySelector(".sort")

const filterOption = {
    search: "",
    city: "all",
    contractType: "all",
    technologiesChoosen: [],
    sort: "desc"
}


const searchData = JSON.parse(localStorage.getItem("searchData"))
if(searchData != null){
    filterOption.search = searchData.title
    searchInput.value = searchData.title
    citiesSelect.value = searchData.city
    filterOption.city = searchData.city

    renderOffers(offersContainer, filterOffers(offers))
    localStorage.removeItem('searchData')
}else{
    renderOffers(offersContainer, offers)
}

offerNumberTag.textContent = `${offers.length} opportunities`

function filterOffers(offers) {
    let newOffers = [...offers]
    const { search, city, contractType, technologiesChoosen, sort } = filterOption;
    if (search !== "") {
        newOffers = newOffers.filter(offer => offer.title.toLowerCase().includes(search))
    }
    if (city !== "all") {
        newOffers = newOffers.filter(offer => offer.city === city)
    }
    if (contractType !== "all") {
        newOffers = newOffers.filter(offer => offer.contractType === contractType)
    }
    if (technologiesChoosen.length > 0) {
        newOffers = newOffers.filter(offer => {
            let flag = false
            offer.technologies.forEach(offerTechnologies => {
                technologiesChoosen.forEach(searchTechnologies => {
                    if (offerTechnologies === searchTechnologies) {
                        flag = true
                    }
                })
            })
            if (flag) {
                return true
            }
            return false
        })
    }
    if (sort === "desc") {
        newOffers = newOffers.sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
    } else {
        newOffers = newOffers.sort((a, b) => new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime())
    }

    offerNumberTag.textContent = `${newOffers.length} opportunities`
    return newOffers

}

searchInput.addEventListener('input', () => {
    filterOption.search = searchInput.value.toLowerCase()
    renderOffers(offersContainer, filterOffers(offers))
})

citiesSelect.addEventListener("change", () => {
    filterOption.city = citiesSelect.value
    renderOffers(offersContainer, filterOffers(offers))
})


contractTypes.forEach(contractType => {
    contractType.addEventListener("change", () => {
        filterOption.contractType = document.querySelector(".contrat:checked").value
        renderOffers(offersContainer, filterOffers(offers))
    })
})


technologyTags.forEach(tech => {
    tech.addEventListener('click', () => {
        if (!tech.classList.contains('active')) {
            tech.classList.add('active')
            filterOption.technologiesChoosen.push(tech.textContent)
            renderOffers(offersContainer, filterOffers(offers))
            return
        }
        tech.classList.remove('active')
        filterOption.technologiesChoosen = filterOption.technologiesChoosen.filter(technology => technology !== tech.textContent)
        renderOffers(offersContainer, filterOffers(offers))
    })
})

sortSelect.addEventListener("change", () => {
    filterOption.sort = sortSelect.value
    renderOffers(offersContainer, filterOffers(offers))
})

clearBtn.addEventListener("click", () => {
    filterOption.search = ""
    filterOption.city = "all"
    filterOption.contractType = "all"
    filterOption.technologiesChoosen = []
    filterOption.sort = "desc"

    searchInput.value = ''
    citiesSelect.value = 'all'
    contratInputDeafult.checked = true
    sortSelect.value = 'desc'
    technologyTags.forEach(tech => {
        if (tech.classList.contains('active')) {
            tech.classList.remove('active')
        }
    })
    renderOffers(offersContainer, offers)
})