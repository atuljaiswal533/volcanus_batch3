// <!-- https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian -->
const fecthData = async () =>{
    const api =await fetch ("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
    const data = await api.json();

    // return data;
    
    console.log(data.meals);

    const div = document.querySelector("#mealdata");


    div.innerHTML = data.meals.map((d)=>`<div>
    <img src=${d.strMealThumb} style="width:250px"/>
    <p>${d.strMeal}</p>
    </div>`);
    


};
fecthData("indian");




document.querySelector("#American").addEventListener("click",() => fetchData("American"))

document.querySelector("#Indian").addEventListener("click",() => fetchData("Indian"))

document.querySelector("#Thai").addEventListener("click",() => fetchData("Thai"))

document.querySelector("#Chinese").addEventListener("click",() => fetchData("Chinese"))





