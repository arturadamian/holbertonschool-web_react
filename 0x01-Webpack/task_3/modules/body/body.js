import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

function updateCounter() {
  let counter = $('#count').html() || 0;
  $('button').on('click', () => {
    counter += 1;
    $('#count').html(`${counter} clicks on the button`);
  });
};

_.debounce(updateCounter(), 500);
