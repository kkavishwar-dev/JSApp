const products = {
    "sku_1": { name: "T-Shirt", price: 10, discount: 0.1 },
    "sku_2": { name: "Shoes", price: 20, discount: 0.5 },
    "sku_3": { name: "Hat", price: 30, discount: 0.05 }
}

function printProduct(products) {
    for (const prod in products) {
        console.log(prod);
        const {name, price, discount} = products[prod];

        let finalPrice = price - price * discount ;
        console.log(`${name}: ${finalPrice}`);
    }
}
printProduct(products);