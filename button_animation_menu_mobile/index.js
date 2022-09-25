let items = document.querySelectorAll("li");
items.forEach(li => {
    li.addEventListener('click', function(e){
        console.log(e.target);
        console.log(e.target.offsetLeft);
        // offsetLeft là khoảng cách của item được click
        document.getElementById('action').style.left = e.target.offsetLeft + 'px';
        items.forEach(li_remove_active => {
            li_remove_active.classList.remove('active');
        });
        this.classList.add('active');
    });
});
