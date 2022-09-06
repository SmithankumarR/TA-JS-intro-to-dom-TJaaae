// method1
let gal = document.querySelector(".gal");
got.houses.forEach((house) => {
  house.people.forEach((people) => {
    let article = document.createElement("article");
    article.classList.add("card", "flex-30");

    let top = document.createElement("div");
    top.classList.add("flex");

    // let imgdiv = document.createElement("div");
    // imgdiv.classList.add("imageDiv", "flex-20");
    let img = document.createElement("img");
    img.classList.add("flexible-img", "flex-20");
    img.src = people.image;

    let name = document.createElement("h4");
    name.innerText = people.name;
    name.classList.add("flex-70");
    top.append(img, name);

    let detail = document.createElement("p");
    detail.innerText = people.description;
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-sec");
    btn.innerText = "Learn More";

    article.append(top, detail, btn);
    gal.append(article);
  });
});

// method 2
// console.log(got);
// let parentElm = document.querySelector(".mainbox");

// let allPeople = got.houses.reduce((acc,cv) => {
// acc = acc.concat(cv.people);
// return acc;
// },[]);
// console.log(allPeople);

// let cardHTML = allPeople.map((person) => {
//     retun `<li class ="card">
//     <div class ="info">
//     <img src= ${person.image}
//     alt = ${person.name}
//     />
//     <h2>${person.name}</h2>
//     </div>
//     <p>
//     ${person.description}
//     </p>
//     <a href = ${person.wikiLink}>Learn More! </a>
//     </li>`;
// });
// parentElm.innerHTML = cardHTML.join("");