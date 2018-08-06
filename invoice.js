// import { f } from './l';
const l = require('./l');

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


l.f( i );