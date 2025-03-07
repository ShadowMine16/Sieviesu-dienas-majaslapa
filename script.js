document.addEventListener("DOMContentLoaded", function () {
    const images = ["flower1.jpg", "flower2.jpg", "flower3.jpg"];
    let currentImageIndex = 0;
    
    document.getElementById("changeImage").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById("flowerImage").src = images[currentImageIndex];
    });

    document.getElementById("showGreeting").addEventListener("click", function () {
        document.querySelector(".message").style.opacity = "1";
    });

    document.getElementById("togglePetals").addEventListener("click", function () {
        for (let i = 0; i < 20; i++) {
            let petal = document.createElement("div");
            petal.classList.add("petal");
            petal.style.left = Math.random() * 100 + "vw";
            petal.style.animationDuration = (Math.random() * 5 + 3) + "s";
            document.body.appendChild(petal);
            setTimeout(() => petal.remove(), 8000);
        }
    });

    function updateCountdown() {
        let now = new Date();
        let nextWomensDay = new Date(now.getFullYear(), 2, 8);
        if (now > nextWomensDay) {
            nextWomensDay.setFullYear(now.getFullYear() + 1);
        }
        let diff = nextWomensDay - now;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText =
            `Līdz nākamajai Sieviešu dienai kurā varēšu tevi apsveikt: ${days} dienas, ${hours} stundas, ${minutes} minūtes, ${seconds} sekundes`;
    }

    document.getElementById("showCountdown").addEventListener("click", function () {
        document.getElementById("countdown").style.display = "block";
        updateCountdown();
        setInterval(updateCountdown, 1000);
    });
});