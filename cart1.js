var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
}

totalPrice();
append();

function totalPrice() {
  let total = 0;
  let items = JSON.parse(localStorage.getItem("items"));

  for (let i = 0; i < items.length; i++) {
    total += Number(items[i].price);
  }

  let h2 = document.getElementById("cart_total");
  h2.innerText = "Your Total Bag Price"+" "+"="+" "+"Rs. "+total;
}

function append() {
  let data = JSON.parse(localStorage.getItem("items"));
  let container = document.getElementById("banner1");
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");

    let image = document.createElement("img");
    image.src = el.image;
    let title = document.createElement("p");
    title.innerText = el.title;
    let description = document.createElement("p");
    description.innerText = el.description;
    let price= document.createElement("h3")
    price.innerText="Rs"+" "+el.price

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("class", "remove");
    btn.onclick = () => {
      remove(el.id);
      href="http://127.0.0.1:5502/paymeent/payment.html"
    };

    div.append(image, title, description,price, btn);

    container.appendChild(div);
  });
}

function remove(id) {
  console.log(id);
  let data = JSON.parse(localStorage.getItem("items"));
  let flag=false;
  data = data.filter((el) => {
    if(!flag)
    {
      flag=!(el.id !== id)
      return el.id !== id;
    }
    else
    {
      return true;
    }
    
  });

  localStorage.setItem("items", JSON.stringify(data));
  append();
  totalPrice();
}
