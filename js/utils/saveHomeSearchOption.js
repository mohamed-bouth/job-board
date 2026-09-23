function saveInputOnLocal(searchData) {
    localStorage.setItem("searchData", JSON.stringify(searchData))
}

function redirectToSerch(){
    window.location.href = "./public/search-offers.html"
}

export function loadMainSearchEvent() {

    const title = document.querySelector("#search-title")
    const city = document.querySelector("#search-city")
    const searchBtn = document.querySelector(".btn-primary")

    searchBtn.addEventListener("click", () => {

        const searchData = {
            title : title.value,
            city : city.value
        }

        saveInputOnLocal(searchData)
        redirectToSerch()
    })
}