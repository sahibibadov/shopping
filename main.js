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
/* shopun acilan menyusun kenara klikde baglnmasi */
const listener = backdrop.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target == backdrop) {
        backdrop.classList.remove('open');
        shopMenu.classList.remove('open');
        searchModal.classList.remove('open');

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




