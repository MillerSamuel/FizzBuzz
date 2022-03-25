function fizzbuzz(){
    for(var i=1;i<=100;i++){
        var out=i;
        if(i%3==0){
            out="Fizz";
        }
        if (i%5==0) {
            out="Buzz";
        }
        if (i%3==0&i%5==0) {
            out="FizzBuzz"
        }
        console.log(out)
    }
}
fizzbuzz();
