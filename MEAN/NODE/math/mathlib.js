module.exports = function (){
  return {
    add: function(num1, num2) { 
         return num1+num2;
    },
    multiply: function(num1, num2) {
          return num1*num2;
    },
    square: function(num2) {
         return num2*num2;
    },
    random: function(num1, num2) {
         return Math.floor(Math.random()*35)+1;
    }
  };
}