$(document).ready(function() {
    // $('#know-stone').on('click',identifyStones);
    $('#know-stone').on('click',anotherWay);
});

$.getJSON('stones.json',function (data) {
    console.log(data);
    stonesArray = data;
});
$.getJSON('stones-desc.json',function (data1) {
    console.log(data1);
    stonesDescArray = data1;
});

// function identifyStones() {
//     var sign = $('#stone').val();
//     console.log(sign);
//     //<h3>Камни для знака зодиака - </h3>
//     var out1 = '';
//     for(var key in stonesArray){
//         if( key == sign ){
//             for (var i=0; i < stonesArray[key].length; i++)  {
//                 console.log( sign, key, stonesArray[key].length, stonesArray[key][i].description);
//                 out1 += '<h3>'+stonesArray[key][i].name +'</h3>';
//                 out1 += '<img src="'+ stonesArray[key][i].image +'">';
//                 out1 += '<p>'+ stonesArray[key][i].description +'</p>';
//                 $('.stones-desc').html(out1);
//             }
//         }
//     }
// }

function anotherWay() {
    var sign = $('#stone').val();
    var out2 = '';
    for(var key in stonesDescArray){
        for (var i=0; i < stonesDescArray[key].length; i++)  {
            console.log(stonesDescArray[key][i].signstone);
            if( stonesDescArray[key][i].signstone == sign )
                console.log( sign, key, stonesDescArray[key].length, stonesDescArray[key][i].signstone);
            out2 += '<h3>'+stonesDescArray[key][i].signstone +'</h3>';
            out2 += '<img src="'+ stonesDescArray[key][i].image +'">';
            out2 += '<p>'+ stonesDescArray[key][i].description +'</p>';
            $('.stones-desc1').html(out2);
        }
    }
}


//{
//  "Овен"     : { "stone" : { "name" : "stonename",    "image" : "img/1.gif",  "description" : "Описание"}},
//  "Телец"    : { "stone" : { "name" : "stonename",    "image" : "img/2.gif",  "description" : "Описание"}},
//  "Близнецы" : { "stone" : { "name" : "stonename",    "image" : "img/3.gif",  "description" : "Описание"}},
//  "Рак"      : { "stone" : { "name" : "stonename",    "image" : "img/4.gif",  "description" : "Описание"}},
//  "Лев"      : { "stone" : { "name" : "stonename",    "image" : "img/5.gif",  "description" : "Описание"}},
//  "Дева"     : { "stone" : { "name" : "stonename",    "image" : "img/6.gif",  "description" : "Описание"}},
//  "Весы"     : { "stone" : { "name" : "stonename",    "image" : "img/7.gif",  "description" : "Описание"}},
//  "Скорпион" : { "stone" : { "name" : "stonename",    "image" : "img/8.gif",  "description" : "Описание"}},
//  "Стрелец"  : { "stone" : { "name" : "stonename",    "image" : "img/9.gif",  "description" : "Описание"}},
//  "Козерог"  : { "stone" : { "name" : "stonename",   "image" : "img/10.gif", "description" : "Описание"}},
//  "Водолей"  : { "stone" : { "name" : "stonename",   "image" : "img/11.gif", "description" : "Описание"}},
//  "Рыбы"     : { "stone" : { "name" : "stonename",   "image" : "img/12.gif", "description" : "Описание"}}
//}
