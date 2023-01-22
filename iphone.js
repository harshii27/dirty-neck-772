let data = [
    {
        "image": "https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg",
        // "color-dot":"https://www.apple.com/v/iphone/home/bk/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_large.png",
        "title": "iPhone 14 Pro",
        "description": "The ultimate iPhone.",
        "price": 149999,
        "buy": "Buy",
    },
    {
        "image": "https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg",
        // "color-dot":"https://www.apple.com/v/iphone/home/bk/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_large.png",
        "title": "iPhone 14",
        "description": "A total powerhouse.",
        "price": 129999,
        "buy": "Buy",
    },
    {
        "image": "https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg",
        // "color-dot":"https://www.apple.com/v/iphone/home/bk/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_large.png",
        "title": "iPhone 13",
        "description": "As amazing as ever.",
        "price": 119999,
        "buy": "Buy",
    },
    {
        "image": "https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg",
        // "color-dot":"https://www.apple.com/v/iphone/home/bk/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_large.png",
        "title": "iPhone SE",
        "description": "Serious power. Serious value.",
        "price": 70000,
        "buy": "Buy",
    }
]

let container = document.getElementById("container");

display(data);

function display(data) {
    container.innerHTML = null;
    data.forEach((element) => {
        let card = document.createElement("div")
        card.setAttribute("class", "in-div")
        let image = document.createElement("img")
        image.setAttribute("src", element.image)
        image.setAttribute("class", "imgs")
        let title = document.createElement("h2")
        title.innerText = element.title
        let description = document.createElement("p")
        description.innerText = element.description
        let price = document.createElement("h4")
        price.innerText = "$ " + element.price

        let btn = document.createElement("button")
        btn.innerText = element.buy
        btn.onclick=()=>{
            addToCart(element);
            alert("product added to cart")
            href="http://127.0.0.1:5502/cart1.html"
        };
        function addToCart(element){
            let phone = JSON.parse(localStorage.getItem("items"))||[]
            phone.push(element);
            localStorage.setItem("items",JSON.stringify(data));
            cart_count()
        }
        function cart_count(){
            let phone=JSON.parse(localStorage.getItem("items"))||[];
            let c= document.getElementById("item_count");
            c.innerText=phone.length
        }

        card.append(image, title, description, price, btn)
        container.append(card)
    });
}

