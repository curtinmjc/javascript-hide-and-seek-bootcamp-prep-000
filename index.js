function getFirstSelector(selector) {
  //MJC change via adding comment
  return document.querySelector(selector);
}

function nestedTarget() {
  return document
    .querySelector('#nested .target')
}

function increaseRankBy(n) {
  var lis = document
    .querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < lis.length; i++) {
    var rank = parseInt(lis[i].innerHTML, 10);
//    var rank = lis[i].innerHTML;
    lis[i].innerHTML = (rank + n);
  }
}

function deepestChild() {
  let current = [];
  let next = [];
  while (current) {
    
  }
}