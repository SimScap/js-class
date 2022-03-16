import { Product } from "./classi/Product.js";

const newSsd = new Product ('2000 TB Ultra SSD','SSD Super-mega a bassissimo prezzo','1999.99','Memory','https://th.bing.com/th/id/OIP.71u6628KK3cishtlWpnngwHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7');

const products = [
    new Product ('2000 TB Ultra SSD','SSD Super-mega a bassissimo prezzo','1999.99','Memory','https://th.bing.com/th/id/OIP.71u6628KK3cishtlWpnngwHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7'),
    new Product ('2000 TB Ultra SSD','SSD Super-mega a bassissimo prezzo','1999.99','Memory','https://th.bing.com/th/id/OIP.71u6628KK3cishtlWpnngwHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7'),
    new Product ('2000 TB Ultra SSD','SSD Super-mega a bassissimo prezzo','1999.99','Memory','https://th.bing.com/th/id/OIP.71u6628KK3cishtlWpnngwHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7'),
    new Product ('2000 TB Ultra SSD','SSD Super-mega a bassissimo prezzo','1999.99','Memory','https://th.bing.com/th/id/OIP.71u6628KK3cishtlWpnngwHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7'),

];
generateProductsContent(products);

function generateProductsContent(productsList){
    //Azzeriamo la pagina dei prodotti prima di popolarla
    document.getElementById('products').innerHTML="";

    productsList.forEach(element =>{
        console.log(element);
    })

}