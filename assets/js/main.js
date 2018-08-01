var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: 'assets/img/green-sock.png',
        alt: {
            green: 'This is amazing green socks',
            blue: 'This is amazing blue socks'
        },
        inventory: 5,
        materials: ['80% cotton', '20% polyester', 'gender neutral'],
        cart: 0,
        inStock: false,
        cartButtonsText: {
            add: 'Add to cart',
            remove: 'Remove from cart'
        },
        variants: [
            {
                variantId: 2245,
                variantColor: 'green',
                variantImage: 'assets/img/green-sock.png'
            },
            {
                variantId: 2246,
                variantColor: 'blue',
                variantImage: 'assets/img/blue-sock.png'
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
        updateProduct: function (variantImage) {
            this.image = variantImage;
        }
    }
});

// console.log(app);