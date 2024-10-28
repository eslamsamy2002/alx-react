import $ from 'jquery';
import _ from 'lodash';

// Add elements to the body
$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;

  // Function to update counter
  function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  }

  // Bind the debounce function from lodash to the button click event
  $('button').on('click', _.debounce(updateCounter, 300));
});

