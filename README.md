## COLOURS
Tool To Color Console Log Test

## SETUP

Install With
```bash
npm i cons-colours
```

Define The App With
```js
const {colours} = require('cons-colours')
```
Create Color maker With
```js
const maker = new colours({
	type: "bg" //background/bg, font/fg, 
})
```

Text Editing
```js
maker.hidden("Hello World")
maker.blink("Hello World")
maker.reverse("Hello World")
maker.underscore("Hello World")
maker.dim("Hello World")
maker.bright("Hello World")
maker.reset("Hello World")
```
Text Coloring
```js
maker.black("Hello World")
maker.red("Hello World")
maker.green("Hello World")
maker.yellow("Hello World")
maker.blue("Hello World")
maker.magenta("Hello World")
maker.cyan("Hello World")
maker.crimson("Hello World")
maker.white("Hello World")
```

## FULL CODE
```js
const {colours} = require('cons-colours')

const maker = new colours({
	type: "fg" //background/bg, font/fg
})

console.log(maker.red("Hello World") + maker.reset())
```

You Should See Colored "Hello World" In Console/Terminal