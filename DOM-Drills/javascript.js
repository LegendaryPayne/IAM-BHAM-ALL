document.addEventListener("DOMContentLoaded", function() {
  headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  h1 = document.createElement("h1");
  text1 = document.createTextNode("This is an h1");
  h1.className = ("h1");
  h1.appendChild(text1);
  h1.addEventListener("dblclick", function() {
    let randomColor = getRandomColor();
    h1.style.color = randomColor;
})

  h2 = document.createElement("h2");
  text2 = document.createTextNode("This is an h2");
  h2.className = ("h2");
  h2.appendChild(text2);
  h2.addEventListener("click", function() {
    let randomColor = getRandomColor();
    h2.style.color = randomColor;
})

  h3 = document.createElement("h3");
  text3 = document.createTextNode("This is an h3");
  h3.className = ("h3");
  h3.appendChild(text3);
  h3.addEventListener("dblclick", function() {
    let randomColor = getRandomColor();
    h3.style.color = randomColor;
})

  h4 = document.createElement("h4");
  text4 = document.createTextNode("This is an h4");
  h4.className = ("h4");
  h4.appendChild(text4);
  h4.addEventListener("dblclick", function() {
    let randomColor = getRandomColor();
    h4.style.color = randomColor;
})

  h5 = document.createElement("h5");
  text5 = document.createTextNode("This is an h5");
  h5.className = ("h5");
  h5.appendChild(text5);
  h5.addEventListener("dblclick", function() {
    let randomColor = getRandomColor();
    h5.style.color = randomColor;
})

  h6 = document.createElement("h6");
  text6 = document.createTextNode("This is an h6");
  h6.className = ("h6");
  h6.appendChild(text6);
  h6.addEventListener("dblclick", function() {
    let randomColor = getRandomColor();
    h6.style.color = randomColor;
})

  headerContainer.appendChild(h1);
  headerContainer.appendChild(h2);
  headerContainer.appendChild(h3);
  headerContainer.appendChild(h4);
  headerContainer.appendChild(h5);
  headerContainer.appendChild(h6);
  document.body.appendChild(headerContainer);

  let btn = document.createElement("button");
  btn.innerText = "Click to add new list item";
  containerUl = document.createElement("ul")

  document.body.appendChild(btn);
  document.body.appendChild(containerUl);
  let id =1;
  btn.addEventListener("click", function() {
    let li = document.createElement("li");
    containerUl.appendChild(li);
    li.className = "listItems";
    li.setAttribute("id", id);
    li.innerText = "This is list item " + id;
    id++;    
    li.addEventListener("click", function() {
        let randomColor = getRandomColor();
        li.style.color = randomColor;
    })
    li.addEventListener("dblclick", remove);

  });
});

function getRandomColor() {
    let letters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}
function remove() {
    
this.remove();
        }