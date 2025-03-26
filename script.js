const apiUser = fetch("https://jsonplaceholder.typicode.com/users");
console.log(apiUser);
apiUser
  .then((data) => {
    console.log ("data :", data);
    return data.json();
  })
  .then((data) => {
    const userArray = data;
    console.log("userArray : ", userArray);

    const searchInput = document.getElementById("search");

    // when page loads at first then I want to see all the monsters at first
    const cards = document.getElementById("cards");
      userArray.forEach((eachUser, i) => {
        const user = document.createElement("div");
        user.className = "user";
        const userImage = document.createElement("img");
        userImage.id = "user-image";
        userImage.src = `https://robohash.org/${i}`;
        userImage.alt = "user-image-robo";
        const name = document.createElement("h4");
        name.textContent = eachUser.name;
        name.id = "name";
        const email = document.createElement("p");
        email.textContent = eachUser.email;
        const username = document.createElement("p");
        username.textContent = eachUser.username;
        user.append(userImage, name, email, username);
        cards.appendChild(user);
      });
    
    // this will filter the array accroding to the search bar
    searchInput.addEventListener("input", function () {
      
      const cards = document.getElementById("cards");
      cards.innerHTML = "";
      console.log("searchInput : ", searchInput.value);
      userArray.filter((element) => element.name.includes(searchInput.value)).forEach((eachUser, i) => {
        const user = document.createElement("div");
        user.className = "user";
        const userImage = document.createElement("img");
        userImage.id = "user-image";
        userImage.src = `https://robohash.org/${i}`;
        userImage.alt = "user-image-robo";
        const name = document.createElement("h4");
        name.textContent = eachUser.name;
        name.id = "name";
        const email = document.createElement("p");
        email.id = "email";
        email.textContent = eachUser.email;
        const username = document.createElement("p");
        username.id = "username";
        username.textContent = eachUser.username;

        user.append(userImage, name, email, username);

        cards.appendChild(user);
      });
    });
  });
  // IMPORTANT: after removing input, from input tag, when still all the monsters shows it's reason is 
  // console.log(("Hello World!").includes("")); is true because 
  // An empty string "" is technically present at every position in any string.
  // Every string contains an empty string at the start, between every character, and at the end.

  // console.log("Hello".includes(""));  // true
  // console.log("World".includes(""));  // true 
  // console.log("".includes(""));       // true

  // Think of an empty string ("") as a placeholder that fits before, between, and after every character in "Hello World!":
  //  "" H "" e "" l "" l "" o ""   "" W "" o "" r "" l "" d "" ! ""
  // Since it's always present, .includes("") returns true for any string. ✅


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filteredArr = arr.filter((num) => num);
// console.log("filteredArr : ", filteredArr);

// const arrr = ["sdlfk", "skduejs", "apple", "banana"];
// const newArr = arrr.filter((element) => element.includes("a"));
// console.log("newArr : ", newArr);
// these are two basics through which I will filter the array according to the search

console.log(("Hello World!").includes(""));
