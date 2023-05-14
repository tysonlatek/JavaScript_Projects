function displayColor(color) {
    var favoriteColor = color.getAttribute("data-favorite_color");
    alert(color.innerHTML + "'s favorite color is " + favoriteColor + "!")
}