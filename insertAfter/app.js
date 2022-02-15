function insertAfter(newNode, existingNode) {
    console.log(existingNode);
    
    existingNode.parentNode.insertBefore(newNode,existingNode.nextSibling)
    
}
let menu = document.getElementById('menu');
// create a new li node 
let li = document.createElement('li');
li.textContent = 'Services';

// insert a new node after the last item

insertAfter(li, menu.lastElementChild);