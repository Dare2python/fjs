const util = require('util');

module.exports = {
    f
}
// export 
function f( o ){
    console.log(util.inspect(o, { colors: true, compact: true, showHidden: true, depth: null, showProxy: true }));
};
