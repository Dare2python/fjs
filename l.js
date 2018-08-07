const util = require('util');

module.exports = {
    f
}
// export 
function f( o ){
    console.log(util.inspect(o, { colors: true, compact: true, showHidden: true, depth: null, showProxy: true }));
};

const rectangleArea = function(){
    return this.width * this.heigth;
}

f( 
    ['Functional', 'programming', 'is', 'cool']
        .map( word => word.length )
        .filter( num => num % 2 === 0)
        .reduce( (a, b) => a+b, 0)
);

