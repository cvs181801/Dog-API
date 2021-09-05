//grab elements from DOM

const dogDiv = document.querySelector(".dog");
const dogPic =  document.createElement('img');

//create a way to get the picture file from the dog api.

dogURL = "https://dog.ceo/api/breeds/image/random";


fetch(dogURL)
    .then (response => response.json())
    .then(data => {    
        dogPic.src = `${data.message}` //turns out I just had an extra set of quotations!
        dogDiv.append(dogPic);
    }
);

  