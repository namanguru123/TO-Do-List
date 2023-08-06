let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let ck = document.querySelector(".check");

console.dir(ck);


btn.addEventListener("click", function(){

    let div = document.createElement("div");
    div.classList.add("div");

    let li = document.createElement("li");
    li.innerText = input.value.toUpperCase();
    li.classList.add("li");

    let button = document.createElement("button");
    button.innerHTML = `<i class="fa-solid fa-xmark" style="color: #000000;"></i>`;
    button.classList.add("btn");

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.classList.add("check");

    li.prepend(check);
    div.appendChild(li);
    div.appendChild(button);
    ul.appendChild(div);
    input.value = "";

    button.addEventListener("click", function(event){
        event.stopPropagation();
        div.remove();
    })

})