var boxCartWrap = document.querySelector('.nav-cart')
var boxCartHeader = document.querySelector('.nav-cart-header')
var boxCartListItem = document.querySelector('.nav-cart-list')
var listSaveProduct = [];
var listIndex = [];
var numberOfItem = 0;
var temp2;



var listProduct = [
    {
        name : 'Water bottles',
        price : 2,
        img : "assets/img/chai/chai1.png"
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
        name : 'Canvas',
        price : 10,
        img : "assets/img/túi/túi vải/túi vải 1.png"
    },
    {
        name : 'PLA paper cups',
        price : 5,
        img : "assets/img/lyPLA/lyPLA1.jpg"
    },
    {
        name : 'Bamboo cup',
        price : 6,
        img : "assets/img/cocbamia/coc-nuoc-bang-tre.jpg"
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
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Add to cart successfully',
    showConfirmButton: false,
    timer: 1500
    });
}
function renderCartlist(){
    var numberOfProduct = numberOfItem;
    var numberSpan = document.querySelector('.icon-bag-decorate');
    numberSpan.textContent = numberOfProduct;
    var htmlsOfHeader = `<h3>Shopping Bag</h3>
                    <p>(${numberOfProduct} items)</p>`
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
                    <span id="minus" onclick= minusPrice(this)>-</span>
                    <span id="numberCurrent">1</span>
                    <span id="plus" onclick =plusPrice(this)>+</span>
                </div>
                <div  onclick = "remove(this)" class="item-remove is-size-7">
                    <span">Remove</span>
                </div>
                <div class="item-price is-size-7">
                    $<span class="price-item">${product.price}</span>
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
    temp2 = listSaveProduct.reduce(function(total,curr){
        return total + curr.price;
    },0);
     console.log(listIndex)
    var total = document.querySelector('.nav-cart-total');
    total.innerHTML = `<span>Subtotals: </span>
                        <span>$${temp2}</span>`;
                        // console.log(temp2)
                        this.renderCartlist();
}
function checkout(){
    var cartBlock = document.querySelector('.nav-cart')
    var closebtn = document.querySelector('.modal-close');
    closebtn.onclick = function(){
        modalCheckout.style.display = 'none';
    }
    var spanTotal = document.querySelector('.nav-cart-total span:nth-child(2)');
    var modalCheckout = document.querySelector('#modalcheckout');
    modalCheckout.style.display = 'flex';
    var checkPrice = document.querySelector('#checkPrice');
    checkPrice.textContent = spanTotal.textContent;
    var clickCheckOut = document.querySelector('#checkoutAction')
    clickCheckOut.onclick = function(){
        modalCheckout.style.display = 'none';
        cartBlock.style.display = 'none';
        document.querySelector('.background-dark').style.display = 'none'
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Payment success',
            showConfirmButton: false,
            timer: 2000
          })
    }
}

function plusPrice(x){
    var parentFirst = x.parentElement;
    var priceItem = parentFirst.parentElement.childNodes[5].childNodes[1];
    var numberCurr = parentFirst.childNodes[3];
    var valueOfnumberCurr = Number.parseInt(numberCurr.textContent) + 1; // nhap thi no se update so luong len // 2
    numberCurr.textContent = valueOfnumberCurr; // set so luong lai cho no
    var parent = x.parentElement.parentElement.parentElement.parentElement;
    const DEFAULTPRICE = listProduct[parent.getAttribute("index")].price;
    priceItem.textContent = DEFAULTPRICE * valueOfnumberCurr;
    var Totalprice = document.querySelector('.nav-cart-total span:nth-child(2)');
    console.log(Totalprice) // 7 // 15
    var valueTotal = Number.parseInt(Totalprice.textContent.replace('$', '')) + DEFAULTPRICE;
    Totalprice.textContent ='$'+ valueTotal; //15
    
   
}

function minusPrice(x){
    var parentFirst = x.parentElement;
    var priceItem = parentFirst.parentElement.childNodes[5].childNodes[1];
    var numberCurr = parentFirst.childNodes[3];
    var valueOfnumberCurr = Number.parseInt(numberCurr.textContent) - 1; // nhap thi no se update so luong len // 2
    if(valueOfnumberCurr<=0){
        Swal.fire({
            text: 'Product quantity must be positive!',
            icon : 'info',
            confirmButtonColor: '#29c465'
        })
        valueOfnumberCurr = 1;
    }
    else{
        numberCurr.textContent = valueOfnumberCurr;
        var parent = x.parentElement.parentElement.parentElement.parentElement;
        const DEFAULTPRICE = listProduct[parent.getAttribute("index")].price;
        priceItem.textContent = DEFAULTPRICE * valueOfnumberCurr;
        var Totalprice = document.querySelector('.nav-cart-total span:nth-child(2)');
        var valueTotal = Number.parseInt(Totalprice.textContent.replace('$', '')) - DEFAULTPRICE;
        Totalprice.textContent ='$'+ valueTotal; 
    }
}

