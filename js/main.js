const scrollWindow = () => {
    // На сколько пикселей будет прокручиваться страница
        let scrolled;
        let timer;
    //  Через сколько действие будет повторяться
    
    //  Получаем еэлемент через ID
        document.getElementById(IDelemen).onclick = function(){
            scrolled = window.pageYOffset;
    // Определяем место положение скролла на странице
        
    // запуск функции    
            scrollToTop(); 
        }
    //  Сама функции
        function scrollToTop(){
    // Если положение скрола не вверху страницы
            if (scrolled > 0) {
    //Скролим вверх 
                window.scrollTo(0, scrolled);
    // Скроллим веерх (отнимаем кол-во пикселей от текущего значения) 
                scrolled = scrolled - 50; //100 - скорость прокрутки
                timer = setTimeout(scrollToTop, 200); //время повторения
    // Через какое время запустить повторную проверку
    // Повторение будет продолжаться, пока scrolled не станет - 0
            }
            else {
                clearTimeout(timer);
                window.scrollTo(0,0);
    //Останавливаем по достижению верха страницы
            }
        }
    }
    // Вызов функкции
    scrollWindow ();
    
    // Регулировать плавность (прокрутной и повторением)