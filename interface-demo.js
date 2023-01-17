function getProductDetails(productObj) {
    return "Success" + "  " + productObj.productName;
}
var productObj = {
    productId: 101,
    productName: "Car"
};
{
    var result = getProductDetails(productObj);
    console.log(result);
}
