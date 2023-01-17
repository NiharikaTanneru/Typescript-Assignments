var productlist = [
    { productName: 'Samsung Galaxy Note 7',
        pprice: 699,
        pstatus: 'Available'
    },
    {
        productName: 'samsungedge',
        pprice: 630,
        pstatus: 'Available'
    },
    {
        productName: 'lumia',
        pprice: 224,
        pstatus: 'Out of Stock'
    }
];
document.getElementById("pName0").innerHTML = productlist[0].productName;
document.getElementById("pName1").innerHTML = productlist[1].productName;
document.getElementById("pName2").innerHTML = productlist[2].productName;
function getMobileDetails(product) {
    if (product == productlist[0].productName) {
        document.getElementById("pPrice0").innerHTML = " " + productlist[0].pprice + "";
        document.getElementById("pAvailable0").innerHTML = " " + productlist[0].pstatus + "";
    }
    else if (product == productlist[1].productName) {
        document.getElementById("pPrice1").innerHTML = " " + productlist[1].pprice + "";
        document.getElementById("pAvailable1").innerHTML = " " + productlist[1].pstatus + "";
    }
    else if (product == productlist[2].productName) {
        document.getElementById("pPrice2").innerHTML = " " + productlist[2].pprice + "";
        document.getElementById("pAvailable2").innerHTML = " " + productlist[2].pstatus + "";
    }
}
