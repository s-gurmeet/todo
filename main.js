var ab = document.querySelector('.addbutton');
var input =document.querySelector('.input');
var container =document.querySelector('.container');

//  class item{
//     constructor(itemname){
//         //create the item div
//         this.creatediv(itemname);
// }

// creatediv(itemname){
//     let input =document.createElement('input');
//     input.value= itemname;
//     input.disabled=true;
//     input.classlist.add('item_input');
//     input.type="text";

//     let itembox=document.createElement('div');
//     itembox.classList.add('item');

     let editbutton =document.createElement('button');
     editbutton.innerHTML="EDIT";
     editbutton.classList.add('editbutton');

//     let removebutton =document.createElement('button');
//     removebutton.innerHTML="REMOVE";
//     removebutton.classList.add('removebutton');

//     container.apppendchild(itembox);

//     itembox.appendChild(input);
//     itembox.appendChild(editbutton);
//     itembox.appendChild(removebutton);

//     editbutton.addEventListener( 'click',   () => this.edit(input));

//     removebutton.addEventListener('click',  () => this.remove(itembox));
    
// }

// edit(input){
//     input.disabled=! input.disabled;

// }
// remove(item){
//     container.removeChild(item);

// }

// }

function check(){
    console.log('chutiya');
    if(input.value!=""){
        new item(input.value);
        input.value="";
    }
}

if(ab){
    ab.addEventListener('click',check);
}
// window.addEventListener('keydown',(e) =>{
//     if(e.which == 13){
//     check();
//     }

// }) 