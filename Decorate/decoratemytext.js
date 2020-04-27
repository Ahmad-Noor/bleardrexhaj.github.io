window.onload = function () {
	alert("Hello, world!");

    const btnClick = function () {
        var size = 0;
        var textbox = document.getElementById('textarea');
        if (textbox.style.fontSize == '') {
            size = 12;
        } else {
            size = parseInt(textbox.style.fontSize);
        }
        textbox.style.fontSize = size + 2 + 'px';
    };

    var btn = document.getElementById('button');
    btn.onclick = btnClick;

    var checkbox = document.getElementById('checkbox');
    checkbox.onchange = function () {
        var textbox = document.getElementById('textarea');
        if (checkbox.checked) {
            textbox.style.fontWeight = 'bold';
            textbox.style.color = 'green';
            textbox.style.textDecoration = 'underline';
            document.body.style.backgroundImage = 'url("https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg")';
        } else {
            textbox.style.fontWeight = 'normal';
            textbox.style.color = '';
            textbox.style.textDecoration = '';
            document.body.style.backgroundImage = '';
        }
    };
     setInterval (btnClick, 500);
}