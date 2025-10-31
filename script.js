// Chờ cho đến khi toàn bộ trang được tải xong
document.addEventListener('DOMContentLoaded', () => {

    // ===============================================
    // === PHẦN 1: LOGIC LIVE POLL (TRÊN HERO) ===
    // ===============================================
    
    // Lấy các phần tử của Poll
    const pollOptions = document.getElementById('poll-options');
    const pollResults = document.getElementById('poll-results');
    const voteYouCard = document.getElementById('vote-you');
    const voteMarketCard = document.getElementById('vote-market');
    const barYou = document.getElementById('bar-you');
    const barMarket = document.getElementById('bar-market');

    // Hàm hiển thị kết quả Poll
    function showPollResults() {
        // Thêm kiểm tra 'if' để đảm bảo các phần tử tồn tại
        if (pollOptions && pollResults) { 
            pollOptions.classList.add('hidden');
            pollResults.classList.remove('hidden');
            
            setTimeout(function() {
                if (barYou) barYou.style.width = '35%';
                if (barMarket) barMarket.style.width = '65%';
            }, 0);
        }
    }

    // Gắn sự kiện click - cũng kiểm tra trước
    if (voteYouCard) voteYouCard.addEventListener('click', showPollResults);
    if (voteMarketCard) voteMarketCard.addEventListener('click', showPollResults);


    // ===============================================
    // === PHẦN 2: LOGIC TRÒ CHƠI (GHÉP & THẢ) ===
    // ===============================================

    // --- 2.1: QUẢN LÝ POP-UP ---
    
    // Pop-up Lỗi
    const errorModal = document.getElementById('error-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalOverlay = document.getElementById('modal-overlay');

    function showPopup(message) {
        if (modalMessage) modalMessage.textContent = message;
        if (errorModal) {
            errorModal.classList.remove('hidden');
            errorModal.classList.add('flex');
        }
    }
    function hidePopup() {
        if (errorModal) {
            errorModal.classList.add('hidden');
            errorModal.classList.remove('flex');
        }
    }
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', hidePopup);
    if (modalOverlay) modalOverlay.addEventListener('click', hidePopup);

    // Pop-up Hoàn thành
    const completionModal = document.getElementById('completion-modal');
    const completionCloseBtn = document.getElementById('completion-close-btn');
    const completionLearnMoreBtn = document.getElementById('completion-learn-more-btn');
    const completionOverlay = document.getElementById('completion-overlay');

    function showCompletionPopup() {
        if (completionModal) {
            completionModal.classList.remove('hidden');
            completionModal.classList.add('flex');
        }
    }
    function hideCompletionPopup() {
        if (completionModal) {
            completionModal.classList.add('hidden');
            completionModal.classList.remove('flex');
        }
    }
    if (completionCloseBtn) completionCloseBtn.addEventListener('click', hideCompletionPopup);
    if (completionOverlay) completionOverlay.addEventListener('click', hideCompletionPopup);
    if (completionLearnMoreBtn) {
        completionLearnMoreBtn.addEventListener('click', () => {
            window.location.href = 'theory.html'; // Chuyển sang trang Lý thuyết
        });
    }

    // --- 2.2: GIAI ĐOẠN 1: LOGIC GHÉP THẺ ---
    const terms = document.querySelectorAll('.term');
    const definitions = document.querySelectorAll('.def');
    let selectedCard = null;

    terms.forEach(term => {
        term.addEventListener('click', () => {
            if (selectedCard) {
                selectedCard.classList.remove('border-accent-yellow', 'scale-105', 'shadow-xl');
            }
            selectedCard = term;
            selectedCard.classList.add('border-accent-yellow', 'scale-105', 'shadow-xl');
        });
    });

    definitions.forEach(def => {
        def.addEventListener('click', () => {
            if (!selectedCard) {
                showPopup("Vui lòng chọn một thẻ Tên (cột trái) trước!");
                return;
            }
            const correctDefId = selectedCard.dataset.match;
            if (def.id === correctDefId) {
                handleCorrectMatch(selectedCard, def);
            } else {
                showPopup("Sai rồi! Hãy thử lại.");
                selectedCard.classList.remove('border-accent-yellow', 'scale-105', 'shadow-xl');
                selectedCard = null;
            }
        });
    });

    function handleCorrectMatch(termCard, defCard) {
        termCard.classList.add('hidden');
        defCard.classList.add('hidden');
        const mergedCardId = 'merged-' + termCard.id.split('-')[1];
        const mergedCard = document.getElementById(mergedCardId);
        if (mergedCard) {
            mergedCard.classList.remove('hidden');
        }
        selectedCard = null;
    }

    // --- 2.3: GIAI ĐOẠN 2: LOGIC KÉO VÀ THẢ ---
    
    // Bộ đếm 8 thẻ (4 cho mỗi phe)
    const pheTotals = { 1: 4, 2: 4 }; 
    let pheCounters = { 1: 0, 2: 0 };
    
    const mainDef1Elem = document.getElementById('main-def-1');
    const mainDef2Elem = document.getElementById('main-def-2');
    // Lấy text an toàn, phòng trường hợp element không tồn tại
    const mainDef1 = mainDef1Elem ? mainDef1Elem.textContent.trim() : "Đã hoàn thành Phe 1!";
    const mainDef2 = mainDef2Elem ? mainDef2Elem.textContent.trim() : "Đã hoàn thành Phe 2!";
    
    const descPhe1 = document.getElementById('desc-phe1');
    const descPhe2 = document.getElementById('desc-phe2');

    const draggables = document.querySelectorAll('.merged-card');
    const dropzones = document.querySelectorAll('.drop-zone');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', draggable.id);
            draggable.classList.add('opacity-50');
        });
        draggable.addEventListener('dragend', (e) => {
            draggable.classList.remove('opacity-50');
        });
    });

    dropzones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); 
            zone.classList.add('bg-gray-200');
        });
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('bg-gray-200');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('bg-gray-200');

            const cardId = e.dataTransfer.getData('text/plain');
            const draggedCard = document.getElementById(cardId);
            
            // Kiểm tra xem thẻ có tồn tại không
            if (!draggedCard) return; 

            const cardPhe = draggedCard.dataset.phe;
            const zonePhe = zone.dataset.phe;

            if (cardPhe === zonePhe) {
                zone.appendChild(draggedCard);
                draggedCard.classList.remove('bg-green-100', 'border-green-400', 'cursor-grab');
                draggedCard.classList.add('bg-white', 'cursor-auto', 'shadow-none', 'border-gray-300', 'mt-4');
                draggedCard.setAttribute('draggable', 'false');

                pheCounters[zonePhe]++;

                // KIỂM TRA HOÀN THÀNH
                if (pheCounters[1] === pheTotals[1] && pheCounters[2] === pheTotals[2]) {
                    // Cập nhật Phe 1
                    if(descPhe1) {
                        descPhe1.textContent = mainDef1;
                        descPhe1.classList.remove('text-blue-600');
                        descPhe1.classList.add('text-gray-700', 'italic', 'mt-4', 'font-normal');
                    }
                    // Cập nhật Phe 2
                    if(descPhe2) {
                        descPhe2.textContent = mainDef2;
                        descPhe2.classList.remove('text-red-600');
                        descPhe2.classList.add('text-gray-700', 'italic', 'mt-4', 'font-normal');
                    }
                    
                    // HIỂN THỊ POP-UP HOÀN THÀNH
                    // Thêm một chút độ trễ để người chơi thấy thẻ cuối cùng rơi vào
                    setTimeout(showCompletionPopup, 5000); 
                }
                
            } else {
                showPopup("Sai phe rồi! Đây không phải lý thuyết thuộc phe này.");
            }
        });
    });

}); // Kết thúc DOMContentLoaded