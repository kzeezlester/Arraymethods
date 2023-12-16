function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      const check = Math.random() < 0.5;
      setTimeout(() => {
        if (check) {
          resolve('Data retrieved successfully');
        } else {
          reject('Error: Failed to fetch data');
        }
      }, 1000);
    });
  }
  
  fetchDataFromAPI()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });