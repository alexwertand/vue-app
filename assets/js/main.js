Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        trigger_one: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image" :alt="alt.green">
            </div>

            <div class="product-info">
                <h1>{{ onMarket }}</h1>

                <p>User is {{ premium }}</p>
                
                <p>{{ description }}</p>

                <p v-if="inStock">In stock!</p>

                <p v-else
                    :class="{ 'line-through': !inStock}">Out of stock!</p>

                <ul>
                    <li v-for="material in materials">{{ material }}</li>
                </ul>

                <div class="color-box"
                    v-for="(variant, index) in variants"
                    :key="variant.variantId"
                    :style="{backgroundColor: variant.variantColor}"
                    @mouseover="updateProduct(index)">
                </div>

                <div class="cart">
                    <button v-on:click="addToCart"
                            :disabled="!inStock"
                            :class="{ disabledButton: !inStock }">
                        {{ cartButtonsText.add }}
                    </button>

                    <button v-on:click="removeFromCart">{{ cartButtonsText.remove }}</button>
                </div>
            </div>
        </div>
    `,

    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'A pair of warm, fuzzy socks',
            alt: {
                green: 'This is amazing green socks',
                blue: 'This is amazing blue socks'
            },
            inventory: 5,
            materials: ['80% cotton', '20% polyester', 'gender neutral'],
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
                    variantQuantity: 5
                }
            ],
        }
    },
    methods: {
        addToCart: function () {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
        },
        removeFromCart: function () {
            trigger_one = false;
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId, trigger_one);
        },
        updateProduct: function (index) {
            this.selectedVariant = index;
            /*console.log(index);*/1
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
    },
});

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: [],
        trigger_one: true
    },
    methods: {
        updateCart: function(id) {
            this.cart.push(id);
        },
        removeFromCart: function(id, trigger_one) {
            for (var i = 0, len = this.cart.length; i < len; i++) {
                if (this.cart[i] === id && !trigger_one) {
                    this.cart.splice(i, 1);
                    trigger_one = true;
                }
            }
        },
    }
});

import style from "../css/main.css";