const fecthData = async () =>{
    const api =await fetch ("https://jsonplaceholder.typicode.com/todos");
    const data = await api.json();

    // return data;
    
    console.log(data);

    const div = document.querySelector('#showdata')

    div.innerHTML = data.map((d) => `<div>
       <p> ${d.id}</p>
       <p> ${d.title}</p>

    </div>`);

};
fecthData();
