// import { f } from './l';
const l = require('./l');

function createInvoice( invoiceNumber ){
    return {
        invoiceNumber,
        items: []
    };
};

function clone( o ){
    return JSON.parse(  JSON.stringify( o ) );
}

function addItem( invoice, quantity, itemPrice, description ) {
    const newInvoice = clone( invoice );
    l.f( newInvoice );
    newInvoice.items.push( {
        quantity,
        itemPrice,
        description
    } );
    return newInvoice;
};

i = addItem( createInvoice(1), 2, 10, 'T-Shirt');

l.f( i );