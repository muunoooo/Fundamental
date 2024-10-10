class Product {
    name: string = ""
    price: number = 0

    constructor(nama: string, harga: number) {
        this.name = nama
        this.price = harga
    }
}
const product1 = new Product ("Apple", 20000)
const product2 = new Product ("Banana", 30000)
const product3 = new Product ("Cherry", 50000)

class Transaction {
    #total: number = 0
    #products: object[] = []

    addToCart(product: Product, quantity: number) {
        this.#products.push(
            {...product, 
            quantity,
            total: product.price * quantity
        })
        this.#total += product.price * quantity
    }

    show () {
        this.#products.push({ total: this.#total})
        console.table(this.#products)
    }

    checkout (money: number) {
        if (money < this.#total) {
            throw new Error("Uang anda tidak cukup")
        } else {
            console.log(`Cash : ${money}`)
            console.log(`Return : ${money - this.#total}`)
            console.log(`~~~~~ Thank You ~~~~~`)
        }
    }
}


const transaction1 = new Transaction()
transaction1.addToCart(product1, 2)
transaction1.addToCart(product2, 1)
transaction1.addToCart(product3, 3)

// console.log(transaction1)
transaction1.show()
transaction1.checkout(250000)