// const fetchDataFromAPI = () => {
//   return new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// {
//         return reject("Internal server error");
//       } else {
//         return resolve(res.json());
//       }
//     });
//   });
// };

// fetchDataFromAPI()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

  
  // Fetch fake data from JSONPlaceholder
const fetchFakeData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch fake data');
        }
        return response.json();
      });
  };
  
  // Example usage
  fetchFakeData()
    .then(data => {
      console.log(data);
      // Process the fetched data here
    })
    .catch(error => {
      console.error('Error fetching fake data:', error);
    });
  
// const fetchDataFromAPI = () => {
//   return new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// {
//         return reject("Internal server error");
//       } else {
//         return resolve(res.json());
//       }
//     });
//   });
// };

// fetchDataFromAPI()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

  
  // Fetch fake data from JSONPlaceholder
  const fetchFakeData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch fake data');
        }
        return response.json();
      });
  };
  
  // Example usage
  fetchFakeData()
    .then(data => {
      console.log(data);
      // Process the fetched data here
    })
    .catch(error => {
      console.error('Error fetching fake data:', error);
    });
  
