const product = [
    {
        title:'iphone',price:90000,category:'mobiles'},
        {title:'oneplus',price:60000,category:'mobiles'},
       { title:'hp probook',price:30000,category:'mobiles'},
       { title:'lenovo yoga',price:20000,category:'mobiles'},
       { title:'ipad',price:19000,category:'mobiles'},
       { title:'samsung',price:14000,category:'mobiles'},

]

const result = product.filter((data)=>data.price >=70000)
console.log(result)