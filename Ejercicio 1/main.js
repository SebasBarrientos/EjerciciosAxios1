// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((ress) => {
//     console.log(ress.data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((ress) => {
//     const varr = ress.data;
//     varr.forEach(element => {
//        console.log(element.name);
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const arrUsers = [];
const getTodos = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((ress) => {
      // console.log(ress);
      const varr = ress.data;
      arrUsers.push(ress.data);
      // varr.forEach(element => {
      //     console.log(element.name);
      //    users.push(element.name);
      // });
      extrayendoUsers(varr); //Con esta funcion SACAMOS EL NAME
    })
    .catch((err) => {
      console.error(err);
    });
};

console.log(arrUsers);

const extrayendoUsers = (arrUsers) => {
  const users = [];
  arrUsers.forEach((element) => {
    console.log(element.name);
    users.push(element.name);
  });
  console.log(users);
  showOutput(users);
};

function showOutput(users) {
  users.forEach((user) => {
    document.getElementById("res").innerHTML += `
              <div class="card mt-3">
              <div class="card-header">
                UserName
              </div>
              <div class="card-body">
                <pre>${user}</pre>
              </div>
            </div>
          `;
  });
}

document.getElementById("get").addEventListener("click", getTodos);
