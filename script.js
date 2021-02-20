function accordions(triggersSelector) {
    const btns = document.querySelectorAll(triggersSelector); //добавляем кнопки 
    
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active-style')) {//фвтоматическое закрытие другого контекта, при повтором клике
                btns.forEach(btn => {
                    btn.classList.remove('active-style'); 
                    btn.nextElementSibling.style.maxHeight = '0px';
                    btn.nextElementSibling.classList.remove('active-content');
                });
            }
            this.classList.toggle('active-style'); //проверяем кнопки на класс активности
            this.nextElementSibling.classList.toggle('active-content'); //обращаемся к след элементу соседу
        
            if(this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 'px'; //добавляем высоту контенту
            } else {
                this.nextElementSibling.style.maxHeight = '0px'; //сварачиваем контент
            }
        });
    })



}

accordions('.accordion-title');