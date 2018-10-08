// Reference Variables
let $tbody = document.querySelector("tbody");
let $dateInput = document.querySelector("#date");
let $cityInput = document.querySelector("#city");
let $stateInput = document.querySelector("#state");
let $countryInput = document.querySelector("#country");
let $shapeInput = document.querySelector("#shape");
let $searchButton = document.querySelector("#search");

// Add event listener to the search button named searchinput
$searchButton.addEventListener("click", searchinput);

// Define UFO_Data
let ufo_Data = dataSet;

// TableDisplay function for rendering data on the body
function TableDisplay() {
    $tbody.innerHTML = "";
    for (let i = 0; i < ufo_Data.length; i++) {
        let info = ufo_Data[i];
        let fields = Object.keys(info);
        let $row = $tbody.insertRow(i);
        for (let j = 0; j < fields.length; j++) {
            let field = fields[j];
            let $cell = $row.insertCell(j);
            $cell.innerText = info[field];
        }
    }
}

function searchinput() {
    // Edit user search input by eliminating white space and make it non-case sensitive
    let filterDate = $dateInput.value.trim();
    let filterCity = $cityInput.value.trim().toLowerCase();
    let filterState = $stateInput.value.trim().toLowerCase();
    let filterCountry = $countryInput.value.trim().toLowerCase();
    let filterShape = $shapeInput.value.trim().toLowerCase();
    // ufo_Data to array of ufo sightings to match the filter
    ufo_Data = dataSet.filter(function(ufoSighting) {
        let searchDate = ufoSighting.datetime;
        let searchCity = ufoSighting.city.toLowerCase();
        let searchState = ufoSighting.state.toLowerCase();
        let searchCountry = ufoSighting.country.toLowerCase();
        let searchShape = ufoSighting.shape.toLowerCase();
        // If statements to match search criteria with filtered criteria
        if (
            (searchDate === filterDate || filterDate === "") &&
            (searchCity === filterCity || filterCity === "") &&
            (searchState === filterState || filterState === "") &&
            (searchCountry === filterCountry || filterCountry === "") &&
            (searchShape === filterShape || filterShape === "")
        ) {
            return true;
        }
        return false;
    });
    TableDisplay();

    // Clear user input search
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
}

// Display table during the initial page load
TableDisplay();