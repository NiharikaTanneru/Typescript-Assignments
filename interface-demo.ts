interface Product{
    productId:number;
    productName:string;
}

function getProductDetails(productObj:Product):string{
          return "Success"+ "  "+productObj.productName;
}

var productObj={
    productId:101,
    productName:"Car"
}


{
    let result:string = getProductDetails(productObj);
    console.log(result);
}
