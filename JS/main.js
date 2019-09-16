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
}
