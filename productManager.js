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
        for (const key in product) {
            if (product[key] == undefined) {
                console.log("Falta valores requeridos");
                return
            }
            
        }

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
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

let producto1 = new Product("producto1", 400, "ala", 1, 20);


// Pruebas

const productManager = new ProductManager();

productManager.addProduct(producto1);

productManager.getProducts();