const box = document.getElementsByClassName('categ-box-opt')
Array.from(box).forEach((b) => {
  b.addEventListener('click',(e) =>{
   const query = e.target.innerText
   location.href = 'searcher.html?query='+query;
  } )
})
 
const tabs = document.getElementsByClassName('tabs')
Array.from(tabs).forEach((tab) =>{
  tab.addEventListener('click',(e) =>{
  
    e.stopPropagation()
    const text = e.currentTarget.dataset.tab
    location.href = 'start.html?query='+text;

  } )
} )
const categ = document.getElementsByClassName('category-box')
Array.from(categ).forEach((cat) => {
  cat.addEventListener('click', (e) => {
    
    e.stopPropagation()
    const text = e.currentTarget.children[1].innerText
    location.href = 'start.html?query=' + text;
    
  })
})
