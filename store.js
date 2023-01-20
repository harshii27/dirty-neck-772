let latestcard = document.getElementById("latest-cards");

let cardData = [
    {
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1671578693545",
        title: "MACKBOOK PRO 14 AND 16",
        heading: "Mover.Maker.",
        brPart: "Boundary breaker",
        price: "From Rs.199900.00",
        id: "1"
    },
    {
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-mac-mini-202301?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1670448669900",
        title: "MAC MINI",
        heading: "More muscles.More hustle",
        brPart: "",
        price: "From Rs.59900.00",
        id: "2"
    },
    {
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-14-202209?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1661890731783",
        title: "IPHONE 14",
        heading: "Big and bigger.",
        brPart: "",
        price: "From Rs.79900.00",
        id: "3"
    },
    {
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-homepod-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1670389217441",
        title: "HOMEPOD",
        heading: "Profound sound.",
        brPart: "",
        price: "From Rs.329000.00",
        id: "4"
    },
    {
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-14-pro-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661181419170",
        title: "IPHONE 14 PRO",
        heading: "Pro.Beyond.",
        brPart: "",
        price: "From Rs.129900.00",
        id: "5"
    },
    {
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-bhm-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1672758111622",
        title: "BLACK UNITY STRAP",
        heading: "Creativity and community.",
        brPart: "Woven Together",
        price: "From Rs.4500.00",
        id: "6"
    },
    {
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s8-202209_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661792340440",
        title: "APPLE WATCH SERIES 8",
        heading: "A healthy leap ahead.",
        brPart: "",
        price: "From Rs.45900.00",
        id: "7"
    },
    {
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-202210?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667423432053",
        title: "IPAD",
        heading: "Loveable. Drawable.",
        brPart: "Magical",
        price: "From Rs.44900.00",
        id: "8"
    },
    {
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-pro-202210_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667506331714",
        title: "IPAD PRO",
        heading: "Supercharged by M2.",
        brPart: "",
        price: "From Rs.81900.00",
        id: "9"
    },
    {
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202209_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661382550267",
        title: "APPLE WATCH ULTRA",
        heading: "Advanture Awaits. ",
        brPart: "",
        price: "From Rs.89900.00",
        id: "10"
    }

]

latestcard.innerHTML = `${cardData.map(item => getCard(item.image, item.title, item.heading, item.brPart, item.price)).join("")}`


// function getCard(image, title, heading, brPart, price) {
//     let card = `<div class="latest-card-top" style="background: url(${image});">
//     <p>${title}</p>
//     <h2>${heading}<br>${brPart}</h2>
//     <p>${price}</p>
//     </div>`

//     return card
// }