function fetchUsers() {
  fetch("https://randomuser.me/api/?results=3")
    .then(response => response.json())
    .then(data => {
      const users = data.results.map(details => ({
        name: `${details.name.first} ${details.name.last}`,
        email: details.email,
        img: details.picture.large
      }));

      console.log(users);

      const container = document.getElementById("userCards");
      container.innerHTML = ""; // Clear previous user cards

      users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("user-card");

        const img = document.createElement("img");
        img.src = user.img;
        img.alt = "Profile Picture";

        const name = document.createElement("h2");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;

        card.append(img, name, email);
        container.appendChild(card);
      });
    })
    .catch(err => console.log("User not fetched:", err));
}

fetchUsers();
document.querySelector("#refreshButton").addEventListener("click", fetchUsers);
