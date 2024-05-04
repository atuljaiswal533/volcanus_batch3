class product {
  showfeatures = (producttype, brandname) => {
    if (producttype == "mobile") {
      console.log(`the brandname of mobile = ${brandname}`);
    } else if (producttype == "laptop") {
      console.log(` the brandname of laptop = ${brandname}`);
    } else if (producttype == "laptop") {
      console.log(` the brandname of tablet = ${brandname}`);
    }
  };

  showprice = (price) => console.log(` the product price = ${price}`);
}

class mobiles extends product {}
class laptops extends product {}

const obj = new mobiles();
obj.showFeatures("mobile", "sony");
obj.showprice(40000);

const objlaptop = new laptops();
objlaptop.showFeatures("laptop", "hp");
objlaptop.showprice(75000);
