function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}


function increaseRankBy(n){
let rankedList = document.querySelectorAll('.ranked-list')
   for (let i = 0; i < rankedList.length; i++) {
 
        let children = rankedList[i].children
        for (let i = 0; i < children.length; i++) {
         children[i].innerHTML = parseInt(children[i].innerHTML) + n
       
        }
} 
}

function deepestChild(){
 
  let deepChild = document.querySelector('#grand-node')
  let deeperChild = deepChild.children[0]
 
   while (deeperChild) {
    deepChild = deeperChild
    deeperChild = deepChild.children[0]
   } 
  return deepChild
}
