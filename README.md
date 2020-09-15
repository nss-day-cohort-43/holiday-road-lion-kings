# Lion Kings Adventure presents Holiday Road

The purpose of this app is to provide a user with customizable vacation itinerary. 

## Description

The user begins the process by selecting a state. The app then provides a list of parks to choose from based on the state selection. Once a park is chosen, a five day weather forecast will populate for that exact area based on coordinates. From there the user will choose an attraction and an eatery, both also filtered by state. When the user is satisfied with a choice, they can add to the itinerary preview by clicking the "add to itinerary" button. Finally, after viewing all three choices in the preview area, the user can save their trip data with the save button. These saved trips will persist in the internal API.

## Getting Started

### Dependencies

* JSON server
* GitHub
* OpenWeatherMap Weather API [Weather API](https://openweathermap.org/api)
* National Park Service API [National Park Service API] (https://www.nps.gov/subjects/digital/nps-data-api.htm)

### Installing

* Fork project on github
* Procure API keys from provided API links
* In the scripts directory, you will see a file named .Settings.js-note the dot at the beginning.
* Copy that file with cp .Settings.js Settings.js. The Settings.js file is already in the .gitignore file, so it won't ever be tracked by git.
* Put your API keys in the corresponding places.

### Executing program

* How to run the program
    * open terminal
    * cd into API directory
    * run 
    ```
    json-server -p 8088 -w db.json
    ```
    * serve the project

## Help

* Make sure to run JSON server from API directory

## Authors

Contributors names and contact info

Terra Roush
Sam Edwards
Hanako Hashiguchi
Tristan Wyatt

## Version History

* 0.1
    * Initial Release

## Acknowledgments

Thank you DOMPizzie for the [README template] (https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)