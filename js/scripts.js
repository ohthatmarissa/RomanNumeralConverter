$(document).ready(function() {
  $('form#roman').submit(function(event) {
    event.preventDefault();

    var number = parseInt($('input#number').val());
    var result = convertRoman(number);
    $('#result').text(result);

  });


    var romanSet = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I'],
    ];

      function convertRoman(number) {
          for (var i = 0; i < romanSet.length; i++) {
        if (number >= romanSet[i][0]) {
          return romanSet[i][1] + convertRoman(number - romanSet[i][0]);
        }
      }
      if (isNaN(number) || number < 1) {
        return 'please enter a number';
      } else {
        return '';
    }
  }
  });
