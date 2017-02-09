var runtotal = 0;
var lastoperator = '';

function runningSum(last_number) {
  var last_value = Number(last_number);
  switch (lastoperator) {
  case 'x':
    console.log('Got here');
    runtotal = runtotal * last_value;
    break;  
  case '+':
    runtotal = runtotal + last_value;
    break;
  case '-':
    runtotal = runtotal - last_value;
    break;
  case '/':
    runtotal = runtotal - last_value;
    break;
  default:
  	runtotal = last_value;
  	console.log(runtotal);
  	break;
  }
  return;
};


$(function () {
  $('#equals').on('click', function(e) {
    var last_number = $('#runsum').text().split(/\D/g).slice(-2,-1)[0];
    runningSum(last_number);
    $('#total').text(runtotal.toString()); 
    $('#runsum').text(''); 
    lastoperator='';
  });
  
  $('.operand').on('click', function(e) {
    $('#runsum').append(e.target.textContent);
    var last_number = $('#runsum').text().split(/\D/g).slice(-2,-1)[0];
    runningSum(last_number);
    lastoperator = $('#runsum').text().slice(-1); 
    console.log(lastoperator);
  });
  
	$('.buttons').not('.action').on('click', function(e) {
  	$('#runsum').append(e.target.textContent); 
  });
});
