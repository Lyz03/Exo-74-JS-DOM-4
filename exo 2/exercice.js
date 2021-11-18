let catPic = document.getElementById("cat-pic");

let onCatClick = function(e) {
    let stashePic = document.getElementById("mustache-pic");
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    console.log(mouseX);
    stashePic.style.top = mouseY.toString()+ 'px';
    stashePic.style.left = (mouseX - 40).toString()+ 'px';
};

catPic.addEventListener("click", onCatClick);








