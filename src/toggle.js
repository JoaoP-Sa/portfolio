function toggle(id){
    const details = document.getElementById(id);

    details.addEventListener('transitionend', function(){
        details.style.height = 'auto';
    });

    if(!details.classList.contains('active')){
        details.classList.add('active');
        let thisHeight = details.clientHeight + 'px';

        details.style.height = 0;

        setTimeout(() => {
            details.style.height = thisHeight;
        }, 0);
    }
    else{
        let thisHeight = details.clientHeight + 'px';
        details.style.height = thisHeight;

        setTimeout(() => {
            details.style.height = 0;
        }, 0);
        details.addEventListener('transitionend', function transitionend(){
            details.classList.remove('active');
            

            details.removeEventListener('transitionend', transitionend);
        });
    }
}

export default toggle;