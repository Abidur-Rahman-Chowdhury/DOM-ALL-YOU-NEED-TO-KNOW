let app = document.getElementById('app');

const langs = ['TypeScript', 'HTML', 'CSS'];

let nodes = langs.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});
console.log(nodes);
app.append(...nodes);