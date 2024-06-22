function updateClock() {
    const now = new Date()

    document.querySelector(".hours").textContent = now.getHours().toString().padStart(2, "0")
    document.querySelector(".minutes").textContent = now.getMinutes().toString().padStart(2, "0")
    document.querySelector(".seconds").textContent = now.getSeconds().toString().padStart(2, "0")

}

setInterval(updateClock, 1000);