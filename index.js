function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll('.ranked-list')
  let firstList = rankedLists[n]
  let children = firstList.children
  let start = 1
      for (let i = 0, l = children.length; i < l; i++){
        parseInt(children[i].innerHTML) + i + n 
      } return '.ranked-list'

}

function increaseRankBy(n){
let rankedList = document.querySelectorAll('.ranked-list')
for (let i = 0; i < rankedList.length; i++){
  let children = rankedList[i].children
for (let i = 0; i < children.length; i++){
 children[i] = parseInt(children[i].innerHTML) + n
}
} 
}