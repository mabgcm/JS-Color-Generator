//defining the button
const button = document.querySelector('.btn-primary');

//defining the tag to display the color code
const clrCode = document.querySelector('h5');

//defining the div to display the generated color
const scr = document.querySelector('.screen');

button.addEventListener('click', () => {
    // Hex color code initial character
    let color = '#'

    // toString(16) --> to generate a hexadecimal number
    // slicing from '0.' to get a 6 digit number fpr color code
    color += Math.random().toString(16).slice(2, 8);

    // assigning the generated color to background of the target div
    scr.style.backgroundColor = color;

    // entering the color code to the assigned tag
    clrCode.innerText = `Color Hex Code: ${color.toUpperCase()}`;
});