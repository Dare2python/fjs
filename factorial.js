const l = require('./l');

const factorial = ( n )  =>
    n <= 1 ?
    1 :
    n * factorial( n - 1 );

l.f( factorial(5) );