// Foursquare API Info
const clientId = 'OUK1JT1GIAJBIKL4V5GLUHXDSKBGH3U2S0343HXGNQB54TGG';
const clientSecret = 'YK5JFQUI3MUFBTFWLWAYUQSIKNCKZKIV3QQ4IK43Z3KTVFTY';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// Weatherstack API Info
const apiKey = '99c499c1f2fa61a2fb4252a557d4c8d3';
const forecastUrl = 'https://api.weatherstack.com/forecast?access_key=';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20190914`;
    try {
        const response = await fetch(urlToFecth);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
            return venues;
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
};

const getForecast = async () => {
    const urlToFetch = `${forecastUrl}${apiKey}&q=${input.val()}&days=4&hour=11`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const days = jsonResponse.forecast.forecastday;
            return days;
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
};

// Render functions
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {

        const venue = venues[index];
        const venueIcon = venue.catagories[0].icon;
        const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
        let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
};

const renderForecast = (days) => {
    $weatherDivs.forEach(($day, index) => {

        const currentDay = days[index];
        let weatherContent = createWeatherHTML(currentDay);
        $day.append(weatherContent);
    });
};
