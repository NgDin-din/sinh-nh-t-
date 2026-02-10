const nutQua = document.getElementById('btn-qua');
const khuVucAnh = document.getElementById('khu-vuc-anh');
const albumAnh = document.getElementById('album-anh');
const nhacNen = document.getElementById('nhac-nen');
const icons = ['🌸', '💖', '⭐', '🎈', '🍬', '🌈', '🧸', '✨'];

// --- 1. XỬ LÝ KHI BẤM NÚT ---
nutQua.addEventListener('click', () => {
    nhacNen.play().catch(e => console.log("Nhạc chờ tương tác"));

    khuVucAnh.style.display = 'block';
    albumAnh.style.display = 'block';
    
    nutQua.innerText = "Cuộn xuống xem tiếp nè! 👇";

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff85a2', '#ffb6c1', '#ff4757']
    });

    for (let i = 0; i < 25; i++) {
        taoSticker();
    }
});

// --- 2. HÀM TẠO STICKER ---
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

// --- 3. HIỆU ỨNG CUỘN (SCROLL) TỔNG HỢP ---
window.addEventListener('scroll', () => {
    // Phần 1: Cho 4 ảnh bay vào
    const cacAnh = document.querySelectorAll('.anh-bay');
    const triggerBottom = window.innerHeight / 5 * 4;

    cacAnh.forEach(anh => {
        const anhTop = anh.getBoundingClientRect().top;
        if(anhTop < triggerBottom) {
            anh.classList.add('hien-ra');
        }
    });

    // Phần 2: Cho lời chúc cuối hiện mờ ra (Đoạn Mei vừa hỏi đây nè!)
    const loiChuc = document.querySelector('.loi-chuc-cuoi');
    if (loiChuc) {
        const loiChucTop = loiChuc.getBoundingClientRect().top;
        if (loiChucTop < triggerBottom) {
            loiChuc.classList.add('hien-loi-chuc');
        }
    }
});
