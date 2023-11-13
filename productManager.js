class ProductManager {

    constructor() {
        this.product = [];
        this.contador = 1;
    }
    getProducts() {
        console.log(this.product);
    }


    getProductsById(id) {
        let productID = this.product.find((producto) => producto.id == id)
        console.log(productID);
        return productID;
    }

    addProduct(product) {

        let productoCode = this.product.find((producto) => producto.code == product.code)

        if (productoCode) {
            console.log("Code repetido");
            return;
        } else {
            product.id = this.contador;
            this.contador++;
            this.product.push(product);
        }
    }

}

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title || " ";
        this.description = description || " ";
        this.price = price || 0;
        this.thumbnail = thumbnail || " ";
        this.code = code || 0;
        this.stock = stock || 0;
    }
}

let producto1 = new Product("producto1", "Silla", 400);

// Pruebas

const productManager = new ProductManager();

productManager.addProduct(producto1);

productManager.getProducts();