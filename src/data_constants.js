
export const DATA_IDS = ["BUSINESS-FREEDOM", "CORRUPTION-FREEDOM","TIME-TO-OPEN-BUSINESS","LABOR-RESTRICTIONS",
"POPULATION-SIZE", "POPULATION-UA-CENTER-DENSITY", "POPULATION-UA-DENSITY",
"WEATHER-AV-DAY-LENGTH","WEATHER-AV-NUMBER-CLEAR-DAYS","WEATHER-AV-NUMBER-RAINY-DAYS",
"WEATHER-AV-POSSIBILITY-SUNSHINE","WEATHER-AVERAGE-HIGH","WEATHER-AVERAGE-LOW",
"WEATHER-AVERAGE-LOW","WEATHER-SUNSHINE-AMOUNT","WEATHER-TYPE",
"COST-APPLES","COST-BREAD","COST-CAPPUCCINO","COST-CINEMA","COST-FITNESS-CLUB",
"COST-IMPORT-BEER","COST-PUBLIC-TRANSPORT","COST-RESTAURANT-MEAL","COST-TAXI","RESTAURANT-PRICE-INDEX",
"GDP-GROWTH-RATE","GDP-PER-CAPITA","HEALTHCARE-LIFE-EXPECTANCY","APARTMENT-RENT-SMALL","APARTMENT-RENT-MEDIUM","APARTMENT-RENT-LARGE",
"ELDERLY-PEOPLE","LIFE-EXPECTANCY","MEDIAN-AGE","UNEMPLOYMENT-RATE","CULTURE-ART-GALLERIES-VENUE-COUNT","CULTURE-MUSEUMS-VENUE-COUNT","CULTURE-CONCERTS-VENUE-COUNT","CULTURE-SPORTS-VENUE-COUNT","GUN-DEATH-RATE","GUN-OWNERSHIP","SPOKEN-LANGUAGES"
]

export const DATA_SECTIONS = [
    {
        label: 'Business',
        id: "BUSINESS-FREEDOM"
    },
    {
        label: 'City size',
        id: "CITY-SIZE"
    },
    {
        label: 'Climate',
        id: "CLIMATE"
    },
    {
        label:"Cost of living",
        id: "COST-OF-LIVING"
    },
    {
        label: "Economy",
        id: "ECONOMY"
    },
    {
        label: "Healthcare",
        id:"HEALTHCARE"
    },
    {
        id: "HOUSING",
        label: "Housing"
    },
    {
        id: "INTERNAL",
        label: "Internal application use"
    },
    {
        id: "CULTURE",
        label: "Leisure & Culture"
    },
    {
        id:"SAFETY",
        label: "Safety"
    },
    {
        id:"LANGUAGE",
        label: "Language"
    }
]

export const CATEGORY_IDS = DATA_SECTIONS.map(s => s.id)
