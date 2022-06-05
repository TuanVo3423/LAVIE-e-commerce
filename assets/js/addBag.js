var boxCartWrap = document.querySelector('.nav-cart')
var boxCartHeader = document.querySelector('.nav-cart-header')
var boxCartListItem = document.querySelector('.nav-cart-list')
var listSaveProduct = [];
var listIndex = [];
var numberOfItem = 0;



var listProduct = [
    {
        name : 'Water bottles',
        price : 2,
        img : "./assets/img/chai/chai1.png"
    },
    {
        name : 'Sugarane bait cup',
        price : 3,
        img : "assets/img/cocbamia/cocbamia1.jpg"
    },
    {
        name : 'Paper cup',
        price : 4,
        img : "assets/img/ly/ly1.jpg"
    },
    {
        name : 'Water bottles',
        price : 2,
        img : "./assets/img/chai/chai1.png"
    },
    {
        name : 'PLA paper cups',
        price : 5,
        img : "assets/img/lyPLA/lyPLA1.jpg"
    },
    {
        name : 'Sugarane bait cup',
        price : 3,
        img : "assets/img/cocbamia/cocbamia1.jpg"
    },
];
function getCurrentProductByID(numberID){
    return listProduct[numberID];
}
function ThemVaoGioHang(e){
    numberOfItem++;
    var boxProduct = e.parentElement.parentElement.getAttribute('data-index');
    console.log(Number(boxProduct))
    listIndex.push(Number(boxProduct))
    var productCurr = getCurrentProductByID(Number(boxProduct)); // 2 3 4
    listSaveProduct.push(productCurr);
    this.renderCartlist();
    console.log(listSaveProduct)
    var total = document.querySelector('.nav-cart-total');
    var temp = listSaveProduct.reduce(function(total,curr){
        return total + curr.price;
    },0);
    
    total.innerHTML = `<span>Subtotals: </span>
                        <span>$${temp}</span>`;
   
    

}
function renderCartlist(){
    var numberOfProduct = numberOfItem;
    var numberSpan = document.querySelector('.icon-bag-decorate');
    numberSpan.textContent = numberOfProduct;
    var htmlsOfHeader = `<h3>Shopping Bag</h3>
                    <p>(${numberOfProduct} items)</p>`
    // console.log(indexOfAddTab)
    var htmls = listSaveProduct.map(function(product,index){
        return `<div index = "${listIndex[index]}" class="nav-cart-list-item">
        <div class="item-image-wrapper">
            <div class="item-image">
                <img src="${product.img}" />
            </div>
        </div>
        <div  class="item-content">
            <h6 class="item-name">${product.name}</h6>
            <p class="item-description">Hot</p>
            <div class="item-option is-flex is-align-items-center">
                <div class="item-amount">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <div  onclick = "remove(this)" class="item-remove is-size-7">
                    <span">Remove</span>
                </div>
                <div class="item-price is-size-7">
                    <span>$${product.price}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="color-divide"></div>`;
    })
boxCartListItem.innerHTML = htmls.join("");
boxCartHeader.innerHTML = htmlsOfHeader;
}
function remove(x){
    // var removeDiv = document.querySelector('.item-remove');
    var parentRemove = x.parentElement.parentElement.parentElement;
    var n = Number(parentRemove.getAttribute('index')); // 1
    console.log(listSaveProduct,n)
    numberOfItem--;
    var numberOfProduct = numberOfItem;
    var htmlsOfHeader = `<h3>Shopping Bag</h3>
    <p>(${numberOfProduct} items)</p>`;
    boxCartHeader.innerHTML = htmlsOfHeader;
    var numberSpan = document.querySelector('.icon-bag-decorate');
    numberSpan.textContent = numberOfProduct;
     console.log(listSaveProduct)
     var i = listIndex.indexOf(n);
     if(i !== -1){
         listIndex.splice(i,1);
     }
     listSaveProduct.splice(i, 1);  
    var temp2 = listSaveProduct.reduce(function(total,curr){
        return total + curr.price;
    },0);
     console.log(listIndex)
    var total = document.querySelector('.nav-cart-total');
    total.innerHTML = `<span>Subtotals: </span>
                        <span>$${temp2}</span>`;
                        console.log(temp2)
                        this.renderCartlist();
}
