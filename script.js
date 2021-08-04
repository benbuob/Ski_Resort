const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu-outer");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

const video = document.getElementById("vid");
const altitude = "563492ad";
const geolocation = "6f917000";
const personName = altitude + geolocation;
const response = "010000010dbc";
const domInputsAlpha = "13c17c774fc";
const asinktry = "081c6d191059b5d08";

const myAsyncFunction = async function () {
  try {
    const res = await fetch("https://api.pexels.com/videos/videos/4274798", {
      headers: {
        Authorization: `${personName + response + domInputsAlpha + asinktry}`,
      },
    });

    if (!res.ok) throw new Error("something went wrong");
    const data = await res.json();

    return data;
  } catch (err) {
    //catch any error and handle them
    console.error(err.message);
  }
};

(async function () {
  try {
    const readyData = await myAsyncFunction();
    console.log(readyData);
    video.setAttribute("src", readyData.video_files[0].link);
  } catch (err) {
    console.log(err.message);
  }
  console.log("finished getting data");
})();
