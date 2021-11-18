let libButton = document.getElementById('lib-button');
let libIt = function() {
    let storyDiv = document.getElementById("story");
    let noun = document.getElementById('noun').value;
    let adjective = document.getElementById('adjective').value;
    let name = document.getElementById('person').value;

    storyDiv.innerHTML = "Your story here with : " +name+ " who is " +adjective+ " and love " +noun;
};
libButton.addEventListener('click', libIt);








