export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.append(button);
}

export function createArrList(arr) {
    const list = document.createElement('ul');
    arr.forEach((text) => {
        const item = document.createElement('li');
        item.textContent = text;
        item.addEventListener('mouseover', () => {
            item.setAttribute('title', item.textContent);
        });
        list.append(item);
    });
    document.body.append(list);
}

export function createLink() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.textContent = 'tensor';
    let clicked = false;
    link.addEventListener('click', (event) => {
        if (!clicked) {
            event.preventDefault();
            link.textContent += ' ' + link.getAttribute('href');
            clicked = true;
        }
    });
    document.body.append(link);
}

export function createList() {
    const list = document.createElement('ul');
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    function addItem() {
        const item = document.createElement('li');
        item.textContent = 'Пункт';
        item.addEventListener('click', () => {
            item.textContent += '!';
        });
        list.append(item);
    }

    addItem();
    button.addEventListener('click', addItem);
    document.body.append(list, button);
}
