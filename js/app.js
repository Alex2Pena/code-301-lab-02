'use strict';

//Getting data from the JSON file using AJAX
$.ajax('/page-1.json', {method: 'GET' , dataType: 'JSON'})
.then(hornObjects => {
    hornObjects.forEach(hornThing => {
        new Horn(hornThing).render();
    })
    uniqueArray();
    addDropDownMenu();
})

//Globar variables
let hornsArray = [];
let keywordsArray = [];


// if keywordsArray.includes(hornThing.keyword);
//     hornThing.keyword === false {
//     keywordsArray.push(hornThing.keyword);
// } else {
    
// }

//Constructor function
function Horn (hornThing){
    this.image_url = hornThing.image_url;
    this.title = hornThing.title;
    this.description = hornThing.description;
    this.keyword = hornThing.keyword;
    this.horns = hornThing.horns;
    hornsArray.push(this);
}

Horn.prototype.render = function(){
    const hornTemplate = $('#photo-template').html();
    const $newSection = $('<section></section>');
    const $newOption = $('<option></option>');
    $newSection.html(hornTemplate);
    $newSection.find('h2').text(this.title);
    $newSection.find('img').attr('src', this.image_url);
    $newSection.find('p').text(this.description);
    $('main').append($newSection);
    
}

const uniqueArray = () => {
    hornsArray.forEach(horn => {
        if (!keywordsArray.includes(horn.keyword)){
            keywordsArray.push(horn.keyword)
        }
    })
    
}

function addDropDownMenu(){
    const $dropdown = $('select');
    keywordsArray.forEach(keywords => {
        const $newOption = $(`<option value = '${keywords}'>${keywords}</option>`)
        $dropdown.append($newOption);
    })
}

console.log(hornsArray);
console.log(keywordsArray);

