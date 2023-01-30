// input element
const inputUsername = document.getElementById("input-username");

// Elements
const avatarEl = document.getElementById("avatar-container");
const nameEL = document.getElementById("name");
const loginEl = document.getElementById("login");
const dateJoinedEl = document.getElementById("date-joined");
const bioEl = document.getElementById("bio");
const reposEl = document.getElementById("repos");
const followersEl = document.getElementById("followers");
const followingEl = document.getElementById("following");
const locationEl = document.getElementById("location");
const htmlURLEl = document.getElementById("html-url");
const twitterUsernameEl = document.getElementById("twitter-username");
const companyEl = document.getElementById("company");

async function getUserData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    // Get the Avatar URL
    const avatarURL = data.avatar_url;
    avatarEl.src = avatarURL;

    // Get the user's name
    const name = data.name;
    nameEL.innerText = name;

    // Get the Login
    const login = data.login;
    loginEl.innerText = `@${login}`;

    // Get the Date Joined
    const dateJoined = data.created_at;

    const date = new Date(Date.parse(dateJoined));
    const formattedDate = date.toDateString();
    dateJoinedEl.innerText = `Joined ${formattedDate}`;

    // Get the Bio
    const bio = data.bio;
    bioEl.innerText = bio;

    // Get Repos
    const repos = data.public_repos;
    reposEl.innerText = repos;

    // Get Followers
    const followers = data.followers;
    followersEl.innerText = followers;

    // Get Following
    const following = data.following;
    followingEl.innerText = following;

    // Get Location
    const location = data.location;
    if (location === null) {
      locationEl.innerText = "Not Available";
    } else {
      locationEl.innerText = location;
    }

    // Get Twitter
    const twitterUsername = data.twitter_username;
    if (twitterUsername === null) {
      twitterUsernameEl.innerText = "Not Available";
    } else {
      twitterUsernameEl.innerText = twitterUsername;
    }

    // Get Company
    const company = data.company;
    if (company === null) {
      companyEl.innerText = "Not Available";
    } else {
      companyEl.innerText = company;
    }

    // Get the HTML URL
    const htmlURL = data.html_url;
    // htmlURLEl.innerText = htmlURL;
  } catch (error) {
    console.log(error);
  }
}

// search button element
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  const username = inputUsername.value;
  getUserData(username);
  inputUsername.value = "";
});
