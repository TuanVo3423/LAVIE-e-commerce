var tab_1 = document.getElementById('tab1')
var tab_2 = document.getElementById('tab2')
var tab_3 = document.getElementById('tab3')

var tab_1_content = document.getElementById('tab-content1')
var tab_2_content = document.getElementById('tab-content2')
var tab_3_content = document.getElementById('tab-content3')

tab_2.addEventListener('click',function()
{
   tab_2_content.classList.remove('is-hidden')
   tab_2.classList.add('is-active')
   tab_1_content.classList.add('is-hidden')
   tab_1.classList.remove('is-active')
   tab_3_content.classList.add('is-hidden')
   tab_3.classList.remove('is-active')
});
tab_1.addEventListener('click',function()
{
   tab_1_content.classList.remove('is-hidden')
   tab_1.classList.add('is-active')
   tab_2_content.classList.add('is-hidden')
   tab_2.classList.remove('is-active')
   tab_3_content.classList.add('is-hidden')
   tab_3.classList.remove('is-active')
});
tab_3.addEventListener('click',function()
{
   tab_3_content.classList.remove('is-hidden')
   tab_3.classList.add('is-active')
   tab_2_content.classList.add('is-hidden')
   tab_2.classList.remove('is-active')
   tab_1_content.classList.add('is-hidden')
   tab_1.classList.remove('is-active')
});