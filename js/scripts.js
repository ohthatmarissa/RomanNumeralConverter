$(document).ready(function() {
  $('form#roman').submit(function(event) {
    event.preventDefault();

    var number = parseInt($('input#number').val());
    var result = convertRoman(number);
    $('#result').text(result);

  });


    var romanSet = [
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
       if (number === 0) {
         return '';
       }

      for (var i = 0; i < romanSet.length; i++) {
        if (number >= romanSet[i][0]) {
          return romanSet[i][1] + convertRoman(number - romanSet[i][0]);
        }
      }
    }
  });
