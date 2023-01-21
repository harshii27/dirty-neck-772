let data = [
    {
        "image": "https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg",
        // "color-dot":"https://www.apple.com/v/iphone/home/bk/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_large.png",
        "title": "iPhone 14 Pro",
        "text": "The ultimate iPhone.",
        "price": 999,
        "buy": "Buy",
    },
    {
        "image": "https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg",
        // "color-dot":"https://www.apple.com/v/iphone/home/bk/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_large.png",
        "title": "iPhone 14",
        "text": "A total powerhouse.",
        "price": 799,
        "buy": "Buy",
    },
    {
        "image": "https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg",
        // "color-dot":"https://www.apple.com/v/iphone/home/bk/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_large.png",
        "title": "iPhone 13",
        "text": "As amazing as ever.",
        "price": 599,
        "buy": "Buy",
    },
    {
        "image": "https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg",
        // "color-dot":"https://www.apple.com/v/iphone/home/bk/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_large.png",
        "title": "iPhone SE",
        "text": "Serious power. Serious value.",
        "price": 499,
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
        let text = document.createElement("p")
        text.innerText = element.text
        let price = document.createElement("h4")
        price.innerText = "$ " + element.price

        let btn = document.createElement("button")
        btn.innerText = element.buy
        btn.setAttribute("class", "btn")

        btn.addEventListener("click", () => {
            let data = JSON.parse(localStorage.getItem("buy")) || [];

            data.push(element)
            localStorage.setItem("buy", JSON.stringify(data));
            console.log(data)
        })

        card.append(image, title, text, price, btn)
        container.append(card)
    });
}

