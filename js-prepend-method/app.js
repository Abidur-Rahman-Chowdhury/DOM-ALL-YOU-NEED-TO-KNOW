let app = document.getElementById('app');

let langs = ['CSS', 'JavaScript', 'TypeScript'];

let nodes = langs.map(lang => {
    let li = document.createElement('li');

    li.textContent = lang;
    return li;
})

app.prepend(...nodes)