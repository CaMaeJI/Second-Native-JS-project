function modal(btnSelector, modalSelector, exitSelector, closeClickOverlay = true) {
    const btn = document.querySelectorAll(btnSelector),
          modal = document.querySelector(modalSelector),
          exit = document.querySelectorAll(exitSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();
          

    btn.forEach(e =>{
        e.addEventListener('click', function() {
            if(e.target) {
                e.preventDefault();
            }
            windows.forEach(item =>{
                item.style.display = 'none';
            });

            modal.style.display = 'block';
            /* document.body.style.overflow = 'hidden'; */
            document.body.classList.add('modal-open');
            document.body.style.marginRight = `${scroll}px`;
        });
    });
    exit.forEach(e =>{ 
        e.addEventListener('click', function() {
            windows.forEach(item =>{
                item.style.display = 'none';
            });

            if(e.target) {
                e.preventDefault();
            }
            modal.style.display = 'none';
           /*  document.body.style.overflow = ''; */
           document.body.classList.remove('modal-open');
           document.body.style.marginRight = `0px`;
        });
    });
    modal.addEventListener('click', function(e) {
        if (e.target === modal && closeClickOverlay) {
            windows.forEach(item =>{
                item.style.display = 'none';
                document.body.style.marginRight = `0px`;
            });

            modal.style.display = 'none';
            /* document.body.style.overflow = ''; */
            document.body.classList.remove('modal-open');
        }
    });
    
    function shotModalByTIme(selector, time) {
        setInterval(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.classList.add('modal-open');
        }, time);
    }  

    function calcScroll () {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }
/*     shotModalByTIme('.popup', 60000); */
}
export default modal;