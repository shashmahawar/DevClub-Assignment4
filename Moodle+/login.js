console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector(".loginpanel"); // Fill the selector for the login element in ""
const field = document.querySelector("#valuepkg3");
let login_text = login_element.innerText;
login_text = login_text.split(" ");

if (login_text[7] == 'first') {
    field.value = login_text[9];
} else if (login_text[7] == 'second') {
    field.value = login_text[11];
} else if (login_text[6] == 'subtract') {
    field.value = parseInt(login_text[7]) - parseInt(login_text[9]);
} else if (login_text[6] == 'add') {
    field.value = parseInt(login_text[7]) + parseInt(login_text[9]);
}