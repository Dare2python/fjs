// import { f } from './l';
cc

function createInvoice(invoiceNumber) {
    return {
        invoiceNumber,
        items: []
    };
};

function clone(o) {
    return JSON.parse(JSON.stringify(o));
}

function addItem(invoice, quantity, itemPrice, description) {
    const newInvoice = clone(invoice);
    l.f(newInvoice);
    newInvoice.items.push({
        quantity,
        itemPrice,
        description
    });
    return newInvoice;
};

i = addItem(createInvoice(1), 2, 10, 'T-Shirt');
i = addItem(i, 3, 25, 'Bag');

l.f(i);

function calculateSum(invoice) {
    const logReducer = (acc, item) => {
        l.f(acc);
        l.f(item);
        return acc + item.quantity * item.itemPrice;
    }

    return invoice.items.reduce(logReducer, 0);
};

l.f( calculateSum( i ) );
