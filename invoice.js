const util = require('util');

function createInvoice( invoiceNumber ){
    return {
        invoiceNumber,
        items: []
    };
};

// console.log(createInvoice(1)  );

function clone( o ){
    return JSON.parse(  JSON.stringify( o ) );
}

// console.log(createInvoice(1), clone(createInvoice(1)) );

function addItem(
    invoice,
    quantity,
    itemPrice,
    description
){
    const invoiceItems = clone( invoice.items );
    const newItem = {
        quantity,
        itemPrice,
        description
    };
    return {
        invoiceNumber: invoice.invoiceNumber,
        items: [ ...invoiceItems, newItem ]
    };
};

i = addItem( createInvoice(1), 2, 10, 'T-Shirt');
console.log( i );
console.dir( i, { depth: null })
console.log(util.inspect(i, { compact: true, showHidden: false, depth: null }));
console.log(util.inspect(i, { colors: true, compact: false, showHidden: false, depth: null }));

function f( o ){
    console.log(util.inspect(o, { colors: true, compact: false, showHidden: false, depth: null }));
};

f( i );