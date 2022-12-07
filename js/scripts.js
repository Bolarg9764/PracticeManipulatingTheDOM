/*
================ VARIABLE DECLARATION =============
const title = document.querySelector('h1');
const paragraph = document.querySelector('.desc');
const listItems = document.querySelector('ul');



// 1: Set the text of the <h1> element
title.textContent = "Working with the DOM";

// 2: Set the color of the <h1> to a different color
title.style.color = 'rgba(245, 40, 145, 0.8)';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

paragraph.append('Some Text');


// 4: Set the class of the <ul> to 'list'
const ThisNewName = listItems.className = 'list';

// 5: Create a new list item and add it to the <ul>
//const thisNewItem = document.createElement('<li></li>');
const item = document.createElement('li');
item.innerHTML = "<input> Eat ice cream";
listItems.appendChild(item);

//listItems.insertAdjacentHTML('afterbegin', <input> Eat ice cream);


// 6: Change all <input> elements from text fields to checkboxes
const myInput = document.getElementsByTagName('input');
for(let i = 0; i < myInput.length; i++){
  myInput[i].type = 'checkbox'; 
}

 

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const Deletebutton = document.createElement('button');
//button.className = 'remove';
Deletebutton.textContent = 'Delete';
const extra = document.querySelector('.extra');
extra.appendChild(Deletebutton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const container = document.querySelector('.container');
Deletebutton.addEventListener('click', ()=> {
                       container.removeChild(extra);
                        })

*/

// 1: Set the text of the <h1> element 

const h1 = document.querySelector('h1');
h1.textContent = "Working with the DOM";


// 2: Set the color of the <h1> to a different color
h1.style.color = "orchid";


// 3: Set the content of the '.desc' paragraph 
//The content should include at least one HTML tag 

/*==========THE PROBLEM==============*/
//SHOULD BE CONST WHEN DECLARING VARIABLES AND NOT CONT

/* cont desc = document.querySelector('.desc');
desc.innerHTML = "Having fun in the <strong>HOOD</strong>";
*/

/*==========THE SOLUTION==============*/
const desc = document.querySelector('.desc');
desc.innerHTML = "Having fun in the <strong>HOOD</strong>";


// 4: Set the class of the <ul> to 'list' 
const list = document.querySelector('ul'); 
list.className = "list";

// 5: Create a new list item and add it to the <ul> 
const item = document.createElement('li'); 
item.innerHTML = "<input> Walk my fish"; list.appendChild(item);

// 6: Change all <input> elements from text fields to checkboxes 
const input = document.getElementsByTagName('input'); 
for (let i = 0; i < input.length ; i++)
{ input[i].type = 'checkbox'; };


// 7: Create a <button> element, and set its text to 'Delete' // Add the <button> inside the '.extra' <div> 


/*=======THE PROBLEM=======*/
//REMOVE THE QUOTES ON 4TH LINE INSIDE THE PARENTHESIS

/*const deleteButton = document.createElement('button'); 
deleteButton.textContent = "DeLeTe";
const extra = document.querySelector('.extra'); 
extra.appendChild('deleteButton');*/

/*==========THE SOLUTION===========*/
const deleteButton = document.createElement('button'); 
deleteButton.textContent = "DeLeTe";
const extra = document.querySelector('.extra'); 
extra.appendChild(deleteButton);



// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button 
const container = document.querySelector('.container'); 
deleteButton.addEventListener('click', () => { container.removeChild(extra); });

