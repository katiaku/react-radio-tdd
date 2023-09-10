// Radio Streaming Station Search and Selection Application
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

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
})

// 3 - List of radio stations
// 3a - There must be a list of radio stations
// 3b - The list must initialize as empty
// 3c - When a valid search is performed, the list should display at least one result
// 3d - When an invalid search is performed (no match found), the list should display a message "No radio stations found for this search"
