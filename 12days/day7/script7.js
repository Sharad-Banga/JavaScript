const tabContainer = document.querySelector('.tabs');
const contentCont = document.querySelector('.contents');
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabContainer.addEventListener('click',(e)=>{

    let activeTab = e.target.dataset.tab;
    tabs.forEach(el => {
      el.classList.remove('active')
    });

    contents.forEach(el=>{
      el.classList.remove('active');
    })


    e.target.classList.add('active');
    console.log(e.target);
    document
    .querySelector(`[data-content="${activeTab}"]`)
    .classList.add('active');

})
