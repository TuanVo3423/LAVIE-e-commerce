
var lineEmail = document.querySelector('.panel-body-form-email-input');
var EmailForm = document.querySelector('.panel-body-form-email');
var linePassword = document.querySelector('.panel-body-form-password-input');
var passWordForm = document.querySelector('.panel-body-form-password');
var messErrorEmail = document.querySelector('.Login--error-mess-email')
var messErrorPassword = document.querySelector('.Login--error-mess-password')
lineEmail.addEventListener('input' , function(e){
    if(!e.target.value.includes('@gmail.co'))
    {
        EmailForm.classList.add('form-field--error')
        messErrorEmail.style.display = 'flex'
    }
});
lineEmail.addEventListener('input' , function(e){
    if(e.target.value.includes('@gmail.co'))
    {
        EmailForm.classList.remove('form-field--error')
        messErrorEmail.style.display = 'none'
    }
});
linePassword.addEventListener('input' , function(e){
    if(e.target.value === "")
    {
        passWordForm.classList.add('form-field--error')
        messErrorPassword.style.display = 'flex'
    }
});
linePassword.addEventListener('input' , function(e){
    console.log(e.target.value)
    if(!e.target.value === "")
    {
        passWordForm.classList.remove('form-field--error')
        messErrorPassword.style.display = 'none'
        
    }
});



var searchtemp = 0;
var temp_name;
var temp_menu = 0 ;
var Modal = document.querySelector('#modal-search')
var btnSearch = document.getElementById('search')
var formSearch = document.getElementById('search-tab-down')
var btnNavType2 = document.querySelector('.header__nav-list-item-type2')
 var btnNavType3 = document.querySelector('.header__nav-list-item-type3')
var btnNavType4 = document.querySelector('.header__nav-list-item-type4')
var btnNavType5 = document.querySelector('.header__nav-list-item-type5')
var pageNav = document.getElementById('Page');
var pageNav1 = document.getElementById('Page1');
 var pageNav2 = document.getElementById('Page2');
var slidingTagLiAfterStyle = document.createElement("style");
var btnMenu = document.querySelector('.menu');
var menuTab = document.querySelector('.n1');
btnMenu.onclick = function()
{
    menuTab.style.display = 'block'
    temp_menu++;
    if(temp_menu%2==0)
    {
        menuTab.style.display = 'none'
    }
}

Modal.addEventListener('click' , function()
{
    Modal.classList.remove('show')
    searchtemp++;
    console.log(searchtemp)
    if(searchtemp%2!=0)
{
    Modal.classList.add('show')
}
else if(searchtemp%2==0)
{
    Modal.classList.remove('show')
}
    // alert('Thong bao')
});
formSearch.addEventListener('click', function(event){
        event.stopPropagation()
    })
btnSearch.addEventListener('click' , function(event)
{
    searchtemp++;
    console.log(searchtemp)
    if(searchtemp%2!=0)
{
    Modal.classList.add('show')
}
else if(searchtemp%2==0)
{
    Modal.classList.remove('show')
}
});

btnNavType2.addEventListener('mouseover' , function()
{
  temp_name = this.classList[1];
    pageNav.classList.add('show');
    slidingTagLiAfterStyle.innerHTML =
`.header__nav-list-item-type2::after{
content: "";
position: absolute;
border: 5px solid black;
right: 42%;
border-color: #29c465 transparent transparent  transparent;
top: 100%;
border-width: 12px 16px;
cursor: pointer;

}`;
document.head.appendChild(slidingTagLiAfterStyle);

});

btnNavType2.addEventListener('mouseout' , function()
{
    pageNav.classList.remove('show');
    document.head.removeChild(slidingTagLiAfterStyle);

});

pageNav.addEventListener('mouseover' , function()
{   
var string = temp_name;
console.log(string)
slidingTagLiAfterStyle.innerHTML =
`.${string}::after{
content: "";
position: absolute;
border: 5px solid black;
right: 42%;
border-color: #29c465 transparent transparent  transparent;
top: 100%;
border-width: 12px 16px;
cursor: pointer;
}`;
document.head.appendChild(slidingTagLiAfterStyle);
});
pageNav.addEventListener('mouseout' , function()
{   
document.head.removeChild(slidingTagLiAfterStyle);
});
// 
btnNavType3.addEventListener('mouseover' , function()
{
temp_name = this.classList[1];
pageNav1.classList.add('show');
slidingTagLiAfterStyle.innerHTML =
`.header__nav-list-item-type3::after{
content: "";
position: absolute;
border: 5px solid black;
right: 42%;
border-color: #29c465 transparent transparent  transparent;
top: 100%;
border-width: 12px 16px;
cursor: pointer;

}`;
document.head.appendChild(slidingTagLiAfterStyle);

});

btnNavType3.addEventListener('mouseout' , function()
{
pageNav1.classList.remove('show');
document.head.removeChild(slidingTagLiAfterStyle);

});

pageNav1.addEventListener('mouseover' , function()
{   
var string = temp_name;
console.log(string)
slidingTagLiAfterStyle.innerHTML =
`.${string}::after{
content: "";
position: absolute;
border: 5px solid black;
right: 42%;
border-color: #29c465 transparent transparent  transparent;
top: 100%;
border-width: 12px 16px;
cursor: pointer;
}`;
document.head.appendChild(slidingTagLiAfterStyle);
});
pageNav1.addEventListener('mouseout' , function()
{   
document.head.removeChild(slidingTagLiAfterStyle);
});
// 
btnNavType4.addEventListener('mouseover' , function()
{
temp_name = this.classList[1];
pageNav2.classList.add('show');
slidingTagLiAfterStyle.innerHTML =
`.header__nav-list-item-type4::after{
content: "";
position: absolute;
border: 5px solid black;
right: 42%;
border-color: #29c465 transparent transparent  transparent;
top: 100%;
border-width: 12px 16px;
cursor: pointer;

}`;
document.head.appendChild(slidingTagLiAfterStyle);

});

btnNavType4.addEventListener('mouseout' , function()
{
pageNav2.classList.remove('show');
document.head.removeChild(slidingTagLiAfterStyle);

});

pageNav2.addEventListener('mouseover' , function()
{   
var string = temp_name;
console.log(string)
slidingTagLiAfterStyle.innerHTML =
`.${string}::after{
content: "";
position: absolute;
border: 5px solid black;
right: 42%;
border-color: #29c465 transparent transparent  transparent;
top: 100%;
border-width: 12px 16px;
cursor: pointer;
}`;
document.head.appendChild(slidingTagLiAfterStyle);
});
pageNav2.addEventListener('mouseout' , function()
{   
document.head.removeChild(slidingTagLiAfterStyle);
});




// 
const navCart = document.querySelector('.nav-cart');
const navCartButton = document.querySelector('.nav-cart-button');
const backgroundDark = document.querySelector('.background-dark');

const toggleNavCart = (e) => {
e.preventDefault();
console.log('toggle nav cart');
navCart.classList.toggle('is-hidden');
backgroundDark.classList.toggle('is-hidden');
}

navCartButton.addEventListener('click', toggleNavCart);
backgroundDark.addEventListener('click', toggleNavCart);

// hero slider
try {
const contentSlider = document.querySelectorAll('.content-slider-wrapper .slider .content');
const imageSlider = document.querySelectorAll('.image-slider .image img');
const dotSlider = document.querySelectorAll('.hero-slide-dots .dot');
let selectedSlide = 0;

const setSelectedSlide = (id) => {
    dotSlider[selectedSlide].classList.remove('dot-selected');
    selectedSlide = id;
    dotSlider[selectedSlide].classList.add('dot-selected');

    for(let i=0;i<contentSlider.length;i++) {
        contentSlider[i].style.transform = `translateX(${100*(i - id)}%)`;
    }
    for(let i=0;i<imageSlider.length;i++) {
        imageSlider[i].style.transform = `translateX(${100*(i-id)}%)`;
    }
}

dotSlider.forEach((item, id) => {
    item.addEventListener('click', (e) => {
        setSelectedSlide(id);
    })
})

setSelectedSlide(0);

} catch {}

// image
try {
const categoryProductImage = document.querySelectorAll('.category-product .image');

categoryProductImage.forEach(item => {
    const imageBackground = item.querySelector('img:nth-child(2)');
    const quickViewButton = item.querySelector('.category-product-quick-view');
    item.addEventListener('mouseover', (e) => {
        imageBackground.style.visibility = 'visible';
        quickViewButton.classList.remove('is-invisible');
    })
    item.addEventListener('mouseout', (e) => {
        imageBackground.style.visibility = 'hidden';
        quickViewButton.classList.add('is-invisible');
    })
})
} catch {}

// Sort category

try {
const filterCategoryWrapper = document.querySelector('.filter-category-wrapper');
const filterCategoryDropdownUp = document.querySelector('.dropdown-up');
const filterCategoryDropdownDown = document.querySelector('.dropdown-down');

filterCategoryWrapper.addEventListener('click', (e) => {
    filterCategoryWrapper.classList.toggle('is-active');
    filterCategoryDropdownUp.classList.toggle('is-hidden');
    filterCategoryDropdownDown.classList.toggle('is-hidden');
})   
} catch {}


// category sidebar
try {
const categorySidebar = document.querySelectorAll('.sidebar > li');

categorySidebar.forEach(item => {
    const title = item.querySelector('.item-title');
    const collapse = item.querySelector('.item-collapse');

    title.addEventListener('click', (e) => {
        collapse.classList.toggle('item-active');
        if(collapse.style.maxHeight) {
            collapse.style.maxHeight = null;
        } else {
            collapse.style.maxHeight = collapse.scrollHeight + 'px'; 
        }
    })
})

} catch {}
