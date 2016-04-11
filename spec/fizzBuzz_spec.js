    describe ("fizzBuzz", function(){
      describe ("when given a number", function(){
        it ("returns that number", function(){
          expect (fizzBuzz(1)).toBe(1)
          expect (fizzBuzz(2)).toBe(2)
          expect (fizzBuzz(4)).toBe(4)
        })
      })
     describe ('when given a multiple of 3', function(){
        it ("returns fizz", function(){
          expect (fizzBuzz(3)).toBe('fizz')
          expect (fizzBuzz(6)).toBe('fizz')
          expect (fizzBuzz(9)).toBe('fizz')
        })
      })
      describe ('when given a multiple of 5', function(){
        it ('returns buzz', function(){
          expect (fizzBuzz(5)).toBe('buzz')
          expect (fizzBuzz(10)).toBe('buzz')
          expect (fizzBuzz(20)).toBe('buzz')
      })
    })
    describe ('when given a multiple of 3 and 5', function(){
      it ('returns fizzBuzz', function(){
        expect (fizzBuzz(15)).toBe('fizzBuzz')
        expect (fizzBuzz(30)).toBe('fizzBuzz')
        expect (fizzBuzz(60)).toBe('fizzBuzz')
      })
    })
  })


function fizzBuzz(number){
  if (number % 3 === 0 && number % 5 === 0){
    return 'fizzBuzz'
  }else if(number % 3 === 0){
      return 'fizz';
    }else if(number % 5 === 0){
      return 'buzz';
    }else{
      return number;
    }
}
