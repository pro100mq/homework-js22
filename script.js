const button = document.querySelector("#btn")
button.addEventListener("click", () => {
    const allImg = document.querySelectorAll("img[data-src]")
    const options = {
        root: null,
        threshold: 0.1
    };

    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, options)

    allImg.forEach(img => imgObserver.observe(img));
})

