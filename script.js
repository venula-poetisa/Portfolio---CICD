const sections = document.querySelectorAll(
"#about, #edu, #exp, #skills, #projects"
);

sections.forEach(section => {
section.classList.add("hidden");
});

window.addEventListener("scroll", () => {

sections.forEach(section => {

    const sectionTop =
        section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){
        section.classList.add("show");
    }

});

});

const themeButton = document.createElement("button");

themeButton.id = "themeBtn";
themeButton.innerHTML = "🌙";

document.body.appendChild(themeButton);

themeButton.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
    themeButton.innerHTML = "☀️";
}
else{
    themeButton.innerHTML = "🌙";
}

});
