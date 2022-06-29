var intro = document.querySelector('.intro');
var ocean = document.querySelector('.ocean');
var text = "Edenul Acvatic";

//TITLE ANIMATION

window.addEventListener("DOMContentLoaded", ()=>{ 

    var title = document.getElementById("title");

    for(var i = 0; i < text.length; i++){            //creates a span for each letter
        var span = document.createElement("span");
        var letter = document.createTextNode(text[i]);

        if(text[i] == " ")
            letter = document.createTextNode("\u00a0");

        span.classList.add("title");

        span.appendChild(letter);
        title.appendChild(span);
    }

    var titleletters = document.querySelectorAll('.title');  //selects all elements with the class title

    titleletters.forEach( (letter, index) => {  //changes the style of each letter after a time given
        setTimeout(() => {
            letter.style.transition = "1.2s";
            letter.style.top = "20vh";
            letter.style.opacity = "1";
            letter.style.transform = "rotateZ(0)";
        }, (index + 1) * 50 )
        
    })
});

//INTRO SLIDING

window.addEventListener("click", ()=>{  
    setTimeout(() => {
        intro.style.top = '-100vh';
        ocean.style.top = '0';
    }, 100);

})

//SLIDE

var slideIdx = 0;
slideShow(slideIdx , -1);

function slideShow(n , direction){
    var slides = document.querySelectorAll(".slide");
    console.log(slides);
    if(n > slides.length - 1){
        slideIdx = 0;
    }
    else {
            if(n < 0)
                slideIdx = slides.length - 1;
            else slideIdx = n;
    }
    slides.forEach( (s) => {
        s.style.animation = "fade .5s 1";
        setTimeout(() => {
            s.style.display = "none";
        }, 500)   
    })
    if(direction < 0){
        setTimeout(() => {
             slides[slideIdx].style.animation = "leftslide .7s ease-in-out 1";
               slides[slideIdx].style.display= "block";
        }, 500)  
    }
    if(direction > 0){
        setTimeout(() => {
            slides[slideIdx].style.display= "block";
                slides[slideIdx].style.animation = "rightslide .7s ease-in-out 1";
        }, 500) 
    }

}

function plusSlides(n , direction) {
    slideShow(slideIdx += n , direction);
}

 //SEARCH BAR

const names = ["Racul violonist", "Lamantin", "Caracatita", "Balena", "Delfin", "Otaria", "Rechin", "Pestele spada", "Pestele torpila", "Pestele scorpion", "Calut de mare", "Pagurul marin", "Pestele clovn", "Steaua de mare", "Calamar", "Piranha", "Elefantul de mare"]
const searchBox = document.querySelector(".searchContainer");
const inputContent = searchBox.querySelector("input");
const suggestions = searchBox.querySelector(".list");

searchBox.addEventListener('keyup', (c) => {
    var searchString = c.target.value.toLowerCase();
    if(searchString.length){
        var emptyarr = names.filter((data) =>{
        return data.toLocaleLowerCase().includes(searchString);
    });

    emptyarr = emptyarr.map((data) =>{
        return data  = '<li onclick="select(this)">' + data + '</li>';
    }); 
    
    searchBox.classList.add("active");
    showSuggestions(emptyarr);

    var list = suggestions.querySelectorAll("li");
    console.log(list);
    }
    else{
        searchBox.classList.remove("active");
    }
}); 

function showSuggestions(list){
    list = list.join('');
    suggestions.innerHTML = list;
}

function select(string){
    string = string.textContent
    let index = names.indexOf(string);
    console.log(index);
    slideShow(index, -1);
    
    inputContent.value = string;
    searchBox.classList.remove("active");
}