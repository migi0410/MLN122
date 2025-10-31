// Chờ cho đến khi toàn bộ trang được tải xong
document.addEventListener('DOMContentLoaded', () => {

    // Lấy tất cả các nút bấm
    const toggles = document.querySelectorAll('.toc-toggle'); // Nút cha (để mở rộng)
    const leaves = document.querySelectorAll('.toc-leaf'); // Nút lá (để hiển thị nội dung)
    
    // Lấy các khối nội dung
    const contentPanels = document.querySelectorAll('.content-panel'); // Các thẻ định nghĩa
    const contentPlaceholder = document.getElementById('content-placeholder'); // Thẻ chào mừng

    // 1. Xử lý việc BẤM VÀO NÚT CHA (để mở rộng)
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Lấy danh sách con (là thẻ <ul> ngay sau nút bấm)
            const childrenList = toggle.nextElementSibling;
            // Lấy icon mũi tên bên trong nút bấm
            const icon = toggle.querySelector('svg');

            // Ẩn/hiện danh sách con
            childrenList.classList.toggle('hidden');
            
            // Xoay icon mũi tên
            icon.classList.toggle('rotate-90');
        });
    });

    // 2. Xử lý việc BẤM VÀO NÚT LÁ (để hiển thị nội dung)
    leaves.forEach(leaf => {
        leaf.addEventListener('click', (e) => {
            const currentLeaf = e.currentTarget;
            
            // Lấy ID của nội dung cần hiển thị (từ data-target="...")
            const targetId = currentLeaf.dataset.target;
            const targetPanel = document.getElementById(targetId);

            // Ẩn thẻ chào mừng
            if (contentPlaceholder) {
                contentPlaceholder.classList.add('hidden');
            }

            // Ẩn TẤT CẢ các thẻ định nghĩa khác
            contentPanels.forEach(panel => {
                panel.classList.add('hidden');
            });
            
            // Bỏ "active" (màu nền) khỏi TẤT CẢ các nút lá khác
            leaves.forEach(l => {
                l.classList.remove('bg-accent-yellow', 'text-dark-green', 'font-bold');
            });
            
            // Hiển thị thẻ định nghĩa được chọn
            if (targetPanel) {
                targetPanel.classList.remove('hidden');
            }
            
            // Đánh dấu "active" cho nút lá vừa bấm
            currentLeaf.classList.add('bg-accent-yellow', 'text-dark-green', 'font-bold');
        });
    });
});