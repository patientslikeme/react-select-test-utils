# react-select-test-utils

Helper functions for testing [JedWatson's react-select component](https://github.com/JedWatson/react-select)

## API

`search(select, queryString, callback)`

Executes a search in a react-select component and then calls a given callback function.

Parameters:

* `select` - an Enzyme wrapper containing the react-select component to search in
* `queryString` - the query to type into the component
* `callback` - a function to call once the search completes

`chooseOption(select, optionText)`

Chooses an option currently being displayed by a react-select component.

Parameters:

* `select` - an Enzyme wrapper containing the react-select component to choose from
* `optionText` - the label of the option to choose

`chooseOptionBySearching(select, queryString, optionText, callback)`

Executes a search in a react-select component, chooses an option once the results come back, and calls a callback function after choosing the option.

Parameters:

* `select` - an Enzyme wrapper containing the react-select component to search in and choose from
* `queryString` - the query to type into the component
* `optionText` - the label of the option to choose
* `callback` - a function to call once the search completes and the option is chosen

## License

react-select-test-utils is (c) 2016 PatientsLikeMe, Inc. and is released under the terms and conditions of the MIT License.  See the LICENSE file for details.
