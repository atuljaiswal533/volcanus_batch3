class phone {
    constructor(brandName){
        this.brandName = brandName
    }
    showFeatures = () =>{
        console.log(`the brandName of phone = ${this.brandName}`)
    }
    showCamera = (mp) =>console.log(`the phone has ${mp} MP sony camera`);
}

class mobiles extends phone {

}
const obj = new mobiles("sony xperia")
obj.showFeatures()
obj.showCamera(48)
