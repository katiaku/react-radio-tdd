// Radio Streaming Station Search and Selection Application
import { render } from "@testing-library/react"
import App from "./App"

// 0 - The application must render correctly
describe('0 - The application must render correctly', () => {
    test('0 - The application must render correctly', () => {
        const r = render(<App />);
        expect(r).toBeDefined();
    })
})

// 1 - The name of the application should be displayed somewhere => "OpenRadioCamp"

// 2 - We should be able to search for radio stations by name
// 2a - The application must have an input field with the placeholder => "Enter the radio station's name"
// 2b - The application must have a search button => Text "Search"
// 2c - When we click on the search button, the search function should be executed only once

// 3 - List of radio stations
// 3a - There must be a list of radio stations
// 3b - The list must initialize as empty
// 3c - When a valid search is performed, the list should display at least one result
// 3d - When an invalid search is performed (no match found), the list should display a message "No radio stations found for this search"
