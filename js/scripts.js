$(document).ready(function() {
  $('form#roman').submit(function(event) {
    event.preventDefault();

    var num = parseInt($('input#number').val());
    var result = toRoman(num);
    $('#result').text(result);

  });

function toRoman(num) {
  if (isNaN(num) || num < 1 || num > 3999) {
    return 'please enter a valid number';
  }
    var romanSet = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var roman = "";

    for (var key in romanSet) {
      while (num >= romanSet[key]) {
        roman += key;
        num -= romanSet[key];
      }
    }
    return roman;
    }
  });
    //   [1000, 'M'],
    //   [900, 'CM'],
    //   [500, 'D'],
    //   [400, 'CD'],
    //   [100, 'C'],
    //   [90, 'XC'],
    //   [50, 'L'],
    //   [40, 'XL'],
    //   [10, 'X'],
    //   [9, 'IX'],
    //   [5, 'V'],
    //   [4, 'IV'],
    //   [1, 'I'],
    // ];





      // function convertRoman(number) {
      //     for (var i = 0; i < romanSet.length; i++) {
      //
      //     return romanSet[i][1] + convertRoman(number - romanSet[i][0]);
  //       }
  //     }
  //     if (isNaN(number) || number < 1) {
  //       return 'please enter a number';
  //     } else {
  //       return '';
  //   }
  // }
