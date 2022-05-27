// let box = document.createElement('div');
      
// got.houses.forEach((person => {
//     let ul = document.createElement('ul');
//     let li = document.createElement('li');
//     let image = document.createElement('div')
//     image.classList.add('image');
//     let img = document.createElement('img');
//     img.src = person.image;
//     img.alt = person.wikiLink;
//     let h2 = document.createElement('h2');
//     h2.innerText = person.people.map((n)=> n.name);
//     let p = document.createElement('p');
//     p.innerText = person.people.map((des)=> des.description);
//     let button = document.createElement('button');
//     button.innerText = "Learn More";
//     li.append(image, h2, p, button);
//     ul.append(li);
//     console.log(ul)
//     box.append(ul);

// }))

// method 2
console.log(got);
let parentElm = document.querySelector(".mainbox");

let allPeople = got.houses.reduce((acc,cv) => {
acc = acc.concat(cv.people);
return acc;
},[]);
console.log(allPeople);

let cardHTML = allPeople.map((person) => {
    retun `<li class ="card">
    <div class ="info">
    <img src= ${person.image}
    alt = ${person.name}
    />
    <h2>${person.name}</h2>
    </div>
    <p>
    ${person.description}
    </p>
    <a href = ${person.wikiLink}>Learn More! </a>
    </li>`;
});
parentElm.innerHTML = cardHTML.join("");