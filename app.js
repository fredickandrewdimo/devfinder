// Input Element for username
const inputUsername = document.getElementById("input-username");

async function getUserData(username) {
  const data = localStorage.getItem(username);
  if (data) {
    updateProfileData(JSON.parse(data));
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("Invalid username");
    const data = await response.json();

    // Save the fetched data to local storage
    localStorage.setItem(username, JSON.stringify(data));

    updateProfileData(data);
  } catch (error) {
    console.log(error);
  }
}

function updateProfileData(data) {
  // Get the user's Avatar
  const avatarURL = data.avatar_url;
  document.getElementById("avatar-container").src = avatarURL;

  // Get the user's name
  const name = data.name;
  document.getElementById("name").innerText = name;

  // Get the Date Joined
  const dateJoined = data.created_at;

  const date = new Date(Date.parse(dateJoined));
  const formattedDate = date.toLocaleDateString();
  console.log(formattedDate);
  document.getElementById("date-joined").innerText = `Joined ${formattedDate}`;

  // Get the Bio
  const bio = data.bio;
  document.getElementById("bio").innerText = bio;

  // Get Repos
  const repos = data.public_repos;
  document.getElementById("repos").innerText = repos;

  // Get Followers
  const followers = data.followers;
  document.getElementById("followers").innerText = followers;

  // Get Following
  const following = data.following;
  document.getElementById("following").innerText = following;

  // Get Location
  const location = data.location;
  if (location === null) {
    document.getElementById("location").innerText = "Not Available";
  } else {
    document.getElementById("location").innerText = location;
  }

  // Get Twitter
  const twitterUsername = data.twitter_username;
  if (twitterUsername === null) {
    document.getElementById("twitter-username").innerText = "Not Available";
  } else {
    document.getElementById("twitter-username").innerText = twitterUsername;
  }

  // Get Company
  const company = data.company;
  if (company === null) {
    document.getElementById("company").innerText = "Not Available";
  } else {
    document.getElementById("company").innerText = company;
  }

  // Get the HTML URL
  const htmlURL = data.html_url;
  const htmlUrlEl = document.getElementById("html-url");
  htmlUrlEl.href = htmlURL;
  htmlUrlEl.innerText = `https://github.${name}`;

  // Get the Login
  const login = data.login;
  const loginEl = document.getElementById("login");
  loginEl.innerText = `@${login}`;
  loginEl.href = htmlURL;
}

// Search Button Element
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  const username = inputUsername.value;
  if (username) {
    getUserData(username);
    inputUsername.value = "";
  }
});
