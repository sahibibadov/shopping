// dil ve valyuta butonlarinin aclimagi
const dropbtn1 = document.getElementById('btn-1');
const dropbtn2 = document.getElementById('btn-2');
const langMenu = document.querySelector('.lan-dropmenu');
const currencyMenu = document.querySelector('.val-dropmenu')

dropbtn1.addEventListener('click', (e) => {
    e.stopPropagation()
    langMenu.classList.toggle('active');
})
dropbtn2.addEventListener('click', (e) => {
    e.stopPropagation()
    currencyMenu.classList.toggle('active');
});




// kenara klikde dil ve val menulerin baglanmasi
document.body.addEventListener('click', (event) => {

    const btn1 = document.querySelector('.lan-dropmenu.active');
    const btn2 = document.querySelector('.val-dropmenu.active');

    if (event.currentTarget.contains(btn1)) {
        btn1.classList.remove('active');
    }
    if (event.currentTarget.contains(btn2)) {
        btn2.classList.remove('active');
    };

});









// backdropa klikde acilan modalllarin baglanmasi
const backdrop = document.querySelector('.backdrop');
/* backdropa klikde baglanmasi shop ve modalin */
const listener = backdrop.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target == backdrop) {
        shopMenu.classList.remove('open');
        searchModal.classList.remove('open');
        backdrop.classList.remove('open');

        backdrop.removeEventListener('click', listener);
    };
});





/* seracha klikde acilan menyu */
const searchIcon = document.querySelector('#serach-icon');
const closeSearch = document.querySelector('#search-close');
const searchModal = document.querySelector('.serach-modal')

searchIcon.addEventListener('click', () => {
    backdrop.classList.add('open');
    searchModal.classList.add('open')
});

closeSearch.addEventListener('click', () => {
    searchModal.classList.remove('open');
    backdrop.classList.remove('open');
});




/* shop cart clickde acilan menyu */
const shopIcon = document.querySelector('#shopicon');
const shopMenu = document.querySelector('.shop-cart-menu');
const closeBtn = document.querySelector('#shop-close');

shopIcon.addEventListener('click', () => {
    backdrop.classList.add('open');
    shopMenu.classList.add('open');

});
closeBtn.addEventListener('click', () => {
    shopMenu.classList.remove('open');
    backdrop.classList.remove('open');

});



/* user clikde acilan menyu */
const user = document.querySelector('.user-li');
const accMenyu = document.querySelector('.account-dropmenu');

user.addEventListener('click', () => {
    accMenyu.classList.toggle('clik-account');
});




/* =================================== */

// productlari elave etmek

const products = [
    {
        id: 1,
        images: ['image/product-01.png', 'image/product-011.png'],
        badget: '10%',
        title: 'PS5 controller',
        price: '$29.99',
        oldPrice: '$49.99'
    },
    {
        id: 2,
        images: ['image/product-01.png', 'image/product-011.png'],
        badget: '20%',
        title: 'Galaxy Z Fold ',
        price: '$1099.99',
        oldPrice: '$1249.99'
    },
    {
        id: 3,
        images: ['image/product-01.png', 'image/product-011.png'],
        badget: '10%',
        title: 'Galaxy Z Fold ',
        price: '$2099.99',
        oldPrice: '$2349.99'
    },
    {
        id: 4,
        images: ['image/product-01.png', 'image/product-011.png'],
        badget: '20%',
        title: 'Galaxy Z Fold ',
        price: '$2099.99',
        oldPrice: '$2349.99'
    },
    {
        id: 4,
        images: ['image/product-01.png', 'image/product-011.png'],
        badget: '20%',
        title: 'Galaxy Z Fold ',
        price: '$2099.99',
        oldPrice: '$2349.99'
    },
    {
        id: 4,
        images: ['image/product-01.png', 'image/product-011.png'],
        badget: '20%',
        title: 'Galaxy Z Fold ',
        price: '$2099.99',
        oldPrice: '$2349.99'
    },
    {
        id: 4,
        images: ['image/product-01.png', 'image/product-011.png'],
        badget: '20%',
        title: 'Galaxy Z Fold ',
        price: '$2099.99',
        oldPrice: '$2349.99'
    },
    {
        id: 4,
        images: ['image/product-01.png', 'image/product-011.png'],
        badget: '20%',
        title: 'Galaxy Z Fold ',
        price: '$2099.99',
        oldPrice: '$2349.99'
    },
    {
        id: 4,
        images: ['image/product-01.png', 'image/product-011.png'],
        badget: '20%',
        title: 'Galaxy Z Fold ',
        price: '$2099.99',
        oldPrice: '$2349.99'
    },
    {
        id: 4,
        images: ['image/product-01.png', 'image/product-011.png'],
        badget: '20%',
        title: 'Galaxy Z Fold ',
        price: '$2099.99',
        oldPrice: '$2349.99'
    },
];


// produclari html yazmaq
const productsList = document.querySelector('.products');

products.forEach(({ id, images, badget, title, price, oldPrice }) => {
    productsList.innerHTML += `
                    <div class="product" daya-id="${id}">
                        <div class="thumblain">
                            <a href="#">
                                <img src="${images[0]}" alt="1ci ps">
                                <img class="hover-image" src="${images[1]}" alt="2ci ps">
                            </a>
                            <div class="product-badget">${badget} off</div>

                            <div class="prod-hover-action">
                                <ul>
                                    <li><a class="action-btn" href="#"><i class="fa-regular fa-eye"></i></a></li>
                                    <li><a class="add-cart" href="#">Add to cart</a></li>
                                    <li><a class="action-btn" href="#"><i class="fa-regular fa-heart"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-content">
                            <div class="prod-raiting">
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                                <span>(64)</span>
                            </div>
                            <h5 class="prod-title"><a href="#">${title}</a></h5>
                            <div class="prod-price">
                                <span>${price}</span>
                                <span class="old-price">${oldPrice}</span>
                            </div>
                        </div>

                    </div>
    `
});