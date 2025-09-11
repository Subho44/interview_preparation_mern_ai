function counter()  {
    let count = 0;

    return {
        increment: function() {
            count ++;
            return count;
        },
          decrement: function() {
            count --;
            return count;
        },
          reset: function() {
            count =0;
            return count;
        },
          value: function() {
            return count;
        }
    };
}
let x = counter();
console.log(x.increment());
console.log(x.increment());
console.log(x.decrement());
console.log(x.reset());