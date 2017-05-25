$(document).ready(function() {
    $('select').material_select();
    $('#know-sign').on('click',identifySign);
});

var day=0;
var month='';
var signArray ={};

$.getJSON('package.json',function (data) {
    console.log(data);
    signArray = data;
});

function getSignDescription() {
    console.log(key, signArray[key].image, signArray[key].date, signArray[key].description);
    var out = '';
    out += '<h3>'+key +'</h3>';
    out += '<p>'+signArray[key].date +'</p>';
    out += '<img src="'+signArray[key].image +'">';
    out += '<p>'+signArray[key].description +'</p>';
    $('.sign-desc').html(out);
}

function identifySign(){
    day = $('#day').val();
    month = $('#month').val();
    // for (key in signArray){
    //     if(key == 'Козерог' && (day <= 20 && month == 'Январь') || (day <= 20 && month == 'Январь')) {
    //         getSignDescription();
    //     }
    //     if(key == 'Водолей' && (day >= 20 && month == 'Январь') || (day <= 20 && month == 'Январь')){
    //         getSignDescription();
    //     }
    // }


    switch (month){
        case'Январь':
            if(day <= 20){
                for (key in signArray){
                    if(key == 'Козерог') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Водолей') {
                        getSignDescription();
                    }
                }
            }
            break;
        case'Февраль':
            if(day <= 19){
                for (key in signArray){
                    if(key == 'Водолей') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Рыбы') {
                        getSignDescription();
                    }
                }
            }
            break;
        case'Март':
            if(day <= 20){
                for (key in signArray){
                    if(key == 'Рыбы') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Овен') {
                        getSignDescription();
                    }
                }
            }
            break;
        case'Апрель':
            if(day <= 20){
                for (key in signArray){
                    if(key == 'Овен') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Телец') {
                        getSignDescription();
                    }
                }
            }
            break;
        case'Май':
            if(day <= 21){
                for (key in signArray){
                    if(key == 'Телец') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Близнецы') {
                        getSignDescription();
                    }
                }
            }

            break;
        case'Июнь':
            if(day <= 21){
                for (key in signArray){
                    if(key == 'Близнецы') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Рак') {
                        getSignDescription();
                    }
                }
            }
            break;
        case'Июль':
            console.log('Июль!');
            if(day <= 22){
                for (key in signArray){
                    if(key == 'Рак') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Лев') {
                        getSignDescription();
                    }
                }
            }
            break;
        case'Август':
            if(day <= 21){
                for (key in signArray){
                    if(key == 'Лев') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Дева') {
                        getSignDescription();
                    }
                }
            }
            break;
        case'Сентябрь':
            if(day <= 23){
                for (key in signArray){
                    if(key == 'Дева') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Весы') {
                        getSignDescription();
                    }
                }
            }
            break;
        case'Октябрь':
            if(day <= 23){
                for (key in signArray){
                    if(key == 'Весы') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Скорпион') {
                        getSignDescription();
                    }
                }
            }
            break;
        case'Ноябрь':
            if(day <= 22){
                for (key in signArray){
                    if(key == 'Скорпион') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Стрелец') {
                        getSignDescription();
                    }
                }
            }
            break;
        case'Декабрь':
            if(day <= 22){
                for (key in signArray){
                    if(key == 'Стрелец') {
                        getSignDescription();
                    }
                }
            }
            else{
                for (key in signArray){
                    if(key == 'Козерог') {
                        getSignDescription();
                    }
                }
            }
            break;
        }

}

