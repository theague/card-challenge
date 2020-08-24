const usersArray = [
  {
    id: 2,
    name: "Jaime Rios",
    username: "papaponmx",
    email: "jaime.rios.dev@outlook.com",
    address: {
      street: "9397 Bridge Street",
      suite: "Suite 879",
      city: "Auburn",
      state: "NY",
      zipcode: "13021",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
  },
];

const [{name}] = usersArray;
const [{username}] = usersArray;
const [{
    address: {
      street, 
      city, 
      state, 
      zipcode,
    }
  }] = usersArray;

document.getElementById("username").innerHTML = "@" + username;
document.getElementById("name").innerHTML = name;
document.getElementById("address1").innerHTML = street;
document.getElementById("address2").innerHTML = city + ", " + state + " " + zipcode;