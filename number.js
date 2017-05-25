$(document).ready(function() {
    $('#know-number').on('click',identifyNumber);
});

$.getJSON('magic-number.json',function (data) {
    console.log(data);
    magicNumberArray = data;
});
