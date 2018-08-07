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

f( rectangleArea() );

const rectangle  = {
    width: 5,
    heigth: 4
};

console.log( rectangleArea.bind(rectangle) );
f( rectangleArea.bind(rectangle) );
f( rectangleArea.bind(rectangle)() );
