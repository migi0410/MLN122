// Chờ trang tải xong
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. CƠ SỞ DỮ LIỆU CÂU HỎI (KEY: Đáp án đúng) ---

    const questions = [
        // === HÀNG HÓA VÀ HAI THUỘC TÍNH (1-8) ===
        {
            id: 1,
            text: "Giá trị sử dụng của hàng hoá được quyết định bởi yếu tố nào?",
            answers: [
                { text: "A. Thời gian lao động xã hội cần thiết." },
                { text: "B. Thuộc tính tự nhiên của vật phẩm.", isCorrect: true },
                { text: "C. Tính phức tạp của lao động." },
                { text: "D. Quan hệ cung - cầu thị trường." }
            ]
        },
        {
            id: 2,
            text: "Lao động trừu tượng tạo ra thuộc tính nào của hàng hoá?",
            answers: [
                { text: "A. Giá trị sử dụng." },
                { text: "B. Lượng giá trị." },
                { text: "C. Giá trị.", isCorrect: true },
                { text: "D. Cả A và C." }
            ]
        },
        {
            id: 3,
            text: "Nhân tố nào sau đây làm GIẢM lượng giá trị của một đơn vị hàng hoá?",
            answers: [
                { text: "A. Tăng cường độ lao động." },
                { text: "B. Giảm cường độ lao động." },
                { text: "C. Tăng năng suất lao động.", isCorrect: true },
                { text: "D. Giảm mức độ phức tạp của lao động." }
            ]
        },
        {
            id: 4,
            text: "Thuộc tính nào của hàng hóa là một phạm trù lịch sử, chỉ tồn tại trong nền sản xuất hàng hóa?",
            answers: [
                { text: "A. Giá trị sử dụng." },
                { text: "B. Công dụng." },
                { text: "C. Giá trị.", isCorrect: true },
                { text: "D. Giá cả." }
            ]
        },
        {
            id: 5,
            text: "Tính chất hai mặt của lao động sản xuất hàng hoá phản ánh điều gì?",
            answers: [
                { text: "A. Mâu thuẫn giữa người mua và người bán." },
                { text: "B. Mâu thuẫn giữa cung và cầu." },
                { text: "C. Mâu thuẫn cơ bản của sản xuất hàng hóa.", isCorrect: true },
                { text: "D. Mâu thuẫn giữa lao động chân tay và lao động trí óc." }
            ]
        },
        {
            id: 6,
            text: "Lao động cụ thể có vai trò gì?",
            answers: [
                { text: "A. Tạo ra giá trị." },
                { text: "B. Tạo ra giá trị sử dụng.", isCorrect: true },
                { text: "C. Quyết định lượng giá trị." },
                { text: "D. Thúc đẩy cạnh tranh." }
            ]
        },
        {
            id: 7,
            text: "Lượng giá trị của một đơn vị hàng hoá sẽ KHÔNG thay đổi khi:",
            answers: [
                { text: "A. Năng suất lao động tăng." },
                { text: "B. Cường độ lao động tăng.", isCorrect: true },
                { text: "C. Mức độ phức tạp của lao động tăng." },
                { text: "D. Thời gian lao động xã hội cần thiết giảm." }
            ]
        },
        {
            id: 8,
            text: "Thời gian lao động xã hội cần thiết là thước đo của:",
            answers: [
                { text: "A. Giá trị sử dụng." },
                { text: "B. Giá cả thị trường." },
                { text: "C. Lượng giá trị của hàng hóa.", isCorrect: true },
                { text: "D. Cường độ lao động." }
            ]
        },

        // === TIỀN TỆ (9-17) ===
        {
            id: 9,
            text: "Tiền tệ ra đời từ hình thái giá trị nào?",
            answers: [
                { text: "A. Hình thái giản đơn (ngẫu nhiên)." },
                { text: "B. Hình thái mở rộng (toàn bộ)." },
                { text: "C. Hình thái chung.", isCorrect: true },
                { text: "D. Hình thái tiền tệ." }
            ]
        },
        {
            id: 10,
            text: "Chức năng nào của tiền tệ biểu hiện giá trị hàng hóa bằng tiền (giá cả)?",
            answers: [
                { text: "A. Phương tiện lưu thông." },
                { text: "B. Thước đo giá trị.", isCorrect: true },
                { text: "C. Phương tiện cất trữ." },
                { text: "D. Phương tiện thanh toán." }
            ]
        },
        {
            id: 11,
            text: "Tiền làm môi giới cho quá trình trao đổi hàng hóa theo công thức H-T-H, là chức năng gì?",
            answers: [
                { text: "A. Phương tiện cất trữ." },
                { text: "B. Phương tiện thanh toán." },
                { text: "C. Phương tiện lưu thông.", isCorrect: true },
                { text: "D. Thước đo giá trị." }
            ]
        },
        {
            id: 12,
            text: "Quy luật lưu thông tiền tệ xác định điều gì?",
            answers: [
                { text: "A. Tỷ giá hối đoái giữa các đồng tiền." },
                { text: "B. Số lượng tiền cần thiết cho lưu thông.", isCorrect: true },
                { text: "C. Tốc độ lưu thông hàng hóa." },
                { text: "D. Mức độ lạm phát tối đa." }
            ]
        },
        {
            id: 13,
            text: "Theo công thức của Mác, lượng tiền cần thiết cho lưu thông (M) tỷ lệ nghịch với yếu tố nào?",
            answers: [
                { text: "A. Tổng giá cả hàng hóa (P x Q)." },
                { text: "B. Số vòng luân chuyển trung bình của tiền (V).", isCorrect: true },
                { text: "C. Giá trị của một đơn vị tiền tệ." },
                { text: "D. Tổng số tiền phải chi trả." }
            ]
        },
        {
            id: 14,
            text: "Tiền tệ thế giới thực hiện vai trò gì?",
            answers: [
                { text: "A. Phương tiện thanh toán giữa các hộ gia đình." },
                { text: "B. Phương tiện cất trữ giá trị cho các doanh nghiệp." },
                { text: "C. Vật ngang giá chung trong quan hệ kinh tế quốc tế.", isCorrect: true },
                { text: "D. Thước đo lợi nhuận bình quân." }
            ]
        },
        {
            id: 15,
            text: "Chức năng nào của tiền tệ dùng để chi trả sau khi giao dịch đã hoàn thành?",
            answers: [
                { text: "A. Phương tiện lưu thông." },
                { text: "B. Phương tiện cất trữ." },
                { text: "C. Phương tiện thanh toán.", isCorrect: true },
                { text: "D. Thước đo giá trị." }
            ]
        },
        {
            id: 16,
            text: "Bản chất của tiền tệ là:",
            answers: [
                { text: "A. Một loại kim loại quý hiếm." },
                { text: "B. Tín hiệu trao đổi do Nhà nước quy định." },
                { text: "C. Hàng hóa đặc biệt, đóng vai trò vật ngang giá chung.", isCorrect: true },
                { text: "D. Phương tiện để biểu hiện giá trị sử dụng." }
            ]
        },
        {
            id: 17,
            text: "Nếu lượng tiền giấy được phát hành vượt quá M, điều gì sẽ xảy ra?",
            answers: [
                { text: "A. Kinh tế tăng trưởng nhanh hơn." },
                { text: "B. Lạm phát.", isCorrect: true },
                { text: "C. Giảm cạnh tranh." },
                { text: "D. Tăng tỷ suất lợi nhuận bình quân." }
            ]
        },
        
        // === THỊ TRƯỜNG VÀ QUY LUẬT (18-30) ===
        {
            id: 18,
            text: "Quy luật kinh tế cơ bản nhất của sản xuất và lưu thông hàng hóa là:",
            answers: [
                { text: "A. Quy luật Cung – Cầu." },
                { text: "B. Quy luật Cạnh tranh." },
                { text: "C. Quy luật Giá trị.", isCorrect: true },
                { text: "D. Quy luật Lưu thông tiền tệ." }
            ]
        },
        {
            id: 19,
            text: "Khi Cung > Cầu trên thị trường, điều gì xảy ra với giá cả?",
            answers: [
                { text: "A. Giá cả tăng lên trên giá trị." },
                { text: "B. Giá cả giảm xuống dưới giá trị.", isCorrect: true },
                { text: "C. Giá cả bằng giá trị." },
                { text: "D. Giá cả không đổi." }
            ]
        },
        {
            id: 20,
            text: "Cạnh tranh nội bộ ngành dẫn đến kết quả nào?",
            answers: [
                { text: "A. Hình thành tỷ suất lợi nhuận bình quân." },
                { text: "B. Phân hóa giàu nghèo." },
                { text: "C. Hình thành giá trị thị trường (giá trị xã hội).", isCorrect: true },
                { text: "D. Điều tiết sản xuất giữa các ngành." }
            ]
        },
        {
            id: 21,
            text: "Theo Quy luật Giá trị, trong sản xuất, hao phí lao động cá biệt phải như thế nào?",
            answers: [
                { text: "A. Bằng hao phí lao động xã hội." },
                { text: "B. Lớn hơn hao phí lao động xã hội." },
                { text: "C. Nhỏ hơn hoặc bằng hao phí lao động xã hội.", isCorrect: true },
                { text: "D. Không liên quan đến hao phí xã hội." }
            ]
        },
        {
            id: 22,
            text: "Chức năng nào của thị trường giúp người sản xuất nắm bắt được nhu cầu xã hội?",
            answers: [
                { text: "A. Chức năng thực hiện (thừa nhận) giá trị." },
                { text: "B. Chức năng điều tiết." },
                { text: "C. Chức năng thông tin.", isCorrect: true },
                { text: "D. Chức năng phân hóa." }
            ]
        },
        {
            id: 23,
            text: "Cạnh tranh giữa các ngành dẫn đến kết quả nào?",
            answers: [
                { text: "A. Hình thành giá trị thị trường." },
                { text: "B. Hình thành tỷ suất lợi nhuận bình quân.", isCorrect: true },
                { text: "C. Giảm giá trị sử dụng." },
                { text: "D. Tăng cường độ lao động." }
            ]
        },
        {
            id: 24,
            text: "Khi Giá cả thị trường = Giá trị hàng hóa, điều gì xảy ra theo Quy luật Cung – Cầu?",
            answers: [
                { text: "A. Cung > Cầu." },
                { text: "B. Cung < Cầu." },
                { text: "C. Cung = Cầu.", isCorrect: true },
                { text: "D. Giá trị thặng dư giảm." }
            ]
        },
        {
            id: 25,
            text: "Tác động tiêu cực của Quy luật Cạnh tranh là gì?",
            answers: [
                { text: "A. Thúc đẩy cải tiến kỹ thuật." },
                { text: "B. Dẫn đến cạnh tranh không lành mạnh, độc quyền.", isCorrect: true },
                { text: "C. Giúp phân bổ vốn từ ngành lãi thấp sang lãi cao." },
                { text: "D. Tăng cường độ lao động." }
            ]
        },
        {
            id: 26,
            text: "Mục đích của Người sản xuất (Doanh nghiệp) khi tham gia thị trường là gì?",
            answers: [
                { text: "A. Tối đa hóa lợi ích (Giá trị sử dụng)." },
                { text: "B. Tối đa hóa lợi nhuận.", isCorrect: true },
                { text: "C. Tối đa hóa giá trị trao đổi." },
                { text: "D. Tối đa hóa số lượng tiền lưu thông." }
            ]
        },
        {
            id: 27,
            text: "Chủ thể nào thực hiện chức năng quản lý, điều tiết nền kinh tế vĩ mô?",
            answers: [
                { text: "A. Người sản xuất." },
                { text: "B. Người tiêu dùng." },
                { text: "C. Chủ thể trung gian." },
                { text: "D. Nhà nước.", isCorrect: true }
            ]
        },
        {
            id: 28,
            text: "Cơ chế thị trường là hệ thống các quan hệ kinh tế mang tính:",
            answers: [
                { text: "A. Chủ quan, được Nhà nước quyết định." },
                { text: "B. Tự điều chỉnh, tuân theo quy luật khách quan.", isCorrect: true },
                { text: "C. Cố định, không thay đổi theo thời gian." },
                { text: "D. Độc quyền, do doanh nghiệp lớn chi phối." }
            ]
        },
        {
            id: 29,
            text: "Quy luật Giá trị điều tiết sản xuất thông qua cơ chế nào?",
            answers: [
                { text: "A. Sự vận động của giá cả thị trường xoay quanh giá trị.", isCorrect: true },
                { text: "B. Việc Nhà nước quy định giá trần và giá sàn." },
                { text: "C. Sự tăng giảm cường độ lao động cá biệt." },
                { text: "D. Sự điều chỉnh tốc độ quay của tiền tệ." }
            ]
        },
        {
            id: 30,
            text: "Lao động phức tạp so với lao động giản đơn tạo ra lượng giá trị như thế nào trong cùng một thời gian?",
            answers: [
                { text: "A. Giảm đi." },
                { text: "B. Không đổi." },
                { text: "C. Nhiều hơn.", isCorrect: true },
                { text: "D. Ít hơn." }
            ]
        }
    ];

    // --- 2. CÁC BIẾN QUẢN LÝ TRẠNG THÁI ---
    let currentQuestionIndex = 0;
    let userAnswers = {}; 
    let totalCorrect = 0;
    const TOTAL_QUESTIONS = questions.length; // Tổng số câu hỏi

    // --- 3. LẤY CÁC PHẦN TỬ HTML ---
    const quizLoading = document.getElementById('quiz-loading');
    const quizQuestionDiv = document.getElementById('quiz-question');
    const questionTextElem = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const progressText = document.getElementById('progress-text');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const resultsSection = document.getElementById('quiz-results');
    const finalScoreDisplay = document.getElementById('final-score-display');
    const totalQuestionsDisplay = document.getElementById('total-questions'); // Lấy phần tử total questions
    const finalMessage = document.getElementById('final-message');
    const restartBtn = document.getElementById('restart-btn');
    
    if (totalQuestionsDisplay) {
        totalQuestionsDisplay.textContent = TOTAL_QUESTIONS; // Cập nhật tổng số câu hỏi
    }

    // --- 4. CÁC HÀM LOGIC ---

    // Hàm tải câu hỏi
    function loadQuestion(index) {
        if (index < 0 || index >= questions.length) return;

        currentQuestionIndex = index;
        const q = questions[index];

        // 1. Cập nhật tiến độ và câu hỏi
        progressText.textContent = `Câu ${index + 1}/${TOTAL_QUESTIONS}`;
        questionTextElem.textContent = `${q.id}. ${q.text}`;
        
        // 2. Tạo các nút trả lời
        answersContainer.innerHTML = '';
        q.answers.forEach((answer, ansIndex) => {
            const answerCode = String.fromCharCode(65 + ansIndex);
            
            const button = document.createElement('button');
            button.className = `answer-btn w-full p-4 text-left border-2 rounded-lg transition-all bg-white border-gray-200 hover:bg-gray-50`;
            button.textContent = answer.text;
            button.dataset.answerCode = answerCode;
            button.dataset.correct = answer.isCorrect ? 'true' : 'false';
            button.disabled = !!userAnswers[q.id]; 

            // Xử lý tô màu nếu đã trả lời
            if (userAnswers[q.id]) {
                const selectedCode = userAnswers[q.id].selected;
                const isSelected = selectedCode === answerCode;
                const isCorrectAnswer = answer.isCorrect;
                
                button.disabled = true; 
                button.classList.remove('hover:bg-gray-50');

                if (isCorrectAnswer) {
                    button.classList.add('bg-green-100', 'border-green-600', 'font-semibold');
                } else if (isSelected && !isCorrectAnswer) {
                    button.classList.add('bg-red-100', 'border-red-600', 'font-semibold', 'line-through');
                }
            } else {
                 button.addEventListener('click', handleAnswerClick);
            }

            answersContainer.appendChild(button);
        });

        // 3. Cập nhật nút điều hướng
        prevBtn.disabled = index === 0;
        nextBtn.disabled = !userAnswers[q.id] && index < questions.length;
        
        nextBtn.textContent = index === questions.length - 1 ? 'Xem kết quả' : 'Tiếp theo →';
    }

    // Hàm xử lý khi nhấp vào nút trả lời
    function handleAnswerClick(event) {
        const selectedButton = event.currentTarget;
        const answerCode = selectedButton.dataset.answerCode;
        const questionId = questions[currentQuestionIndex].id;
        const isCorrect = selectedButton.dataset.correct === 'true';

        // 1. Lưu câu trả lời (bao gồm kết quả)
        userAnswers[questionId] = { selected: answerCode, isCorrect: isCorrect };

        // 2. Vô hiệu hóa và tô màu tất cả các nút
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
            btn.classList.remove('hover:bg-gray-50');

            if (btn.dataset.correct === 'true') {
                btn.classList.add('bg-green-100', 'border-green-600', 'font-semibold');
            } else if (btn.dataset.answerCode === answerCode) {
                 btn.classList.add('bg-red-100', 'border-red-600', 'font-semibold', 'line-through');
            }
        });
        
        // 3. Kích hoạt nút "Tiếp theo"
        nextBtn.disabled = false;
        
        // 4. Nếu trả lời đúng, tăng điểm
        if (isCorrect && !userAnswers[questionId].scored) {
            totalCorrect++;
            userAnswers[questionId].scored = true; // Đánh dấu đã tính điểm
        }
    }

    // Hàm hiển thị kết quả cuối cùng
    function showResult() {
        // 1. Tính điểm và thông báo
        let message = '';
        const percentage = (totalCorrect / TOTAL_QUESTIONS) * 100;

        if (percentage >= 90) {
            message = "Xuất sắc! Bạn nắm vững kiến thức Chương 2!";
        } else if (percentage >= 70) {
            message = "Rất tốt! Cần ôn tập thêm một chút về các quy luật.";
        } else {
            message = "Cần dành thêm thời gian ôn tập kỹ các khái niệm cơ bản.";
        }

        // 2. Cập nhật giao diện kết quả
        quizQuestionDiv.classList.add('hidden');
        resultsSection.classList.remove('hidden');

        finalScoreDisplay.textContent = totalCorrect;
        finalMessage.textContent = message;
    }

    // --- 5. LOGIC ĐIỀU HƯỚNG ---

    function goToNext() {
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
            totalCorrect = 0;
            resultsSection.classList.add('hidden');
            quizQuestionDiv.classList.remove('hidden');
            loadQuestion(0);
        });

        // Bắt đầu tải câu hỏi đầu tiên
        loadQuestion(0);
    }

    setTimeout(initializeQuiz, 500); 
});