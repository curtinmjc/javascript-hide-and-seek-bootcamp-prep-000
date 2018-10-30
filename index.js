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
  let current = document.querySelector('div#grand-node')[0];
  var next;
  var deepest;
  while (current) {
    deepest = current;
    next = current.children[0];
    current = next;
  }
  return current;
}