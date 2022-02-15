let list = document.querySelector('#list');

list.insertAdjacentHTML('beforebegin', '<h2>Web Technology</h2>');
list.insertAdjacentHTML('afterbegin', '<li>HTML</li>');
list.insertAdjacentHTML('beforeend', '<li>Javascript</li>');
list.insertAdjacentHTML('afterend', '<p>For frontend developers</p>');

