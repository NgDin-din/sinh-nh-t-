const nutQua = document.getElementById('btn-qua');
const khuVucAnh = document.getElementById('khu-vuc-anh');
const albumAnh = document.getElementById('album-anh');
const nhacNen = document.getElementById('nhac-nen');
const icons = ['🌸', '💖', '⭐', '🎈', '🍬', '🌈', '🧸', '✨'];

// --- 1. XỬ LÝ KHI BẤM NÚT ---
nutQua.addEventListener('click', () => {
    // Phát nhạc (File 0210.mp3 trong HTML của Mei)
    nhacNen.play().catch(e => console.log("Nhạc chờ bạn tương tác để phát"));

    // Hiện tranh vẽ tay và khu vực chứa 4 ảnh
    khuVucAnh.style.display = 'block';
    albumAnh.style.display = 'block';
    
    // Đổi chữ trên nút
    nutQua.innerText = "Cuộn xuống xem tiếp nè! 👇";

    // Bắn pháo hoa
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff85a2', '#ffb6c1', '#ff4757']
    });

    // Tạo các sticker bay lơ lửng xung quanh
    for (let i = 0; i < 25; i++) {
        taoSticker();
    }
});

// --- 2. HÀM TẠO STICKER (Né khung ảnh để không che mặt) ---
function taoSticker() {
    const sticker = document.createElement('div');
    sticker.className = 'sticker';
    sticker.innerText = icons[Math.floor(Math.random() * icons.length)];

    const container = document.querySelector('.sinh-nhat-container');
    const rect = container.getBoundingClientRect();

    let x, y;
    let isInside = true;

    while (isInside) {
        x = Math.random() * (window.innerWidth - 50);
        y = Math.random() * (window.innerHeight - 50);

        // Kiểm tra né vùng của container chính
        if (x < rect.left - 40 || x > rect.right + 10 || y < rect.top - 40 || y > rect.bottom + 10) {
            isInside = false;
        }
    }

    sticker.style.left = x + 'px';
    sticker.style.top = y + 'px';
    sticker.style.opacity = '0';

    document.body.appendChild(sticker);

    setTimeout(() => {
        sticker.style.opacity = '0.8';
    }, 100);
}

// --- 3. XỬ LÝ HIỆU ỨNG CUỘN (SCROLL) HIỆN 4 ẢNH ---
window.addEventListener('scroll', () => {
    const cacAnh = document.querySelectorAll('.anh-bay');
    const triggerBottom = window.innerHeight / 5 * 4;

    cacAnh.forEach(anh => {
        const anhTop = anh.getBoundingClientRect().top;
        if(anhTop < triggerBottom) {
            anh.classList.add('hien-ra');
        }
    });
});
