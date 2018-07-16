document.addEventListener("DOMContentLoaded", function(){
        let btn = document.createElement("button");
        btn.innerText = "Click Me to Add A Box";
        containerDiv = document.createElement("div")
        containerDiv.style.backgroundColor = "pink";
        containerDiv.className = "container";
        document.body.appendChild(btn);
        document.body.appendChild(containerDiv);
        let id =0;
        btn.addEventListener("click", function() {
                console.log("here");
                let div = document.createElement("div");
                containerDiv.appendChild(div);
                div.style.backgroundColor = "white";
                div.style.width = "100px";
                div.style.height = "100px";
                div.style.marginLeft = "10px";
                div.style.marginTop = "10px";
                div.style.cssFloat = "left";
                div.style.fontSize = "50px";
                div.style.textAlign = "center";
                div.style.color = "white";
                div.style.border = "solid black";
                div.className = "boxDivs";
                div.setAttribute("id", id);
                id++;
            
                div.addEventListener("mouseover", function(){
                    console.log(this.id);
                    let divText = document.createTextNode(this.id);
                    div.appendChild(divText);  
              
                })
            
                div.addEventListener("mouseout", function(){
                    div.innerText = " "; 
            
                });
            
                div.addEventListener("click", function() {
                    let randomColor = getRandomColor();
                    div.style.backgroundColor = randomColor;
                })
            
                div.addEventListener("dblclick", remove);
            
            
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
    
            if (this.id %2 === 0) {
                if (this.nextSibling) {
                    this.nextSibling.remove();
                } else {
                    alert("Nothing to the Right!!");
                }
            } else {
                if (this.previousSibling) {
                    this.previousSibling.remove();
                } else {
                    alert("Nothing to the Left!!");
                }
              
            }
        }
    