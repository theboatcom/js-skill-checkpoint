// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

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