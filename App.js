const menu = document.querySelector("#mobile-menu");

const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


function myFunc(){
    var src = document.getElementById('search').value;

    if( src == '' ){
        alert('Please enter a value to search.!');
    }

    else{
    alert(src + ' is curently unavailable');
    }
}

// Buying function 

function buy(){
    alert("Thank you for placing your order. Please connect with us by sending us a message at the end of this page as we process your order.")
}


// The message function

function message(){
    var name = document.getElementById('name').value;
    alert( name + " Thank you for connecting with us." )
}