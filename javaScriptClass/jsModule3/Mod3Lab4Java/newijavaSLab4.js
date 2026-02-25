let customerType
let customerTypeFull
let invoiceTotal
let discountPercent
let discountAmount
let newInvoiceTotal

document.write('<h3>Welcome to the Invoice Application</h3>')

customerType = prompt('Enter your customer type (r/w)').toLowerCase()
invoiceTotal = parseFloat(prompt('Enter the invoice Total'))


if (customerType === 'r') {
    customerTypeFull = ('Retail Customer')
    //nested conditionals for retail customers//
    if (invoiceTotal >=500 ) {
        discountPercent = 0.10
    } else if (invoiceTotal >=250 && invoiceTotal <500){
        discountPercent = 0.5
    } else {discountPercent = 0
    }

} else if (customerType === 'w') {
    customerTypeFull = ('Wholesale Customer')
    //nested conditionals for wholesale customers//
    if (invoiceTotal >=500 ) {
        discountPercent = 0.20
    } else discountPercent = 0.10
    
}
else {
    customerTypeFull = ('Unknown Customer Type')

    discountPercent = 0
}
//perform calculations//
discountAmount = invoiceTotal * discountPercent 
newInvoiceTotal = invoiceTotal - discountAmount 
//display results//

document.write(`${customerTypeFull}<br>`)
document.write(`InvoiceTotal: $${invoiceTotal}<br>`)
document.write(`Discount Percent: ${discountPercent *100}%<br>`)
document.write(`Discount Amount: $${discountAmount.toFixed(2)}<br>`)
document.write(`Grand Total: $${newInvoiceTotal.toFixed(2)}`)
