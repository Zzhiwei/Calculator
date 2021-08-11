# Solution is done with the sole purpose of practising CSS thus html layout elements are not used!

# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). 

### Links

- Live Site URL: https://calculator-zhiwei.netlify.app/


### Screenshot

<img width="586" alt="Screenshot 2021-08-06 at 9 47 37 PM" src="https://user-images.githubusercontent.com/59001819/128520194-a006d044-7919-4239-83a1-2c6c904e5e57.png">
<img width="591" alt="Screenshot 2021-08-06 at 9 47 45 PM" src="https://user-images.githubusercontent.com/59001819/128520228-36af47ba-988c-4da4-a340-258d02d45caf.png">
<img width="575" alt="Screenshot 2021-08-06 at 9 47 53 PM" src="https://user-images.githubusercontent.com/59001819/128520235-c5ca2b89-7025-4d20-819f-2214da7d0e7b.png">


## My process

### Built with

- React
- SASS

### What I learned

- Theming 
- CSS GRID


### Code Snippet: How I did theming
```js

function getClass(str) {
    return `${str} ${theme === 1 ? "" : theme === 2 ? "theme2" : "theme3"}`
}

```
```html
<div className={getClass("body")}></div>
```
```css
.body.theme1 {
    background: $bodybg1;
}
.body.theme2 {
    background: $bodybg2;
}
.body.theme3 {
    background: $bodybg3;
}
```

