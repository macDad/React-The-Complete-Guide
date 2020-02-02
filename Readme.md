### Section 2: Refreshing Next Generation JavaScript (Optional)
#### let & const
* let - variable values

```
    let myName = 'Mac';
    console.log(myName);

    myName = 'Manu';
    console.log(myName);

    //--------out put------------
    "Mac"
    "Manu"

```
* const - constant values

```
    const myName2 = 'Mac2';
    console.log(myName2);

    myName2 = 'Manu2';
    console.log(myName2);


    //--------------out put-------------
    "Mac2"
    "error"
    "TypeError: Assignment to constant variable.
    at null.js:10:9
    at https://static.jsbin.com/js/prod/runner-4.1.7.min.js:1:13924
    at https://static.jsbin.com/js/prod/runner-4.1.7.min.js:1:10866"
  ```


#### Arrow Functions
* Old function

  ```
  function printMyName(name){
    console.log(name);
  }
  printMyName('Mac');
  ```
* New Arrow Function

  ```
  const printMyNameArrow = (name) => {
    console.log(name);
  }
  printMyNameArrow('Mac');
  ```

#### Classes
* Property
* Method
* Inheritance

```
class Human{
  constructor(){
    this.gender = 'Male';
  }
  printGender(){
    console.log(this.gender)
  }
}
class Person extends Human{
  constructor(){
    super();
    this.name = 'Mac';
  }
  printMyName(){
    console.log(this.name)
  }
}

const person = new Person();
person.printMyName();
person.printGender();

//---------------output------------
"Mac"
"Male"
```
#### Classes, Properties and Methods
* with ES6/Babel

```
class Human{
  gender = 'Male';  

  printGender = () => {
    console.log(this.gender)
  }
}
class Person extends Human{   
  name = 'Mac';

  printMyName= () => {
    console.log(this.name)
  }
}

const person = new Person();
person.printMyName();
person.printGender();
```

####  The Spread & Rest Operator
* Spread

```
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; <-----

console.log(newNumbers);

const person = {
  name: 'Mac'
};
const newPerson = {
  ...person,                    <-----
  age: '32'
};

console.log(newPerson);

```


* Rest

```
const filter = (...args) => {
  return args.filter(el => el ===1);
}

console.log(filter(1, 2, 3));

//---------------output------------
[1]
```

#### Destructuring
Easily extract array elements or object properties and store them in variables

* Array Destructuring

```
const numbers = [1, 2, 3];
[num1, , num3] = numbers;

console.log(num1, num3);

//---------------output------------
1
3
```
* Object Destructuring

```
{name} = {name: 'Mac',age: 28};

console.log(name);//Mac
console.log(age);//undefined
```

#### Refreshing Array Functions
Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce()  etc.
```
const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers); // [1, 2, 3]
console.log(doubleNumArray); // [2, 4, 6]
```
#### React.js cheatsheet

https://devhints.io/react

#### Using Create React App
> npm install create-react-app -g

> npx create-react-app  -g


> npx create-react-app react-complete-guide


> npx create-react-app react-complete-guide --script-version 1.1.5

-----------------------------

>npm install --save prop-types


------------------------------

####  Handling Events with Methods
https://reactjs.org/docs/events.html#supported-events


#### Function Components Naming

In the **next lecture**, we'll learn how to manage state in functional components (instead of class-based components).

In case you're getting an error with the code shown in the next lecture, simply assign a capitalized variable name to the variable that holds your functional component.

###### Example:

Use

```
const App = () => { ... }
```
instead of

```
const app = () => { ... }
```
Technically, that's not required but depending on your project setup, the built-in linter (a code quality checking tool) that comes with create-react-app might not like the lowercase variable name.

You can also avoid this by creating projects with the **right react-scripts version**, which I would **recommend for this course** anyways (see the setup video, lecture 26)

```
> create-react-app my-app --scripts-version 1.1.5
```


#### 46. Passing Method References Between Components

Try to Use
> bind

```
click={switchNameHandler.bind(this, 'XXXXXXX')}
```
instead of

```
onClick={ () => {switchNameHandler('XXXXXXX !!')}}
```

#### Assignment: Time to Practice - The Base Syntax
>>> Useful Resources & Links

* create-react-app: https://github.com/facebookincubator/create-react-app
* Introducing JSX: https://reactjs.org/docs/introducing-jsx.html
* Rendering Elements: https://reactjs.org/docs/rendering-elements.html
* Components & Props: https://reactjs.org/docs/components-and-props.html
* Listenable Events: https://reactjs.org/docs/events.html


#### Assignment: Time to Practice - Lists & Conditionals
>>> Useful Resources & Links

Useful Resources & Links
Conditional Rendering: https://reactjs.org/docs/conditional-rendering.html
Lists & Keys: https://reactjs.org/docs/lists-and-keys.html

#### 68. Adding and Using Radium
Radium is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS.

https://formidable.com/open-source/radium/

```
yarn add radium
# or
npm install --save radium
```
###### Features
* Conceptually simple extension of normal inline styles
* Browser state styles to support :hover, :focus, and :active
* Media queries
* Automatic vendor prefixing
* Keyframes animation helper
* ES6 class and createClass support


#### 70. Introducing Styled Components

https://www.styled-components.com/

> Installation

```
npm install --save styled-components
```

#### 73. Working with CSS Modules

run
```
npm run eject
```
######  Why are you ejecting?

There are 3 primary reasons why someone might choose to eject and each reason has either drawbacks or alternatives that should first be investigated.
* _“I can manage the build on my own” or “I want full control over my project.”_
* _“Create-React-App is missing a feature that I need, so I’m going to add it myself.”_
* _“I’m curious about the build process and want to learn how it works.”_

then change **webpack.config.js** file

> Webpacker only supports ```css-loader``` versions greater than **2.1.1**, and less than **3.0.0**.

Old config was:
```
{
	loader: "css-loader",
	options: {
	    modules: true,
	    localIdentName: "[name]__[local]___[hash:base64:5]",
	    sourceMap: isDevelopment
	}
}
```
above 3.0.0.
```
{
	loader: "css-loader",
	options: {
	    modules: {
	        localIdentName: "[name]__[local]___[hash:base64:5]",
	    },														
	    sourceMap: isDevelopment
	}
}
```

**For React latest version no need eject.**
>Note: this feature is available with react-scripts@2.0.0 and higher.

use `xxx.module.css`

https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

##### Button.module.css

```
.error {
  background-color: red;
}
```
##### another-stylesheet.css
```
.error {
  color: red;
}
```
##### Button.js
```
import React, { Component } from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles
import './another-stylesheet.css'; // Import regular stylesheet
class Button extends Component {
  render() {
    // reference as a js object
    return <button className={styles.error}>Error Button</button>;
  }
}
```

***Useful Resources & Links***

Using CSS Modules in create-react-app Projects: https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2

More information about CSS Modules: https://github.com/css-modules/css-modules


#### Section 6: Debugging React Apps
##### 80. Working with the React Developer Tools

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

###### 81. Using Error Boundaries (React 16+)

```
const rnd = Math.random();
   if (rnd > 0.7) {
       throw new Error('Something went wrong');
   }
```

###### Useful Resources & Links

* Error Boundaries: https://reactjs.org/docs/error-boundaries.html

* Chrome Devtool Debugging: https://developers.google.com/web/tools/chrome-devtools/javascript/


#### 97. Using shouldComponentUpdate for Optimization
javascript reference vs primitive values

https://academind.com/learn/javascript/reference-vs-primitive-values/


#### 102. Rendering Adjacent JSX Elements

Windows Users Must Read

**On Windows**, the Aux.js  filename is not allowed in ZIP archives. Hence when extracting the attached source code, you might get prompted to rename the Aux.js  file. You might also **face difficulties creating an Aux folder** and Aux.js file.

hoc ----> high order component.

Aux.js ---->  for windows  Auxiliary.js

#### 104. Using React.Fragment

Can replace `<Auxiliary>` with ` <React.Fragment>` or ` <Fragment>` with
```
import React, {Component, Fragment} from 'react';
```

#### 110. Using Refs

__**Class base ref**__


inputEl  

```
componentDidMount() {
  this.inputElement.focus();
}

<input ref={(inputEl) => { this.inputElement = inputEl  }} />
   ```
constructor based

```
constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
}
componentDidMount() {
    this.inputElementRef.current.focus();
}

<input ref={this.inputElementRef} />
```

__**Functional componane ref**__

```
const toggleBtnRef = useRef(null);

useEffect(() => {
      toggleBtnRef.current.click();
    return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
    };
}, []);

<button ref={toggleBtnRef} className={btnClass}
 onClick={props.clicked}>Toggle Persons</button>

```
#### 114. contextType & useContext()

```
static contextType = AuthContext;
```

need to write **`contextType`** correctly.



***Useful Resources & Links***

>Useful Resources:

* More on useEffect(): https://reactjs.org/docs/hooks-effect.html

* State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html

* PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html

* Higher Order Components: https://reactjs.org/docs/higher-order-components.html

* Refs: https://reactjs.org/docs/refs-and-the-dom.html

### Section 8: A Real App: The Burger Builder (Basic Version)

#### 153. Setting up the Project

* change fonts from
https://fonts.google.com/?selection.family=Open+Sans:400,700


#### Global constant

```
const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4
}
class BurgerBuilder extends Component {

```

#### 191. Understanding our Project and   Introducing Axios

Fake Online REST API for Testing and Prototyping

https://jsonplaceholder.typicode.com/

##### axios
https://github.com/axios/axios

Promise based HTTP client for the browser and node.js

##### Features

- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
- Make [http](http://nodejs.org/api/http.html) requests from node.js
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client side support for protecting against [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)



> npm install --save axios
