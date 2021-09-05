//grab elements from DOM

const dogDiv = document.querySelector(".dog");

//create a way to get the data from the dog api.

fetch( "https://dog.ceo/api/breeds/image/random")
    .then (response => response.json())
    .then(data => console.log(data));