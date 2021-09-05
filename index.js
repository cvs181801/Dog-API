//grab elements from DOM

const dogDiv = document.querySelector(".dog");
const dogPic =  document.createElement('img');

//create a way to get the data from the dog api.

dogURL = "https://dog.ceo/api/breeds/image/random";


fetch(dogURL)
    .then (response => response.json())
    .then(data => console.log(`"${data.message}"`));

    //dogPic.src = `"${data.message}"`
    //dogPic.src = "https://images.dog.ceo/breeds/malamute/n02110063_650.jpg";
    dogDiv.append(dogPic);

    //file:///Users/casvalkyriespicer/Documents/GitHub/Dog-API/%22   https://images.dog.ceo/breeds/setter-english/n02100735_861.jpg %22