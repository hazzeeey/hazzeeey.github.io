var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/images-name.jpg') {
        myImage.setAttribute ('src', 'images/images-name2.jpg');
    } else {
        myImage.setAttribute ('src', 'images/images-name.jpg')
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Slava Ukraine, ' + myName;
 }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Slava Ukraine, ' +storedName;
}
myButton.onclick = function() {
    setUserName();
}