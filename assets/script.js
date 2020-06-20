// displays Day, Month date in the header
const m = moment();
// console.log(m);
$("#currentDay").text(m.format("dddd, MMMM Do"));

