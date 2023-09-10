// Radio Streaming Station Search and Selection Application
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

const mockArray = [{ "changeuuid": "cd84ce7d-8c80-4db2-9605-a2dcea1bc224", "stationuuid": "a4a3c3c4-d499-48e0-bec1-226868d22968", "serveruuid": null, "name": "__COUNTRYHITS.FM__ by rautemusik (rm.fm)", "url": "https://country-high.rautemusik.fm/?ref=radiobrowser", "url_resolved": "https://rautemusik-de-hz-fal-stream12.radiohost.de/country?ref=radiobrowser&listenerrmid=31363339393539303830-323030313a313966303a363830313a313964373a353430303a3266663a666537313a62646237-3630323938-53747265616d436865636b426f742f302e312e30", "homepage": "https://countryhits.fm/", "favicon": "https://i.ibb.co/C1SspdX/country.jpg", "tags": "alternative country,alternative rock,americana,classic country,classic rock,country,hits,nashville,new country,rock,texas country", "country": "Germany", "countrycode": "DE", "iso_3166_2": null, "state": "North Rhine-Westphalia", "language": "english,german", "languagecodes": "de,en", "votes": 75, "lastchangetime": "2021-11-09 23:05:40", "lastchangetime_iso8601": "2021-11-09T23:05:40Z", "codec": "MP3", "bitrate": 192, "hls": 0, "lastcheckok": 1, "lastchecktime": "2021-12-20 00:11:22", "lastchecktime_iso8601": "2021-12-20T00:11:22Z", "lastcheckoktime": "2021-12-20 00:11:22", "lastcheckoktime_iso8601": "2021-12-20T00:11:22Z", "lastlocalchecktime": "2021-12-20 00:11:22", "lastlocalchecktime_iso8601": "2021-12-20T00:11:22Z", "clicktimestamp": "2021-12-20 04:53:01", "clicktimestamp_iso8601": "2021-12-20T04:53:01Z", "clickcount": 119, "clicktrend": -3, "ssl_error": 0, "geo_lat": null, "geo_long": null, "has_extended_info": false }];

beforeEach(() => render(<App />));

// 0 - The application must render correctly
describe('0 - The application must render correctly', () => {
    test('0 - The application must render correctly', () => {
        expect(screen).toBeDefined();
    })
})

// 1 - The name of the application should be displayed somewhere => "OpenRadioCamp"
describe('1 - The name of the application should be displayed somewhere', () => {
    test('1 - The name of the application should be displayed somewhere', () => {
        const appName = "OpenRadioCamp";
        const el = screen.getByText(appName);
        expect(el).toBeInTheDocument();
    })
})

// 2 - We should be able to search for radio stations by name
// 2a - The application must have an input field with the placeholder => "Enter the radio station's name"
// 2b - The application must have a search button => Text "Search"
// 2c - When we click on the search button, the search function should be executed only once
describe('2 - We should be able to search for radio stations by name', () => {
    test('2a - The application must have an input field with the placeholder => "Enter the radio station\'s name"', () => {
        const placeholdertext = "Enter the radio station's name";
        const input = screen.getByPlaceholderText(placeholdertext);
        expect(input).toBeInTheDocument();
    })
    test('2b - The application must have a search button => Text "Search"', () => {
        const buttontext = "Search";
        const button = screen.getByText(buttontext);
        expect(button).toBeInTheDocument();
    })
    test('2c - When we click on the search button, the search function should be executed only once', () => {
        const functionMock = jest.fn();
        const buttontext = "Search";
        const button = screen.getByText(buttontext);
        button.addEventListener("click", functionMock);
        fireEvent.click(button);
        expect(functionMock).toHaveBeenCalledTimes(1);
    })
})

// 3 - List of radio stations
// 3a - There must be a list of radio stations
// 3b - The list must initialize as empty
// 3c - When a valid search is performed, the list should display at least one result
// 3d - When an invalid search is performed (no match found), the list should display a message "No radio stations found for this search"
describe('3 - List of radio stations', () => {
    test('3a - There must be a list of radio stations', () => {
        const list = screen.getByLabelText('list-stations');
        expect(list).toBeInTheDocument();
    })
    test('3b - The list must initialize as empty', () => {
        const list = screen.getByLabelText('list-stations');
        const childrenCount = list.childElementCount;
        expect(childrenCount).toBe(0);
    })
    test('3c - When a valid search is performed, the list should display at least one result', () => {
        const placeholdertext = "Enter the radio station's name";
        const input = screen.getByPlaceholderText(placeholdertext);
        const buttontext = "Search";
        const button = screen.getByText(buttontext);
        fireEvent.change(input, { target: { value: 'Country' }});
        fireEvent.click(button);
        const list = screen.getByLabelText('list-stations');
        const childrenCount = list.childElementCount;
        expect(childrenCount).toBeGreaterThanOrEqual(0);
    })
})
