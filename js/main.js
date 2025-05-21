// view products
async function getProductsData(url = '') {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
getProductsData('/js/products.json');

function displayProducts(data) {
    let products = data;
    let productList = document.querySelector('.products-list');
    productList.innerHTML = '';

    products.forEach(product => {
        let discountPrecent = product.old_price ? Math.round((product.old_price - product.price) * 100 / product.old_price) : null;
        let price = '';
        let oldPrice = '';
        let conuter = 1;

        for (let c of product.price.toString().split('').reverse()) {
            price += c;

            if (conuter >= 3) {
                price += '.';
                conuter = 0;
            }
            conuter++;
        }
        price = price.split('').reverse().join('');
        price = price[0] === '.' ? price.slice(1) : price;
        price = `${product.currency} ${price}`;

        if (product.old_price) {
            let conuter = 1;
            for (let c of product.old_price.toString().split('').reverse()) {
                oldPrice += c;

                if (conuter >= 3) {
                    oldPrice += '.';
                    conuter = 0;
                }
                conuter++;
            }
            oldPrice = oldPrice.split('').reverse().join('');
            oldPrice = oldPrice[0] === '.' ? oldPrice.slice(1) : oldPrice;
            product.old_price = `${product.currency} ${oldPrice}`;
        }

        productList.innerHTML += `
                    <div class="product card">
                        <p class="discount text-body2" style="--color: ${discountPrecent ? 'var(--red)' : 'var(--green)'}">${discountPrecent ? `-${discountPrecent}%` : 'NEW'}</p>
                        <img src="${product.images[0]}" alt="" class="card-img-top">
                        <div class="card-body">
                            <h4 class="card-title text-head4">${product.title}</h4>
                            <p class="card-text text-body2 text-grey-600">${product.name}</p>
                            <div class="price">
                                <span class="text-head4 fs-5">${price}</span>
                                <span class="text-body3 text-grey-400 m-l-2 text-decoration-line-through">${oldPrice}</span>
                            </div>
                        </div>
                        <div class="card-action">
                            <button
                                class="btn bg-white text-primary fw-semibold p-t-3 p-b-3 p-l-13 p-r-13 rounded-0">Add to
                                cart</button>
                            <div class="m-t-6">
                                <a href="" class="fs-3 fw-semibold text-white"><i class="fa-solid fa-share-nodes"></i>
                                    Share</a>
                                <a href="" class="fs-3 fw-semibold text-white m-l-5 m-r-5"><i
                                        class="fa-solid fa-right-left"></i> Compare</a>
                                <a href="" class="fs-3 fw-semibold text-white"><i class="fa-regular fa-heart"></i>
                                    Like</a>
                            </div>
                        </div>
                    </div>
        `;
    });
}

getProductsData('/js/products.json')
    .then(data => {
        displayProducts(data);
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });


// Cart
var createCart = (selector = '') => {
    var el = document.querySelector(selector);
    console.log(el)
    var open = () => {
        if (el !== null) {
            el.classList.add('show');
        }
    }
    var close = () => {
        if (el !== null) {
            el.classList.remove('show');
        }
    }
    return { open, close }
}
let cart = createCart('nav.cart-container');