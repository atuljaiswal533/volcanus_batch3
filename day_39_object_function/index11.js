const display = () => {
    console.log("This is my arrow function");
    
     setInterval(() => {
      const date = new Date();
      console.log("Date ", date.toLocaleDateString());
      console.log("Time ", date.toLocaleTimeString());
     }, 1000);
    return "Superman"
  };
  
  console.log(display())