const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
})

refreshShop();

function refreshShop() {
    var subtotalElement = document.getElementsByClassName('sub-total-value');
    var postageAndPackagingElement = document.getElementsByClassName('postage-and-packaging');
    var totalElement = document.getElementsByClassName('font-weight-bold total-value');

    var items = document.getElementsByClassName("item-price border-0 align-middle");
    var subtotal = 0;
    if (items.length == 1) {
        //calculate sub-total for 1 item.
        let price = items.item(0).childNodes[1].textContent;
        let quantity = items.item(0).nextElementSibling.childNodes[1].value;
        subtotal += parseFloat(price) * parseInt(quantity);
    } else {
        for (var i = 0; i < items.length; i++) {
            //calculate sub-total for all items
            let price = items[i].childNodes[1].textContent;
            let quantity = items[i].nextElementSibling.childNodes[1].value;
            subtotal += parseFloat(price) * parseInt(quantity);
        }
    }
    console.log(subtotalElement.item(0));
    subtotalElement.item(0).innerHTML = subtotal.toFixed(2);;

    var pnp = postageAndPackagingElement.item(0).innerHTML
    var total = subtotal + parseFloat(pnp);
    totalElement.item(0).innerHTML = formatter.format(total);
}

function deleteItem(el) {
    el.parentNode.parentNode.childNodes[5].childNodes[1].value = 0;
    refreshShop();
}