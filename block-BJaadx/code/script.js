// 1. Change the title of the page to `Hello AltCampus!`
document.title = "AltCampus";
// 2. Select the element using the children property:
document.body[5].children[ul]
//    - Select the `h1` element and change the value to `Learning DOM`
let head = document.querySelector('h1')
head.innerText = "Learning DOM";

//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
let ul = document.querySelector('ul')
ul.children[0].innerText = "all about document";
//    - Select the input element with name `email`
let input = document.querySelectorAll('input')
input[0].name;
// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
ul.children.foreach((child) => console.log(child[i]));
// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let emailInput = document.querySelectorAll('input');
emailInput[0].type;
// 5. Select the ul element using class selector and store in `topics`
let topics = document('.topics');
topics.ul;
// 6. Select the first label element and store in `label`
let label = document.querySelectorAll('label');
label[0]
// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let inputCheckbox = document.getElementById('checkbox');
// 8. Select the input of type password using Attribute selectors.(eg: input[type="text"]) and store in `password`
let password = document.querySelectorAll('input');
password[1].input[type = " "];
// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`

// 10. Select all the `li` element and store in `allTopics`

// 11. Select all the input element of any type and store in `allInput`

// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.

// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`

// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`

// 15. Select all the img element and log the number of element saying `The total number of img element is ---`

// 16. Select all the `p` element and store in `allPElement`

// 17. Select all the buttons and log the count of buttons.

// 18. Select all the `label` element and log the count.

// 19. Select all the elements with `id` of `test`

// 20. Select the first element with id `test` using `getElementById`

// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.

// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.

// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.

// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.

// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.

// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.

// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
