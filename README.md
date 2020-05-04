# Playground

This is @realJema *playground* with react to learn how it works and t work on some interesting projects. 


### Learning React 
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