import "./body.css";
const $ = require("jquery");
const _ = require("lodash");

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;

const updateCounter = () => { count++; }

$('button').click(_.debounce(() => {
  updateCounter();
  $('#count').text(`${count} clicks on the button`);
}));
