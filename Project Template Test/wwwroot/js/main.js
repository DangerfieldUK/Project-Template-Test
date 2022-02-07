$(document).ready(function() {
    alert('Document Ready')

    console.log('hello')
});


function colorChange() {
    $('div').css('background', '#20c997!important')
};

$('.trigger').on('click', () => {
    $('.message').fadeToggle().css('display', 'flex');
});