$('.buy').on('click', function (e) {

    var selectedItem = [$(e.target).siblings('h5').text()];
    var selectedPrice = [$(e.target).siblings('p').children().text()];

    if (localStorage.getItem('cart_name') == null) {
        localStorage.setItem('cart_name', JSON.stringify(selectedItem));
        localStorage.setItem('cart_price', JSON.stringify(selectedPrice));
    }
    else {
        var cartedItem = localStorage.getItem('cart_name');
        var cartedPrice = localStorage.getItem('cart_price');

        cartedItem = JSON.parse(cartedItem);
        cartedPrice = JSON.parse(cartedPrice);

        cartedItem.push(selectedItem[0]);
        cartedPrice.push(selectedPrice[0]);

        localStorage.setItem('cart_name', JSON.stringify(cartedItem));
        localStorage.setItem('cart_price', JSON.stringify(cartedPrice));
    }
})