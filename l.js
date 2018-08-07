const util = require('util');

module.exports = {
    f
}
// export 
function f( o ){
    console.log(util.inspect(o, { colors: true, compact: true, showHidden: true, depth: null, showProxy: true }));
};

sequence2 = ( f1, f2 ) =>
    (...args) =>
    f2( f1( ...args ) );

// sequence = ( head, ...tail) =>
//     (...args) => {
//         tail.reduce( sequence2, head(...args))
//     };

// sequence = ( ...ff) =>
//     (...args) => {
//         ff.reduce( sequence2, ...args );
//     };

sequence = ( head, ...tail) =>
    tail.reduce( sequence2, head );


const f1 = ( a, b ) => a + b;
const f2 = a => `f2${a}`;
const f3 = a => `f3${a}`;

console.log( f3( f2( f1(  2, 5 ) ) ) );

console.log( sequence( f1, f2, f3 )(2, 5) );
