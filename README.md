# Playground

This is @realJema *playground* with react to learn how it works and t work on some interesting projects. 

## Learning REST API
The API components are:  
1. API endpoint
It is a unique URL that contains the objects or collection of objects:
2. Headers
Headers are used to give server instructions about the variables in the request. It is used for web communication. These are those fields of the packet that describe to the server the kinds of web pages that are being requested by the client, and consequently enable the client to access these pages.
3. Method
HTTP methods (or verbs) are a list of functions that perform corresponding operations that usually involve creation/reading/updating/deleting (CRUD) a resource.
Since we want to GET all the list of messages in the users account therefore the method used will be “get”.
4. Data
Data is generally given when we are creating, updating, or deleting something. In general, data is required when method is POST, PUT or DELETE. Here we are using a GET request therefore data is not required.
5. Params
These are user specifications passed to the endpoint that affects the type of response generated. The different types include header parameters, path parameters, query string parameters and request body parameters. If we only want the top 10 messages as response and not the whole list of 100–1000 messages then we will set the params as:

## Learning React 
#### Book: Pro React 
> *Build Complex front-end Applications in a composable way with React*

React is an engine for building composable user interfaces using JavaScript and (optionally) XML.


##### package.json
A **package.json** file. The package.json is a standard npm manifest file
that holds various information about the project, such a name, description,
information about the author, etc. It lets the developer specify dependencies
(that can get automatically downloaded and installed) and define script tasks

##### Props
A key factor to make components reusable and composable is the ability to configure them, Props are the mechanism used in React for passing data from parent to child components.
syntax:   
```
this.props.<name>
```

they can't be changed by the child, they are owned by the parent. 

##### State
React’s components can have mutable data inside this.state.
state is limited to the component where it is defined and props can only be passed from parent to child, thats why we need frameworks like **redux**, to permit communication in the reverse direction and across children components 

 a component’s internal state is kept to minimum because every time the state changes, the
component is rendered again.

##### Events 
Touch and Mouse Events
----------------------------------------------------------

| onTouchStart | onTouchMove | onTouchEnd | onTouchCancel| onClick | onDoubleClick | onMouseDown | onMouseUp | onMouseOver| onMouseMove | onMouseEnter | onMouseLeave | onMouseOut | onContextMenu| onDrag | onDragEnter | onDragLeave | onDragExit | onDragStart| onDragEnd | onDragOver | onDrop

Keyboard Events
-------------------------------------------------------------

| onKeyDown | onKeyUp | onKeyPress

Focus and Form Events
-------------------------------------------------------------

| onFocus | onBlur| onChange | onInput | onSubmit

Other Events
----------------------------------------------------------

| onScroll | onWheel | onCopy | onCut | onPaste

##### Conditions 
Tenary expressions 
syntax: 
```
    <div>
        {condition ?
            <span>Hello JSX</span>
        : 
            <span>Not Hello JSX</span>
        }
    </div>
```
External definition 
```
render() {
    let result;
    if(condition){
        result = "salutation";
    }
    return (
        <div>
            {result}
        </div>
    )
}
```

##### Forms 
Controlled Components 
A form component with a value or checked prop is called a controlled component. In a controlled component, the value rendered inside the element will always reflect the value of the prop. By default the user won’t be able to change it

Uncontrolled Components
Controlled components adhere to React’s principles and have their advantages. While uncontrolled components are an anti-pattern for how most other components are constructed in React, sometimes you don’t need to oversee the user input field by field

##### Keys
 Keys are unique identifiers that allow for fast lookups
between trees for finding insertions, deletions, substitutions, and moves. Every time you create components
in a loop, it’s a good idea to provide a key for each child in order to help the React Library match and avoid
performance bottlenecks.

##### Refs 
Refs can be used as a string prop on any component, like so:
```
<input ref="myInput" />
```
The referenced DOM markup can then be accessed via this.refs, like so:
```
let input = this.refs.myInput;
let inputValue = input.value;
let inputRect = input.getBoundingClientRect();
```
##### propTypes 
help document your components, which benefits future development in two ways.
1. You can easily open up a component and check which props are required and what type they should be.
2. When things get messed up, React will give you an error message in the console, saying which props are wrong/missing and the render method that caused the problem.


## Projects 
Description of projects found in this playground 


### Finder 
A search engine showing different informations people bay be searching for. 

##### Installation 
Ensure that the mongodb is running 
create database with sample data using `/src/Api/finderApp_db_creation.py`. 
run the script 
`python finderApp_db_creation.py`

## Api
The api is built using python Flask and a mongodb database. 
**Database**: Mongodb 
**Framework**: Flask 
**Backend**: Python3

