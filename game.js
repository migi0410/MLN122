// Chờ trang tải xong
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ĐỊNH NGHĨA SẢN PHẨM (ĐÃ SỬA TÊN SẢN PHẨM) ---
    const allProducts = [
        // Mục tiêu (5)
        { id: 1, name: 'Thịt ba rọi CP (1kg)', price: 180000, task: '1', isTrap: false, img: 'assets/baroi.jpg', desc: 'Thịt tươi CP, an toàn cho bữa tối.' }, // Task 1
        { id: 2, name: 'Rau muống VietGAP (1 mớ)', price: 15000, task: '2', isTrap: false, img: 'assets/raumuong.jpg', desc: 'Rau sạch chuẩn VietGAP.' }, // Task 2
        { id: 4, name: 'Sách "Nhà Giả Kim"', price: 80000, task: '3', isTrap: false, img: 'assets/nhagiakim.jpg ', desc: 'Một cuốn sách hay làm quà tặng.' }, // Task 3
        { id: 11, name: 'Kem Hộp Merino (Vani)', price: 75000, task: '4', isTrap: false, img: 'assets/kem.jpg', desc: '1 hộp. Ăn vặt buổi chiều.' }, // Task 4
        
        // Mục tiêu thay thế (4)
        { id: 15, name: 'Ức gà C.P (1kg)', price: 70000, task: '1', isTrap: false, img: 'assets/ucga.jpg', desc: 'Lựa chọn tiết kiệm cho bữa tối.' }, // Task 1
        { id: 14, name: 'Bông cải xanh Đà Lạt', price: 25000, task: '2', isTrap: false, img: 'assets/bongcai.jpg', desc: '1 cái. Một lựa chọn rau củ lành mạnh khác.' }, // Task 2
        { id: 12, name: 'Sách "Tư duy" (Bản Bìa Da)', price: 300000, task: '3', isTrap: true, trapType: 'anchor', img: 'assets/sachmax.jpg', 
          desc: '🎁 (Bản đặc biệt) Bìa da, mạ vàng. Món quà cực kỳ sang trọng.' }, // Task 3 (Bẫy Mỏ neo)
        { id: 8, name: 'Gấu Bông Teddy (Độc quyền)', price: 250000, task: '3', isTrap: true, trapType: 'anchor', img: 'assets/teddy.jpg', 
          desc: '❤️ Quà tặng độc quyền, siêu dễ thương. (So sánh với Sách 80k)' }, // Task 3 (Bẫy Mỏ neo)

        // Bẫy (6)
        { id: 5, name: 'Snack O\'Star (Mua 1 Tặng 1)', price: 30000, task: 'none', isTrap: true, trapType: 'bogo', img: 'assets/ad-banner.png', 
          desc: '✨ ƯU ĐÃI ĐẶC BIỆT: MUA 1 TẶNG 1! (Chọn 2 chỉ tính tiền 1)' },
        { id: 6, name: 'Coca-Cola (Flash Sale)', price: 10000, task: 'none', isTrap: true, trapType: 'fomo', img: 'assets/coca.jpg', 
          desc: '🔥 "FLASH SALE 50% - Chỉ còn 10 phút!" Giá hời không thể bỏ lỡ.' },
        { id: 9, name: 'Tai nghe X-Sound (Ad)', price: 150000, task: 'none', isTrap: true, trapType: 'popup', img: 'assets/tainghe.jpg', 
          desc: 'Giảm giá 70% từ 500.000 VNĐ. Mua ngay!' },
        { id: 13, name: 'Gạo ST25 (Bao 20kg)', price: 400000, task: 'none', isTrap: true, trapType: 'bulk', img: 'assets/st25.png', 
          desc: '🛒 "Mua nhiều tiết kiệm nhiều!" Gói lớn giá hời, nhưng bạn có cần nhiều thế không?' },
        { id: 16, name: 'Sữa tắm Enchanteur (Mua 1 Tặng 1)', price: 120000, task: 'none', isTrap: true, trapType: 'bogo', img: 'assets/suatam.jpg', 
          desc: '✨ MUA 1 TẶNG 1! Hương thơm quyến rũ. (Chọn 2 chỉ tính tiền 1)' },
        { id: 7, name: 'Socola Marou (Hảo hạng)', price: 120000, task: 'none', isTrap: true, trapType: 'social', img: 'assets/socola.jpg',
          desc: '⭐ "Sản phẩm được đánh giá 5 sao!" Tự thưởng cho bản thân một chút.' },

        // Gây nhiễu (5)
        { id: 10, name: 'Phô mai Con Bò Cười', price: 95000, task: 'none', isTrap: false, img: 'assets/phomai.jpg', desc: 'Thơm ngon, béo ngậy. Tuyệt vời cho bữa sáng.' },
        { id: 17, name: 'Trứng gà Ba Huân (Vỉ 10)', price: 35000, task: 'none', isTrap: false, img: 'assets/trungga.jpg', desc: 'Luôn cần thiết cho mọi gia đình.' },
        { id: 18, name: 'Bánh mì Sandwich Otto', price: 22000, task: 'none', isTrap: false, img: 'assets/otto.jpg', desc: 'Nhanh gọn cho bữa sáng bận rộn.' },
        { id: 19, name: 'Cà phê Trung Nguyên (Rang xay)', price: 110000, task: 'none', isTrap: false, img: 'assets/caphe.jpg', desc: 'Bắt đầu ngày mới tỉnh táo.' },
        { id: 20, name: 'Trà Lipton (Hộp 50 túi)', price: 45000, task: 'none', isTrap: false, img: 'assets/lipton.jpg', desc: 'Thư giãn buổi chiều.' }
    ];
    
    // Thêm cá hồi vào lại (tôi đã vô tình xóa ở bản trước)
    allProducts.push(
        { id: 21, name: 'Cá hồi Na-uy (500g)', price: 200000, task: '1', isTrap: false, img: 'assets/cahoi.jpg', desc: 'Giàu Omega-3, tốt cho sức khỏe.' } // Task 1
    );


    // --- 2. BIẾN TRẠNG THÁI GAME ---
    let budget = 500000;
    let cart = [];
    let tasksCompleted = { '1': false, '2': false, '3': false, '4': false };
    let adShown = false; 

    // --- 3. LẤY CÁC PHẦN TỬ HTML ---
    const budgetDisplay = document.getElementById('budget-display');
    const taskListItems = {
        '1': document.getElementById('task-1-popup'),
        '2': document.getElementById('task-2-popup'),
        '3': document.getElementById('task-3-popup'),
        '4': document.getElementById('task-4-popup')
    };
    const cartItemsContainer = document.getElementById('cart-items');
    const cartPlaceholder = document.getElementById('cart-placeholder');
    const productGrid = document.getElementById('product-grid');
    const finishBtn = document.getElementById('finish-btn');
    
    // Pop-ups
    const gameModal = document.getElementById('game-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const adModal = document.getElementById('ad-modal');
    const adOverlay = document.getElementById('ad-overlay');
    const adCloseBtn = document.getElementById('ad-close-btn');
    const adBuyBtn = document.getElementById('ad-buy-btn');
    const introModal = document.getElementById('intro-modal');
    const introOverlay = document.getElementById('intro-overlay');
    const introCloseBtnX = document.getElementById('intro-close-btn-x');
    const introStartBtn = document.getElementById('intro-start-btn');
    const tasksModal = document.getElementById('tasks-modal');
    const tasksOverlay = document.getElementById('tasks-overlay');
    const tasksCloseBtnX = document.getElementById('tasks-close-btn-x');
    const showTasksBtn = document.getElementById('show-tasks-btn');
    const bannerAdLink = document.getElementById('banner-ad-link');

    // --- 4. CÁC HÀM CỦA GAME ---

    // Hàm khởi tạo game (Không thay đổi)
    function initGame() {
        productGrid.innerHTML = '';
        const storeProducts = allProducts.filter(p => p.trapType !== 'popup');
        const shuffledProducts = [...storeProducts].sort(() => 0.5 - Math.random());
        
        shuffledProducts.forEach(product => {
            let borderColor = 'border-gray-200';
            let buttonColor = 'bg-dark-green hover:bg-gray-700';
            let adTag = '';

            if (product.trapType === 'bogo') {
                adTag = '<div class="product-tag">MUA 1 TẶNG 1</div>';
            } else if (product.trapType === 'fomo') {
                adTag = '<div class="product-tag product-tag-fomo">SALE 50%</div>';
            } else if (product.isTrap) {
                 buttonColor = 'bg-red-600 hover:bg-red-700 animate-pulse';
            }
            
            const productHTML = `
                <div class="product-card-wrapper" data-product-id="${product.id}">
                    <div class="bg-white rounded-lg shadow-md overflow-hidden border-2 ${borderColor} flex flex-col h-full relative">
                        ${adTag}
                        <img src="${product.img}" alt="${product.name}" class="w-full h-48 object-cover">
                        <div class="p-4 flex flex-col flex-grow">
                            <h4 class="text-xl font-bold text-dark-green">${product.name}</h4>
                            <p class="text-gray-600 text-sm my-2 flex-grow">${product.desc}</p>
                            <p class="text-2xl font-bold text-dark-green mb-3">${product.price.toLocaleString('vi-VN')} VNĐ</p>
                            <button class="buy-btn w-full ${buttonColor} text-white font-bold py-2 px-4 rounded-md transition-colors mt-auto" data-id="${product.id}">
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                </div>
            `;
            productGrid.innerHTML += productHTML;
        });

        document.querySelectorAll('.buy-btn').forEach(button => {
            button.addEventListener('click', () => {
                buyProduct(parseInt(button.dataset.id));
            });
        });
    }

    // Hàm mua sản phẩm (Không thay đổi)
    function buyProduct(productId) {
        const product = allProducts.find(p => p.id === productId);
        if (!product) return; 

        let priceToCharge = product.price;
        let productToAdd = { ...product }; 

        if (product.trapType === 'bogo') {
            if (budget < priceToCharge) {
                alert("Không đủ tiền cho khuyến mãi này!");
                return;
            }
            budget -= priceToCharge;
            cart.push(productToAdd);

            let freeProduct = { ...product };
            freeProduct.price = 0;
            freeProduct.name = product.name + " (Tặng)";
            cart.push(freeProduct);
            
        } else {
            if (budget < priceToCharge) {
                alert("Không đủ tiền!");
                return;
            }
            budget -= priceToCharge;
            cart.push(productToAdd);
        }
        
        if (product.task !== 'none') {
            tasksCompleted[product.task] = true;
        }

        if (product.task === '3' && !adShown) {
            setTimeout(showAdPopup, 1000); 
            adShown = true;
        }
        
        updateUI();
    }

    // Hàm cập nhật Giao diện (Không thay đổi)
    function updateUI() {
        budgetDisplay.innerHTML = `${budget.toLocaleString('vi-VN')} <span class="text-2xl">VNĐ</span>`;
        for (const [taskId, completed] of Object.entries(tasksCompleted)) {
            if (taskListItems[taskId] && completed) { 
                taskListItems[taskId].classList.add('line-through', 'text-green-600', 'font-semibold');
            }
        }
        
        if (cart.length === 0) {
            cartPlaceholder.classList.remove('hidden');
            cartItemsContainer.innerHTML = '';
        } else {
            cartPlaceholder.classList.add('hidden');
            cartItemsContainer.innerHTML = '';
            cart.forEach(product => {
                let priceText = product.price.toLocaleString('vi-VN');
                let nameText = product.name;
                
                if (product.price === 0) {
                    priceText = "Miễn phí";
                    nameText = `<span class="italic">${product.name}</span>`;
                }
                
                cartItemsContainer.innerHTML += `
                    <div class="flex justify-between ${product.isTrap ? 'text-red-600' : ''}">
                        <span>${nameText}</span>
                        <span class="font-medium">${priceText}</span>
                    </div>
                `;
            });
        }
    }

    // Hàm tính điểm (Không thay đổi)
    function calculateScore() {
        const moneySaved = budget;
        const tasksDone = Object.values(tasksCompleted).filter(Boolean).length;
        const trapsHit = cart.filter(p => p.isTrap).length;

        document.getElementById('score-money').textContent = `${moneySaved.toLocaleString('vi-VN')} VNĐ`;
        document.getElementById('score-tasks').textContent = `${tasksDone} / 4`;
        document.getElementById('score-traps').textContent = `${trapsHit}`;
        
        let finalText = '';
        if (trapsHit === 0 && tasksDone === 4) {
            finalText = 'Tuyệt vời! Bạn là người tiêu dùng thông thái!';
        } else if (trapsHit > (tasksDone / 2)) {
            finalText = 'Bạn đã bị thị trường dẫn dắt khá nhiều!';
        } else {
            finalText = 'Bạn đã làm khá tốt, hãy cẩn thận hơn với các bẫy nhé!';
        }
        document.getElementById('final-score-text').textContent = finalText;

        gameModal.classList.remove('hidden');
        gameModal.classList.add('flex');
    }

    // Hàm reset game (Không thay đổi)
    function resetGame() {
        budget = 500000;
        cart = [];
        tasksCompleted = { '1': false, '2': false, '3': false, '4': false };
        adShown = false;
        
        budgetDisplay.innerHTML = `500.000 <span class="text-2xl">VNĐ</span>`;
        cartPlaceholder.classList.remove('hidden');
        cartItemsContainer.innerHTML = '';
        
        for (const [taskId] of Object.entries(tasksCompleted)) {
            if (taskListItems[taskId]) {
                taskListItems[taskId].classList.remove('line-through', 'text-green-600', 'font-semibold');
            }
        }
        gameModal.classList.add('hidden');
        gameModal.classList.remove('flex');
        
        showIntroPopup();
    }

    // --- CÁC HÀM POP-UP (Không thay đổi) ---
    function showIntroPopup() {
        introModal.classList.remove('hidden');
        introModal.classList.add('flex');
    }
    function hideIntroPopup() {
        introModal.classList.add('hidden');
        introModal.classList.remove('flex');
        initGame(); // Bắt đầu game sau khi đóng intro
    }
    function showTasksPopup() {
        tasksModal.classList.remove('hidden');
        tasksModal.classList.add('flex');
    }
    function hideTasksPopup() {
        tasksModal.classList.add('hidden');
        tasksModal.classList.remove('flex');
    }
    function showAdPopup() {
        adModal.classList.remove('hidden');
        adModal.classList.add('flex');
    }
    function hideAdPopup() {
        adModal.classList.add('hidden');
        adModal.classList.remove('flex');
    }

    // --- 5. GẮN SỰ KIỆN & CHẠY GAME (Không thay đổi) ---
    finishBtn.addEventListener('click', calculateScore);
    modalCloseBtn.addEventListener('click', resetGame);
    modalOverlay.addEventListener('click', resetGame);

    adCloseBtn.addEventListener('click', hideAdPopup);
    adOverlay.addEventListener('click', hideAdPopup);
    adBuyBtn.addEventListener('click', () => {
        buyProduct(9); 
        hideAdPopup(); 
    });

    introStartBtn.addEventListener('click', hideIntroPopup);
    introCloseBtnX.addEventListener('click', hideIntroPopup);
    introOverlay.addEventListener('click', hideIntroPopup);

    showTasksBtn.addEventListener('click', showTasksPopup);
    tasksCloseBtnX.addEventListener('click', hideTasksPopup);
    tasksOverlay.addEventListener('click', hideTasksPopup);

    if (bannerAdLink) {
        bannerAdLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Cuộn đến sản phẩm "Snack" (ID 5)
            const trapProductCard = document.querySelector('[data-product-id="5"]');
            if (trapProductCard) {
                trapProductCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                trapProductCard.classList.add('animate-pulse');
                setTimeout(() => {
                    trapProductCard.classList.remove('animate-pulse');
                }, 3000);
            }
        });
    }

    // Bắt đầu game
    showIntroPopup();
});