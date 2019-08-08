const NAMERICA = 'NA'
const SAMERICA = 'SA'
const OCEANIA = 'OC'
const EUROPE = 'EU'
const AFRICA = 'AF'
const ASIA = 'AS'
const ANTARCTICA = 'AN'

const na = `https://api.teleport.org/api/continents/geonames%3A${NAMERICA}/urban_areas/`
const eu =  `https://api.teleport.org/api/continents/geonames%3A${EUROPE}/urban_areas/`
const africa = `https://api.teleport.org/api/continents/geonames%3A${AFRICA}/urban_areas/`
const antarctica = `https://api.teleport.org/api/continents/geonames%3A${ANTARCTICA}/urban_areas/`
const sa = `https://api.teleport.org/api/continents/geonames%3A${SAMERICA}/urban_areas/`
const asia = `https://api.teleport.org/api/continents/geonames%3A${ASIA}/urban_areas/`
const oceania = `https://api.teleport.org/api/continents/geonames%3A${OCEANIA}/urban_areas/`

const continentUrls = [na, eu, africa, antarctica, sa, asia, oceania]

const fetchCities = (continentUrl) => fetch(continentUrl)
    .then(response => response.json())
    .then(data => data._links['ua:items'])

const getAllCities = () => {
    return Promise.all(
        continentUrls.map(fetchCities)
    )
}

export default {
    getAllCities
}