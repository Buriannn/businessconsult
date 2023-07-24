//ФИКСИРУЕМ ШАПКУ ПРИ СКРОЛЛЕ
let header = document.querySelector('.header');
let headerHeight = header.offsetHeight;

let wrap = document.querySelector('.wrap')



window.addEventListener('scroll', () =>{
    let wrapWidth = wrap.offsetWidth;
    //Проверяем ширину окна, что бы урать фиксирование на мобилках
    if(wrapWidth >= 990) {
        //Если скролл равен или больше высоте "шапки" сайта добавляем активный класс
        if(scrollY >= headerHeight) {
            header.classList.add('header--fixed');
            //В противном случае удаляем активный класс
        } else {
            header.classList.remove('header--fixed');
        }
    }

});



//POP UP

//Получаем pop up
let popUp = document.querySelector('.pop-up');
//Получаем все кнопки для открытия pop up
let openPop = document.querySelectorAll('.open-pop-up--btn');

//Перебираем pop up через цикл
for (i = 0; i < openPop.length; i++) {
    //Вешаем событие на каждую кнопку
    openPop[i].addEventListener('click', ()=> {
        //Добавляем класс с свойством display: block
        popUp.classList.add('pop-up--active')
    })
}

//Получаем кнопку закртия pop-up
let closePop = document.querySelector('.pop-up-close');

//Вешаем событие на кнопку
closePop.addEventListener('click', function () {
    //Убираем класс с свойством display: block
    popUp.classList.remove('pop-up--active')
});



//PARALLAX

//Получаем все элменты для анимации
let animItem = document.querySelectorAll('.decor--parallax');


function parallax(event) {
    for (i = 0; i <animItem.length; i++) {
        animItem[i].style.transform = `translateX(${event.clientX / 50}px)`;
    }

}


document.addEventListener('mousemove', parallax)