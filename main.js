let d2 = document.querySelector(".about_me");
let d2_value = "Im Habib Saeed, a dedicated Computer Science enthusiast with a passion for web development and data analytics. My journey began with a fascination for creating captivating web pages and intricate patterns, and it has evolved into a pursuit of excellence in these fields.";
let n2 = 0;

let s3 = setInterval(() => {
    d2.innerHTML += d2_value[n2];
    n2 += 1;
    if (n2 >= d2_value.length) {
        clearInterval(s3);
    }
}, 35);

let observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
        console.log(e);
        if (e.isIntersecting) {
            e.target.classList.add('show');
        }
        else if (!e.isIntersecting && window.innerWidth > 580) {
            e.target.classList.remove('show');
        }
    })
})


let hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

