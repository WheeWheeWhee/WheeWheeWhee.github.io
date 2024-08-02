const story = document.getElementById("story");
const title = document.getElementById("title");

const submit = document.getElementById("submit");

submit.addEventListener("click", submitStory);


function submitStory () {
    let output = {title: title.value,
    story: story.value,
}
let existingStories = localStorage.getItem("stories");

if (existingStories === null) {
    existingStories = []
} else {
    existingStories = JSON.parse(existingStories);
    if (existingStories.length >= 3) {
        alert("Max stories reached! Delete on the Your Stories page.");
        return;
    }

    }
    existingStories.push(output)

    localStorage.setItem("stories", JSON.stringify(existingStories));
    alert("Story Submitted! You can read it on the Your Stories Page.")
    window.location.reload(true)
}

