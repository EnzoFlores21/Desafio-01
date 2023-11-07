
class ProductManager {

    constructor() {
        this.product = []
        this.contador = 1;
    }
    getProducts() {
        console.log(this.product);
    }

    addProduct(product) {
        

        let productoCode = this.product.find((producto) => producto.code == product.code)

        if (productoCode) {
            console.log("Code repetido");
        } else {
            product.id = this.contador
            this.contador++
            this.product.push(product)
        }
    }


    getProductById(id) {
        let productID = this.product.find((producto) => producto.id == id)
        console.log(productID);
        return productID;
    }
}

class Product {
    constructor(
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    ) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock
    }
}

let producto1 = new Product ("producto1", "Silla", 400, "dad", 1, 10);


// Pruebas

const productManager = new ProductManager

productManager.addProduct(producto1);

productManager.getProducts()