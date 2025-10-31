// Chờ trang tải xong
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. CƠ SỞ DỮ LIỆU QUIZ ---

    // 4 Kiểu người tiêu dùng
    const profiles = {
        'wise': {
            name: "Thông thái",
            desc: "Bạn là người kiểm soát thị trường. Bạn đưa ra quyết định dựa trên giá trị và nhu cầu thực sự, hiếm khi bị lung lay bởi quảng cáo hay áp lực xã hội.",
            advice: "Hãy giữ vững nguyên tắc! Bạn là hình mẫu của người tiêu dùng lý tưởng."
        },
        'trend': {
            name: "Theo Xu hướng",
            desc: "Bạn bị thị trường dẫn dắt. Bạn dễ bị ảnh hưởng bởi KOLs, review 5 sao, và các sản phẩm đang 'hot'. Bạn coi trọng trải nghiệm xã hội hơn giá trị sản phẩm.",
            advice: "Hãy dành một chút thời gian cân nhắc: Bạn có thực sự cần món này không, hay chỉ là FOMO?"
        },
        'deal': {
            name: "Săn deal",
            desc: "Bạn và thị trường đang 'cò kè'. Bạn bị thu hút bởi các ưu đãi, giảm giá 50% hoặc mua 1 tặng 1. Đôi khi bạn mua những thứ không cần chỉ vì chúng rẻ.",
            advice: "Hãy nhớ: Tiết kiệm tiền cho một món đồ không cần thiết cũng là lãng phí."
        },
        'loyal': {
            name: "Trung thành",
            desc: "Bạn bị các thương hiệu 'ru ngủ'. Khi đã tìm thấy một thương hiệu/sản phẩm yêu thích, bạn hiếm khi thay đổi, ngay cả khi có lựa chọn tốt hơn hoặc rẻ hơn.",
            advice: "Thỉnh thoảng, hãy mở lòng với các thương hiệu mới. Sự trung thành của bạn có thể khiến bạn bỏ lỡ các cơ hội tốt."
        }
    };

    // 10 Câu hỏi tình huống
    const questions = [
        {
            id: 1,
            text: "Bạn thấy một quán ăn có 5000 review 5 sao và một quán có 50 review 4.8 sao. Bạn chọn quán nào?",
            answers: [
                { text: "A. Quán 5000 review. Phải đông mới ngon chứ!", score: { trend: 1 } },
                { text: "B. Quán 50 review. Tôi sẽ xem kỹ nội dung review gần nhất.", score: { wise: 1 } },
                { text: "C. Tôi sẽ chọn quán quen tôi thích hơn.", score: { loyal: 1 } },
                { text: "D. Quán nào đang có deal giảm 30% thì tôi chọn.", score: { deal: 1 } }
            ]
        },
        {
            id: 2,
            text: "Bạn đang tìm mua một chiếc laptop. Bạn sẽ làm gì?",
            answers: [
                { text: "A. Đặt mua ngay mẫu đang giảm 40% trên sàn thương mại điện tử.", score: { deal: 1 } },
                { text: "B. Đọc các bài đánh giá chuyên sâu và so sánh hiệu năng/giá trị sử dụng.", score: { wise: 1 } },
                { text: "C. Mua lại thương hiệu laptop tôi đã dùng 5 năm nay.", score: { loyal: 1 } },
                { text: "D. Chọn mẫu mà các influencer công nghệ đang quảng cáo là tốt nhất.", score: { trend: 1 } }
            ]
        },
        {
            id: 3,
            text: "Một nhãn hàng ra mắt 'Bản giới hạn' (Limited Edition) của một sản phẩm cũ. Phản ứng của bạn?",
            answers: [
                { text: "A. Tôi mua ngay vì sợ hết hàng và muốn khoe với bạn bè.", score: { trend: 1 } },
                { text: "B. Chắc chắn không mua, tôi chỉ mua khi có nhu cầu sử dụng.", score: { wise: 1 } },
                { text: "C. Tôi chỉ mua khi nhãn hàng đó là thương hiệu tôi đã gắn bó.", score: { loyal: 1 } },
                { text: "D. Tôi sẽ đợi xem liệu họ có giảm giá 10% cho thành viên không.", score: { deal: 1 } }
            ]
        },
        {
            id: 4,
            text: "Bạn vừa mua món đồ ưng ý. Hôm sau bạn thấy có deal giảm 50% cho món đồ đó. Bạn cảm thấy thế nào?",
            answers: [
                { text: "A. Hơi tiếc, nhưng tôi đã mua khi cần và món đồ đáng giá. (Không sao)", score: { wise: 1 } },
                { text: "B. Cực kỳ hối tiếc và giận dữ, cảm giác bị lừa.", score: { deal: 1 } },
                { text: "C. Tôi sẽ mua thêm một cái nữa để dự trữ với giá hời này.", score: { deal: 1 } },
                { text: "D. Nếu là thương hiệu tôi hay dùng, tôi chấp nhận.", score: { loyal: 1 } }
            ]
        },
        {
            id: 5,
            text: "Bạn mua một bộ kem đánh răng Mua 1 Tặng 1, dù bạn chỉ cần 1 tuýp. Bạn nghĩ gì?",
            answers: [
                { text: "A. Tôi đã tiết kiệm được tiền, dù món thứ hai chưa cần ngay.", score: { deal: 1 } },
                { text: "B. Tôi sẽ không mua vì làm vậy là lãng phí không gian.", score: { wise: 1 } },
                { text: "C. Tôi sẽ mua vì bạn bè tôi khuyên nên mua hàng tích trữ.", score: { trend: 1 } },
                { text: "D. Tôi sẽ mua, nếu đó là thương hiệu nha khoa uy tín tôi tin tưởng.", score: { loyal: 1 } }
            ]
        },
        {
            id: 6,
            text: "Bạn đang chọn mua TV. Có 3 lựa chọn: (A) 15 triệu, (B) 10 triệu, (C) 12 triệu. Bạn chọn (C) 12 triệu. Tại sao?",
            answers: [
                { text: "A. Tôi chỉ mua TV đã được chứng minh chất lượng (ví dụ: một thương hiệu lâu đời).", score: { loyal: 1 } },
                { text: "B. Mẫu 15 triệu quá đắt, mẫu 10 triệu quá rẻ. Mẫu 12 triệu là vừa túi tiền và chất lượng.", score: { wise: 1 } },
                { text: "C. Mẫu 10 triệu là 'mồi nhử', mẫu 12 triệu là lựa chọn hợp lý nhất.", score: { wise: 1 } },
                { text: "D. Tôi sẽ chọn mẫu 12 triệu vì nó đang được giảm giá mạnh nhất.", score: { deal: 1 } }
            ]
        },
        {
            id: 7,
            text: "Bạn có nhu cầu mua một đôi giày thể thao. Bạn chi bao nhiêu?",
            answers: [
                { text: "A. Mua đôi rẻ nhất có thể, miễn là bền. Giá trị sử dụng là quan trọng nhất.", score: { deal: 1 } },
                { text: "B. Mua đôi mới nhất, phiên bản giới hạn, để thể hiện phong cách cá nhân.", score: { trend: 1 } },
                { text: "C. Chi tiền cho thương hiệu mà tôi đã dùng để tập gym từ trước đến nay.", score: { loyal: 1 } },
                { text: "D. Mua đôi có chất liệu và công nghệ tốt nhất, bất kể thương hiệu.", score: { wise: 1 } }
            ]
        },
        {
            id: 8,
            text: "Bạn thấy một banner quảng cáo lớn ngay giữa trang web bạn đang xem. Bạn phản ứng thế nào?",
            answers: [
                { text: "A. Nhấp vào ngay để xem có deal giảm giá sốc nào không.", score: { deal: 1 } },
                { text: "B. Lờ đi, tiếp tục tìm kiếm sản phẩm ban đầu của mình.", score: { wise: 1 } },
                { text: "C. Nhấp vào vì nó trông rất chuyên nghiệp và đáng tin cậy.", score: { trend: 1 } },
                { text: "D. Tôi chỉ nhấp vào nếu banner đó là của thương hiệu quen.", score: { loyal: 1 } }
            ]
        },
        {
            id: 9,
            text: "Bạn bè rủ bạn mua một món đồ vì 'Ai cũng đang mua nó'. Bạn sẽ...",
            answers: [
                { text: "A. Mua ngay vì không muốn bị lạc hậu (FOMO).", score: { trend: 1 } },
                { text: "B. Yêu cầu bạn bè gửi link review chi tiết về sản phẩm đó.", score: { wise: 1 } },
                { text: "C. Mua, nếu giá của nó đang rất tốt hoặc có khuyến mãi.", score: { deal: 1 } },
                { text: "D. Không mua, nếu nó không phải món đồ tôi đã có kế hoạch mua.", score: { wise: 1 } }
            ]
        },
        {
            id: 10,
            text: "Một công ty công bố 'Giá gốc: 2 triệu VNĐ, nay giảm còn 1 triệu VNĐ'. Bạn suy nghĩ gì đầu tiên?",
            answers: [
                { text: "A. Wow, rẻ quá! Tôi phải mua ngay. (Bị ảnh hưởng bởi Mỏ neo 2 triệu).", score: { deal: 1 } },
                { text: "B. Tôi sẽ tìm kiếm để xem giá thị trường thực sự của nó là bao nhiêu.", score: { wise: 1 } },
                { text: "C. Tôi sẽ xem đây là thương hiệu mới hay cũ. Nếu cũ, tôi mua.", score: { loyal: 1 } },
                { text: "D. Tôi sẽ xem có KOL nào đã review sản phẩm này không.", score: { trend: 1 } }
            ]
        }
    ];

    // --- 2. CÁC BIẾN QUẢN LÝ TRẠNG THÁI ---
    let currentQuestionIndex = 0;
    let userAnswers = {}; // Lưu trữ {1: 'A', 2: 'B', ...}
    let scores = { wise: 0, trend: 0, deal: 0, loyal: 0 };

    // --- 3. LẤY CÁC PHẦN TỬ HTML ---
    const quizContainer = document.getElementById('quiz-container');
    const quizLoading = document.getElementById('quiz-loading');
    const quizQuestionDiv = document.getElementById('quiz-question');
    const questionTextElem = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const progressText = document.getElementById('progress-text');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const resultsSection = document.getElementById('quiz-results');
    const resultTypeElem = document.getElementById('result-type');
    const resultDescriptionElem = document.getElementById('result-description');
    const resultAdviceElem = document.getElementById('result-advice');
    const scoreBreakdownElem = document.getElementById('score-breakdown');
    const restartBtn = document.getElementById('restart-btn');

    // --- 4. CÁC HÀM LOGIC ---

    // Hàm tải câu hỏi
    function loadQuestion(index) {
        if (index < 0 || index >= questions.length) return;

        currentQuestionIndex = index;
        const q = questions[index];

        // 1. Cập nhật tiến độ và câu hỏi
        progressText.textContent = `Câu ${index + 1}/${questions.length}`;
        questionTextElem.textContent = `${q.id}. ${q.text}`;
        
        // 2. Tạo các nút trả lời
        answersContainer.innerHTML = '';
        q.answers.forEach((answer, ansIndex) => {
            const isSelected = userAnswers[q.id] === String.fromCharCode(65 + ansIndex);
            
            const button = document.createElement('button');
            button.className = `answer-btn w-full p-4 text-left border-2 rounded-lg transition-all ${isSelected ? 'bg-accent-yellow border-dark-green font-semibold' : 'bg-white border-gray-200 hover:bg-gray-50'}`;
            button.textContent = answer.text;
            button.dataset.answerCode = String.fromCharCode(65 + ansIndex); // A, B, C, D
            button.addEventListener('click', handleAnswerClick);
            answersContainer.appendChild(button);
        });

        // 3. Cập nhật nút điều hướng
        prevBtn.disabled = index === 0;
        nextBtn.disabled = !userAnswers[q.id] && index < questions.length;
        
        // Nếu là câu cuối, đổi chữ "Tiếp theo" thành "Xem kết quả"
        if (index === questions.length - 1) {
            nextBtn.textContent = 'Xem kết quả';
        } else {
            nextBtn.textContent = 'Tiếp theo →';
        }
    }

    // Hàm xử lý khi nhấp vào nút trả lời
    function handleAnswerClick(event) {
        const selectedButton = event.currentTarget;
        const answerCode = selectedButton.dataset.answerCode;
        const questionId = questions[currentQuestionIndex].id;

        // 1. Xóa lựa chọn cũ (nếu có)
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('bg-accent-yellow', 'border-dark-green', 'font-semibold');
        });

        // 2. Đánh dấu lựa chọn mới
        selectedButton.classList.add('bg-accent-yellow', 'border-dark-green', 'font-semibold');

        // 3. Lưu câu trả lời
        userAnswers[questionId] = answerCode;

        // 4. Kích hoạt nút "Tiếp theo"
        nextBtn.disabled = false;
    }

    // Hàm tính điểm và hiển thị kết quả
    function showResult() {
        // 1. Tính điểm tổng
        scores = { wise: 0, trend: 0, deal: 0, loyal: 0 };
        Object.entries(userAnswers).forEach(([qId, aCode]) => {
            const q = questions.find(q => q.id === parseInt(qId));
            const ans = q.answers.find((a, index) => String.fromCharCode(65 + index) === aCode);
            
            // Cộng điểm theo cấu hình score
            if (ans && ans.score) {
                Object.entries(ans.score).forEach(([type, points]) => {
                    scores[type] += points;
                });
            }
        });

        // 2. Xác định kiểu người tiêu dùng chiếm ưu thế
        const maxScore = Math.max(...Object.values(scores));
        const dominantProfileKey = Object.keys(scores).find(key => scores[key] === maxScore);
        const resultProfile = profiles[dominantProfileKey];

        // 3. Cập nhật giao diện kết quả
        quizQuestionDiv.classList.add('hidden');
        resultsSection.classList.remove('hidden');

        resultTypeElem.textContent = resultProfile.name.toUpperCase();
        resultDescriptionElem.textContent = resultProfile.desc;
        resultAdviceElem.textContent = `Lời khuyên cho bạn: ${resultProfile.advice}`;

        // 4. Hiển thị phân tích điểm
        scoreBreakdownElem.innerHTML = '';
        Object.entries(scores).forEach(([key, score]) => {
            const profile = profiles[key];
            const maxPossibleScore = 10; // Giả định tối đa 10 điểm cho mỗi kiểu
            const percentage = (score / maxPossibleScore) * 100;

            scoreBreakdownElem.innerHTML += `
                <div class="col-span-1 text-center">
                    <p class="text-sm font-semibold">${profile.name}</p>
                    <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div class="h-full rounded-full bg-dark-green" style="width: ${percentage}%;"></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">(${score} điểm)</p>
                </div>
            `;
        });
    }

    // --- 5. LOGIC ĐIỀU HƯỚNG ---

    function goToNext() {
        // Nếu đã trả lời câu hỏi hiện tại:
        if (userAnswers[questions[currentQuestionIndex].id]) {
            if (currentQuestionIndex === questions.length - 1) {
                showResult();
            } else {
                loadQuestion(currentQuestionIndex + 1);
            }
        } else {
            alert("Vui lòng chọn câu trả lời trước khi tiếp tục.");
        }
    }

    function goToPrev() {
        loadQuestion(currentQuestionIndex - 1);
    }

    // --- 6. KHỞI CHẠY ---
    function initializeQuiz() {
        quizLoading.classList.add('hidden');
        quizQuestionDiv.classList.remove('hidden');
        
        // Gán sự kiện cho nút Điều hướng
        nextBtn.addEventListener('click', goToNext);
        prevBtn.addEventListener('click', goToPrev);
        restartBtn.addEventListener('click', () => {
            currentQuestionIndex = 0;
            userAnswers = {};
            scores = { wise: 0, trend: 0, deal: 0, loyal: 0 };
            resultsSection.classList.add('hidden');
            quizQuestionDiv.classList.remove('hidden');
            loadQuestion(0);
        });

        // Bắt đầu tải câu hỏi đầu tiên
        loadQuestion(0);
    }

    // Giả lập thời gian tải (có thể bỏ nếu không cần)
    setTimeout(initializeQuiz, 500); 
});