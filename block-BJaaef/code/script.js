{/* <div class="box">
        <ul class="peoples">
          <li>
            <div class="">
              <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg"
                   alt="img1"> <span> <h2 class="heroName"> Eddard "Ned" Stark</h2></span>
            </div>
                 <p> "Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark",</p>
                 <button>Learn More</button>
          </li>
        </ul>
      </div> */}
      

      let box = document.createElement('div');
      
got.houses.forEach((person => {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let image = document.createElement('div')
    image.classList.add('image');
    let img = document.createElement('img');
    img.src = person.image;
    img.alt = person.wikiLink;
    let h2 = document.createElement('h2');
    h2.innerText = person.people.map((n)=> n.name);
    let p = document.createElement('p');
    p.innerText = person.people.map((des)=> des.description);
    let button = document.createElement('button');
    button.innerText = "Learn More";
    li.append(image, h2, p, button);
    ul.append(li);
    console.log(ul)
    box.append(ul);

}))