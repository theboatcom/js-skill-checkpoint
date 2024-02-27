// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
//let newUsers = () => {
   // return fetch("https://jsonplaceholder.typicode.com/users")
   //   .then((response) => response.json()) 
    //  .then((data) => data.map((user) => user.name)); 
 // };
  
 // newUsers()
 

async function newUsers() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const users = data.map(user => user.name)
    console.log(users)
    
  }
  catch (error) {
    console.log(error.message)
  }

}

newUsers()