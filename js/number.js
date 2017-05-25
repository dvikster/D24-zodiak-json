$(document).ready(function() {
    $('#know-number').on('click',identifyNumber);
});

$.getJSON('magic-number.json',function (data) {
    console.log(data);
    magicNumberArray = data;
});

function identifyNumber() {
    var datePik = $('.datepicker').val().replace(/-/g, '0')
    console.log(datePik);
    numberBirth=0;
    for (var i=0; i<datePik.length;i++){
        numberBirth=numberBirth+Number(datePik.charAt(i));
    }
    console.log(numberBirth);

    for (key in magicNumberArray) {
        if (key == numberBirth) {
            console.log(magicNumberArray[key]);
            $('.number-desc').html('<p> Ваше число судьбы <strong>'+key+'</strong></p><p>'+magicNumberArray[key]+'</p>');
        }
    }
}
