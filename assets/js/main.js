var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        description: 'A pair of warm, fuzzy socks',
        //image: 'assets/img/green-sock.png',
        alt: {
            green: 'This is amazing green socks',
            blue: 'This is amazing blue socks'
        },
        inventory: 5,
        materials: ['80% cotton', '20% polyester', 'gender neutral'],
        cart: 0,
        //inStock: false,
        onSale: true,
        selectedVariant: 0,
        cartButtonsText: {
            add: 'Add to cart',
            remove: 'Remove from cart'
        },
        variants: [
            {
                variantId: 2245,
                variantColor: 'green',
                variantImage: 'assets/img/green-sock.png',
                variantQuantity: 10
            },
            {
                variantId: 2246,
                variantColor: 'blue',
                variantImage: 'assets/img/blue-sock.png',
                variantQuantity: 0
            }
        ],
    },
    methods: {
        addToCart: function () {
            this.cart += 1;
        },
        removeFromCart: function () {
            if (this.cart > 0) this.cart -= 1;
        },
        updateProduct: function (index) {
            this.selectedVariant = index;
            /*console.log(index);*/
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        onMarket() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' ' + 'onSale';
            }
        }
    }
});

// console.log(app);