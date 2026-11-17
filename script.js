const cardRow = document.querySelector(".cardRow")
const musicPlayBtn = document.querySelector(".playerControlsPlayBtn")
const bgShape = document.querySelector(".bg-shape");
const pauseGroup = document.getElementById("pauseGroup");
const playGroup = document.getElementById("playGroup");
let isPlaying = true;

let cards = ""

for (let index = 0; index < 9; index++) {
    cards += `<div class="albumCardWrapper">

                    <div class="albumImg">
                        <img src="https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_1280.jpg"
                            alt="">
                    </div>
                    <div class="albumInfo">
                        <div class="albumTitle titleText">Album ${index}</div>
                        <span>name!,name2, name3</span>
                    </div>
                </div>`

}

cardRow.innerHTML = cards



musicPlayBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
        // Switch to PAUSE state
        bgShape.setAttribute("fill", "#242424");
        pauseGroup.style.display = "block";
        playGroup.style.display = "none";
        // audio.play();
    } else {
        // Switch to PLAY state (Inverts the background and shows the triangle)
        bgShape.setAttribute("fill", "#C3C4E1");
        // Update the inner triangle fill color if needed
        playGroup.querySelector("path").setAttribute("fill", "#242424");
        pauseGroup.style.display = "none";
        playGroup.style.display = "block";
        // audio.pause();
    }
});