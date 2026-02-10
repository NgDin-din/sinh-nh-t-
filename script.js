const nutQua = document.getElementById('btn-qua');
const khuVucAnh = document.getElementById('khu-vuc-anh');
const videoQua = document.getElementById('video-qua'); // Lấy thẻ video
const icons = ['🌸', '💖', '⭐', '🎈', '🍬', '🌈', '🧸', '✨'];

nutQua.addEventListener('click', () => {
    // 1. Hiện khu vực chứa video
    khuVucAnh.style.display = 'block';

    // 2. Lệnh cho video phát tự động
    videoQua.play().catch(error => {
        console.log("Video chưa tự phát được do trình duyệt chặn, nhưng đừng lo!");
    });

    // 3. Bắn pháo hoa
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff85a2', '#ffb6c1', '#ff4757']
    });

    // 4. Đổi chữ trên nút
    nutQua.innerText = "Yêu bạn nhiều! ❤️";

    // 5. Tạo sticker né khung video
    for (let i = 0; i < 25; i++) {
        taoSticker();
    }
});

// Hàm taoSticker giữ nguyên như bản cũ Mei nhé...

function taoSticker() {
    const sticker = document.createElement('div');
    sticker.className = 'sticker';
    sticker.innerText = icons[Math.floor(Math.random() * icons.length)];

    // Lấy vị trí cái khung trắng
    const container = document.querySelector('.sinh-nhat-container');
    const rect = container.getBoundingClientRect();

    let x, y;
    let isInside = true;

    // Vòng lặp này để tìm vị trí cho đến khi nào tìm được chỗ nằm NGOÀI cái khung
    while (isInside) {
        x = Math.random() * (window.innerWidth - 50);
        y = Math.random() * (window.innerHeight - 50);

        // Nếu x, y nằm ngoài phạm vi của khung trắng thì mới dừng lại
        if (x < rect.left - 40 || x > rect.right + 10 || y < rect.top - 40 || y > rect.bottom + 10) {
            isInside = false;
        }
    }

    // Đặt vị trí ban đầu
    sticker.style.left = x + 'px';
    sticker.style.top = y + 'px';
    sticker.style.opacity = '0'; // Lúc đầu ẩn đi

    document.body.appendChild(sticker);

    // Hiệu ứng hiện ra từ từ
    setTimeout(() => {
        sticker.style.opacity = '0.8';
    }, 100);
}
