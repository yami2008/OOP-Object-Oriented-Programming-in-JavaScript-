class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    displayCart() {
        this.items.forEach(item => {
            console.log(`${item.product.name}: ${item.quantity} @ $${item.product.price} each - Total: $${item.getTotalPrice()}`);
        });
        console.log(`Total Items: ${this.getTotalItems()}`);
        console.log(`Cart Total: $${this.getTotal()}`);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

}


const apple = new Product(1, 'Apple', 0.5);
const banana = new Product(2, 'Banana', 0.3);
const orange = new Product(3, 'Orange', 0.8);

const cart = new ShoppingCart();

cart.addItem(apple, 4);
cart.addItem(banana, 6);
cart.addItem(orange, 3);

cart.displayCart();

cart.removeItem(2);

cart.displayCart();