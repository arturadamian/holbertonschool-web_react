import $ from 'jquery';

$('body').prepend('<span id="logo"></span>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  let counter = 0;
  $('button').on('click', () => {
    counter++;
    console.log(counter);
    $('#count').html(`${counter} clicks on the button`);
  });
};
(() => {
  let dprocess = $.debounce(updateCounter, 5000);
  dprocess();
});
updateCounter();
