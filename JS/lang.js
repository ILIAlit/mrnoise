const select = document.querySelector('select');
select.addEventListener('change', e => {
    const lang = e.target.value;
    if (lang == "ru") {
        window.location.replace("index.html");
    } else {
        window.location.replace("index_en.html");
    }
    localStorage.setItem("lang", lang);
});

