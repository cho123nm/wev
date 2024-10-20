function showMessage() {
    document.getElementById("message").textContent = "Chúc bạn luôn xinh đẹp và thành công!";
}
document.getElementById("surprise-btn").addEventListener("click", function() {
    const flower = document.getElementById("flower");
    const texts = document.querySelectorAll('.falling-text');

    // Hiện bông hoa
    flower.classList.remove("hidden");
    flower.style.opacity = 1;

    // Áp dụng hiệu ứng rơi cho các chữ
    texts.forEach(text => {
        text.style.transform = "translateY(100vh)"; // Rơi xuống dưới màn hình
    });
});
document.getElementById("surprise-btn").addEventListener("click", function() {
    const flower = document.getElementById("flower");
    const texts = document.querySelectorAll('.falling-text');
    const animals = document.querySelectorAll('.animal');

    // Hiện bông hoa
    flower.classList.remove("hidden");
    flower.style.opacity = 1;

    // Áp dụng hiệu ứng rơi cho các chữ
    texts.forEach(text => {
        text.style.transform = "translateY(100vh)"; // Rơi xuống dưới màn hình
    });

    // Cho động vật chạy xung quanh
    animals.forEach(animal => {
        const randomX = Math.random() * window.innerWidth; // Tọa độ X ngẫu nhiên
        const randomY = Math.random() * window.innerHeight; // Tọa độ Y ngẫu nhiên
        animal.style.transform = `translate(${randomX}px, ${randomY}px)`; // Di chuyển động vật đến vị trí ngẫu nhiên
    });
});
