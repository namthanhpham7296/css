let countGroup  = document.querySelectorAll('.list .item').length;
let active = 0;
function load(){
    var itemDefault = document.getElementById('item_' + (active - 2 == -2 ? countGroup - 2 : active - 2 == -1 ? countGroup - 1 : active - 2));
    itemDefault.classList.remove('hide');
    var itemHide = document.getElementById('item_'+(active - 1 < 0 ? countGroup - 1 : active - 1));
    itemHide.classList.remove('active');
    itemHide.classList.add('hide');
    var itemActive = document.getElementById('item_'+active);
    itemActive.classList.add('active');
    itemActive.classList.remove('hide');
}

load();

document.getElementById('next').onclick = () => {
    active = active + 1 >= countGroup ? 0 : active + 1;
    load();
}