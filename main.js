document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector(".imgContent3");
    const section = document.querySelector("#project"); 

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                img.classList.add("active"); 
            } else {
                img.classList.remove("active"); 
            }
        });
    }, { threshold: 0.5 }); 

    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector(".imgContent");
    const section = document.querySelector("#home"); 

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                img.classList.add("active"); 
            } else {
                img.classList.remove("active"); 
            }
        });
    }, { threshold: 0.5 }); 

    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector(".welcome");
    const section = document.querySelector("#home"); 

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                img.classList.add("active"); 
            } else {
                img.classList.remove("active"); 
            }
        });
    }, { threshold: 0.5 }); 

    observer.observe(section);
});