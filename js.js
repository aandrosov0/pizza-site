function setMenu(btn) {
    let menu = document.getElementById('menu');
    let list = document.getElementById(btn.innerHTML);
    
    for(let child of menu.children) {
        child.classList.remove('current');
    }

    list.classList.add('current');

    for(let child of btn.parentElement.children) {
        child.classList.remove('current');
    }

    btn.classList.add('current');
}