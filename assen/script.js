let currentCategory = [];
let currentIndex = 0;
let flashcardFront = 'english'; // Default front side


function closePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

function loadCategory(category) {
    currentCategory = vocabulary[category];
    currentIndex = 0;
    updateFlashcard();
    closePopup();
}

function setFlashcardFront(side) {
    flashcardFront = side;
    updateFlashcard();
}

function updateFlashcard() {
    const card = currentCategory[currentIndex];
    if (card) {
        document.getElementById('flashcard-front').textContent = card[flashcardFront];
        document.getElementById('flashcard-back').textContent = card[flashcardFront === 'english' ? 'thai' : 'english'];
    } else {
        document.getElementById('flashcard-front').textContent = 'Click category';
        document.getElementById('flashcard-back').textContent = '';
    }
    document.getElementById('flashcard-inner').classList.remove('flipped');
    document.getElementById('flashcard-inner').classList.add('slide-animation');
    setTimeout(() => {
        document.getElementById('flashcard-inner').classList.remove('slide-animation');
    }, 600);
}

function flipCard() {
    document.getElementById('flashcard-inner').classList.toggle('flipped');
}

function previousCard() {
    if (currentIndex > 0) {
        const flashcardInner = document.getElementById('flashcard-inner');
        flashcardInner.classList.add('slide-prev');
        setTimeout(() => {
            currentIndex--;
            updateFlashcard();
        }, ); // Delay for animation
    }
}

function nextCard() {
    if (currentIndex < currentCategory.length - 1) {
        const flashcardInner = document.getElementById('flashcard-inner');
        flashcardInner.classList.add('slide-next');
        setTimeout(() => {
            currentIndex++;
            updateFlashcard();
        },); // Delay for animation
    }
}

const vocabulary = {
    daily: [
        { english: 'Hello', thai: 'สวัสดี' },
        { english: 'Goodbye', thai: 'ลาก่อน' },
        { english: 'Thank you', thai: 'ขอบคุณ' },
        { english: 'Please', thai: 'กรุณา' },
        { english: 'Sorry', thai: 'ขอโทษ' },
        { english: 'Yes', thai: 'ใช่' },
        { english: 'No', thai: 'ไม่' },
        { english: 'Excuse me', thai: 'ขอโทษครับ/ค่ะ' },
        { english: 'Good morning', thai: 'สวัสดีตอนเช้า' },
        { english: 'Good night', thai: 'ราตรีสวัสดิ์' }
    ],
    work: [
        { english: 'Meeting', thai: 'การประชุม' },
        { english: 'Report', thai: 'รายงาน' },
        { english: 'Project', thai: 'โครงการ' },
        { english: 'Deadline', thai: 'เส้นตาย' },
        { english: 'Task', thai: 'งาน' },
        { english: 'Team', thai: 'ทีม' },
        { english: 'Manager', thai: 'ผู้จัดการ' },
        { english: 'Employee', thai: 'พนักงาน' },
        { english: 'Office', thai: 'สำนักงาน' },
        { english: 'Discussion', thai: 'การอภิปราย' }
    ],
    home: [
        { english: 'Table', thai: 'โต๊ะ' },
        { english: 'Chair', thai: 'เก้าอี้' },
        { english: 'Window', thai: 'หน้าต่าง' },
        { english: 'Bed', thai: 'เตียง' },
        { english: 'Kitchen', thai: 'ครัว' },
        { english: 'Bathroom', thai: 'ห้องน้ำ' },
        { english: 'Door', thai: 'ประตู' },
        { english: 'Lamp', thai: 'โคมไฟ' },
        { english: 'Sofa', thai: 'โซฟา' },
        { english: 'Shelf', thai: 'ชั้นวางของ' }
    ]
};








