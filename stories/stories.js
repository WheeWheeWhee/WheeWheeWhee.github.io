const title = document.getElementById("title-text");
const story = document.getElementById("story-text");
const deleteStoryButton = document.getElementById("delete");

const button1 = document.getElementById("story1");
const button2 = document.getElementById("story2");
const button3 = document.getElementById("story3");

let currentStory = -1;

let stories = localStorage.getItem("stories");

if (stories === null) {
    stories = [];
} else {
    stories = JSON.parse(stories)
}


button1.addEventListener("click", () => displayStory(1));
button2.addEventListener("click", () => displayStory(2));
button3.addEventListener("click", () => displayStory(3));

deleteStoryButton.addEventListener("click", () => deleteStory());


function displayStory (index) {
    if (stories.length < index) {
        alert("No Story in this slot!");
        return;
    }
    title.textContent = stories[index - 1].title;
    story.textContent = stories[index - 1].story;
    currentStory = index;
}
function deleteStory (index) {
    if (currentStory === -1) {
        alert("Select a story first!");
        return;
    }
    if (!confirm("Are you sure you want do delete this story?")) {
        return;
    }
    stories.splice(index - 1, 1);
    localStorage.setItem("stories", JSON.stringify(stories));
    window.location.reload(true);

}