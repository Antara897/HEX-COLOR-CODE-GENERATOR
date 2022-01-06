function hexColorChange(){
    let randomHexCode = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    let color_change = document.getElementById('color-change');
        color_change.style.backgroundColor = randomHexCode;
    let hex_code = document.getElementById('hex-code');
        hex_code.innerText = randomHexCode;
}