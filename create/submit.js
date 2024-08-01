const story = document.getElementById("story");
const title = document.getElementById("title");

const submit = document.getElementById("submit");

submit.addEventListener("click", submitStory);


function submitStory () {
    console.log(title.value)
    console.log(story.value)
}