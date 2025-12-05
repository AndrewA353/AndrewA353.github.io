// Глобальная переменная для YouTube плеера
let youtubePlayer;

// Данные мемов с поддержкой разных типов медиа
const memesData = {
    1: {
        title: "конь еще с гривой",
        type: "image",
        src: "memes/1.jpg",
        description: "когда конь еще был с гривой...",
        date: "2025"
    },
    2: {
        title: "сонное",
        type: "image",
        src: "memes/2.jpg", 
        description: "после смены на паре",
        date: "2025"
    },
    3: {
        title: "мыш прижали",
        type: "image",
        src: "memes/3.jpg",  
        description: "мышб прижали, смотри чтоб тебя не прижали",
        date: "3 января 2025"
    },
    4: {
        title: "на суете",
        type: "image",
        src: "memes/4.jpg", 
        description: "в магните",
        date: "4 января 2025"
    },
    5: {
        title: "джорик",
        type: "image",
        src: "memes/5.jpg",
        description: "бля.. ну тут без комментариев... пиздец",
        date: "5 января 2025"
    },
    6: {
        title: "АХАХАХАХА",
        type: "image",
        src: "memes/6.jpg", 
        description: "ебать разрывная",
        date: "6 января 2025"
    },
    7: {
        title: "братья",
        type: "image",
        src: "memes/7.jpg",
        description: "вот они слева направа: шатровская, конское, и джора ",
        date: "7 января 2025"
    },
    8: {
        title: "Модник",
        type: "image",
        src: "memes/8.jpg",
        description: "мода циклична",
        date: "7 января 2025"
    },
    9: {
        title: "мамин суетолог",
        type: "image",
        src: "memes/9.jpg",
        description: "а четырка так то ниче такая",
        date: "7 января 2025"
    },
    10: {
        title: "архивное",
        type: "image",
        src: "memes/10.jpg",
        description: "картина маслом: храмцов в отпуске",
        date: "7 января 2025"
    },
    11: {
        title: "мемы с людское",
        type: "image",
        src: "memes/11.jpg",
        description: "вышли на новый уровень",
        date: "7 января 2025"
    },
    12: {
        title: "просто озон, просто ии",
        type: "image",
        src: "memes/12.jpg",
        description: "на озоне как на зоне",
        date: "7 января 2025"
    },
    13: {
        title: "Это было охуительно",
        type: "image",
        src: "memes/13.jpg",
        description: "но было одно но. но пальцем не показываем",
        date: "7 января 2025"
    },
    14: {
        title: "пиздец че за бродяга просто",
        type: "image",
        src: "memes/14.jpg",
        description: "отсосет за слойку с малиной",
        date: "7 января 2025"
    },
    15: {
        title: "конь и озон",
        type: "image",
        src: "memes/15.jpg",
        description: "хаха! димон на первую смену вышел!",
        date: "7 января 2025"
    },
    16: {
        title: "Нексия",
        type: "image",
        src: "memes/16.jpg",
        description: "Димон в нексии",
        date: "7 января 2025"
    },
    17: {
        title: "легендарочка",
        type: "video",
        src: "memes/17.mp4",
        description: "...",
        date: "7 января 2025"
    },
    18: {
        title: "мем",
        type: "image",
        src: "memes/18.jpg",
        description: "...",
        date: "7 января 2025"
    },
    19: {
        title: "...",
        type: "image",
        src: "memes/19.jpg",
        description: "...",
        date: "7 января 2025"
    },
    20: {
        title: "загрустил",
        type: "image",
        src: "memes/20.jpg",
        description: "не грусти, наготовь и кайфуй #наготовиликайфует",
        date: "7 января 2025"
    },
    21: {
        title: "ля какой",
        type: "image",
        src: "memes/21.jpg",
        description: "#наготовиликайфует",
        date: "7 января 2025"
    },
    22: {
        title: "вот они кенты",
        type: "image",
        src: "memes/22.jpg",
        description: "а братское закончилось чтоли?",
        date: "7 января 2025"
    },
    23: {
        title: "гномик",
        type: "image",
        src: "memes/23.jpg",
        description: "...",
        date: "7 января 2025"
    }, 
    24: {
        title: "ШТРААФ",
        type: "image",
        src: "memes/24.jpg",
        description: "юга тот еще кадр",
        date: "7 января 2025"
    },
    25: {
        title: "конь",
        type: "video",
        src: "memes/25.mp4",
        poster: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "",
        date: "7 января 2025"
    },
    26: {
        title: "АХАХАХХА",
        type: "video",
        src: "memes/26.mp4",
        poster: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "",
        date: "7 января 2025"
    },
    27: {
        title: "скрипач",
        type: "video",
        src: "memes/27.mp4",
        poster: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "",
        date: "7 января 2025"
    },
    28: {
        title: "гол комрони",
        type: "video",
        src: "memes/28.mp4",
        poster: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "не мем",
        date: "7 января 2025"
    },
    29: {
        title: "#наготовиликайфует",
        type: "image",
        src: "memes/29.jpg",
        description: "Православное Рождество: мемы про сочельник и колядки в видеоформате",
        date: "7 января 2025"
    },
    30: {
        title: "ии делает мемы",
        type: "image",
        src: "memes/30.jpg",
        description: "не смешно правдо",
        date: "7 января 2025"
    },
    31: {
        title: "самый лютый мем",
        type: "video",
        src: "memes/31.mp4",
        description: "надо бы повторить... сегодня ночью",
        date: "2025"
    }
};

// Маппинг типов медиа на русские названия
const mediaTypeNames = {
    'image': 'Фото',
    'video': 'Видео',
    'youtube': 'YouTube',
    'gif': 'GIF'
};

// Маппинг типов медиа на иконки
const mediaTypeIcons = {
    'image': 'fas fa-image',
    'video': 'fas fa-video',
    'youtube': 'fab fa-youtube',
    'gif': 'fas fa-film'
};

// Текущая дата для тестирования
//const TEST_DATE = new Date('2024-12-31'); // Тест: 3 декабря (видео)
const TEST_DATE = null; // Использовать реальную дату

// DOM элементы
const calendarEl = document.getElementById('calendar');
const memeModal = document.getElementById('memeModal');
const closeModal = document.getElementById('closeModal');
const backBtn = document.getElementById('backBtn');
const shareBtn = document.getElementById('shareBtn');
const memeTitle = document.getElementById('memeTitle');
const memeDescription = document.getElementById('memeDescription');
const memeDate = document.getElementById('memeDate');
const mediaTypeBadge = document.getElementById('mediaTypeBadge');
const todayEl = document.getElementById('today');
const soundEffect = document.getElementById('soundEffect');

// Контейнеры медиа
const imageContainer = document.getElementById('imageContainer');
const videoContainer = document.getElementById('videoContainer');
const youtubeContainer = document.getElementById('youtubeContainer');
const gifContainer = document.getElementById('gifContainer');
const memeImage = document.getElementById('memeImage');
const memeVideo = document.getElementById('memeVideo');
const memeGif = document.getElementById('memeGif');
const playGifBtn = document.getElementById('playGif');
const pauseGifBtn = document.getElementById('pauseGif');

// Получаем текущую дату
function getCurrentDate() {
    if (TEST_DATE) {
        return TEST_DATE;
    }
    return new Date();
}

// Форматирование даты
function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}

// Обновление отсчёта до Нового года
function updateCountdown() {
    const now = getCurrentDate();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    todayEl.textContent = `Сегодня: ${formatDate(now)}`;
}

// Создание превью для карточки в зависимости от типа медиа
function createMediaPreview(day, memeData, state) {
    let previewHTML = '';
    
    switch(memeData.type) {
        case 'image':
            previewHTML = `
                <img src="${memeData.src}" alt="${memeData.title}" class="meme-preview">
                <div class="meme-title">${memeData.title}</div>
            `;
            break;
            
        case 'gif':
            previewHTML = `
                <div class="video-preview">
                    <img src="${memeData.src}" alt="${memeData.title}" class="meme-preview">
                    <div class="gif-indicator">GIF</div>
                </div>
                <div class="meme-title">${memeData.title}</div>
            `;
            break;
            
        case 'video':
            const poster = memeData.poster || 'https://placehold.co/600x400/333333/ffffff?text=Видео+превью';
            previewHTML = `
                <div class="video-preview">
                    <img src="${poster}" alt="${memeData.title}" class="meme-preview">
                    <div class="video-indicator"><i class="fas fa-play"></i></div>
                </div>
                <div class="meme-title">${memeData.title}</div>
            `;
            break;
            
        case 'youtube':
            previewHTML = `
                <div class="video-preview">
                    <img src="https://img.youtube.com/vi/${memeData.src}/hqdefault.jpg" 
                         alt="${memeData.title}" class="meme-preview">
                    <div class="video-indicator"><i class="fab fa-youtube"></i></div>
                </div>
                <div class="meme-title">${memeData.title}</div>
            `;
            break;
            
        default:
            previewHTML = `
                <img src="${memeData.src}" alt="${memeData.title}" class="meme-preview">
                <div class="meme-title">${memeData.title}</div>
            `;
    }
    
    if (state === 'past') {
        previewHTML += '<button class="view-again"><i class="fas fa-eye"></i> Посмотреть</button>';
    }
    
    return previewHTML;
}

// Создание карточек календаря
function createCalendarCards() {
    const today = getCurrentDate();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    
    const isDecember = currentMonth === 11;
    
    for (let day = 1; day <= 31; day++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.day = day;
        
        let state = 'future';
        if (isDecember && day < currentDay) {
            state = 'past';
        } else if (isDecember && day === currentDay) {
            state = 'active';
        }
        
        card.classList.add(state);
        
        const memeData = memesData[day] || {
            title: `Мем ${day} декабря 2025`,
            type: 'image',
            src: `https://placehold.co/600x400/0f1a2a/ffffff?text=Мем+${day}+декабря+2025`,
            description: `Здесь будет самый популярный мем ${day} декабря 2025 года`,
            date: `${day} декабря 2025`
        };
        
        const mediaIcon = mediaTypeIcons[memeData.type] || 'fas fa-image';
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="day-number">${day}</div>
                    <div class="card-date">декабря</div>
                    ${state === 'future' ? 
                        `<button class="card-button" disabled><i class="fas fa-lock"></i> Скоро...</button>` :
                      state === 'active' ?
                        `<button class="card-button open-btn"><i class="fas fa-gift"></i> Открыть!</button>` :
                        `<button class="card-button"><i class="fas fa-check"></i> Уже открыто</button>`
                    }
                    <div class="media-icon" style="
                        position: absolute;
                        bottom: 15px;
                        right: 15px;
                        color: rgba(255,255,255,0.7);
                        font-size: 1.2rem;
                    ">
                        <i class="${mediaIcon}"></i>
                    </div>
                </div>
                <div class="card-back">
                    ${createMediaPreview(day, memeData, state)}
                </div>
            </div>
        `;
        
        const openBtn = card.querySelector('.open-btn, .view-again');
        if (openBtn) {
            openBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (state === 'active') {
                    soundEffect.currentTime = 0;
                    soundEffect.play().catch(e => console.log("Автовоспроизведение звука заблокировано"));
                }
                openMemeModal(day, memeData);
            });
        }
        
        if (state === 'past') {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    openMemeModal(day, memeData);
                }
            });
        }
        
        calendarEl.appendChild(card);
    }
}

// Скрыть все медиа контейнеры
function hideAllMediaContainers() {
    imageContainer.style.display = 'none';
    videoContainer.style.display = 'none';
    youtubeContainer.style.display = 'none';
    gifContainer.style.display = 'none';
}

// Остановить все воспроизведение
function stopAllMedia() {
    // Остановить видео
    if (memeVideo) {
        memeVideo.pause();
        memeVideo.currentTime = 0;
    }
    
    // Остановить YouTube
    if (youtubePlayer && typeof youtubePlayer.stopVideo === 'function') {
        youtubePlayer.stopVideo();
    }
    
    // Остановить GIF (перезагрузить)
    if (memeGif) {
        const gifSrc = memeGif.src;
        memeGif.src = '';
        setTimeout(() => {
            memeGif.src = gifSrc;
        }, 100);
        playGifBtn.style.display = 'flex';
        pauseGifBtn.style.display = 'none';
    }
}

// Инициализация YouTube плеера
function onYouTubeIframeAPIReady() {
    // Плеер будет создан при открытии модального окна
    console.log('YouTube API готов');
}

// Создать YouTube плеер
function createYouTubePlayer(videoId) {
    if (youtubePlayer) {
        youtubePlayer.destroy();
    }
    
    youtubePlayer = new YT.Player('youtubePlayer', {
        height: '400',
        width: '100%',
        videoId: videoId,
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log('YouTube плеер готов');
}

function onPlayerStateChange(event) {
    // Можно добавить обработку событий плеера
}

// Открытие модального окна с мемом
function openMemeModal(day, memeData) {
    // Останавливаем все медиа
    stopAllMedia();
    
    // Устанавливаем общие данные
    memeTitle.textContent = memeData.title;
    memeDescription.textContent = memeData.description;
    memeDate.textContent = memeData.date;
    mediaTypeBadge.textContent = mediaTypeNames[memeData.type] || 'Медиа';
    
    // Скрываем все контейнеры
    hideAllMediaContainers();
    
    // Показываем соответствующий контейнер
    switch(memeData.type) {
        case 'image':
            memeImage.src = memeData.src;
            memeImage.alt = memeData.title;
            imageContainer.style.display = 'block';
            break;
            
        case 'video':
            memeVideo.src = memeData.src;
            memeVideo.poster = memeData.poster || '';
            memeVideo.controls = true;
            videoContainer.style.display = 'block';
            break;
            
        case 'youtube':
            youtubeContainer.style.display = 'block';
            setTimeout(() => {
                createYouTubePlayer(memeData.src);
            }, 100);
            break;
            
        case 'gif':
            memeGif.src = memeData.src;
            memeGif.alt = memeData.title;
            gifContainer.style.display = 'block';
            break;
            
        default:
            memeImage.src = memeData.src;
            memeImage.alt = memeData.title;
            imageContainer.style.display = 'block';
    }
    
    // Показываем модальное окно
    memeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Если карточка активна сегодня, помечаем её как открытую
    const today = getCurrentDate();
    if (today.getDate() === day && today.getMonth() === 11) {
        const card = document.querySelector(`.card[data-day="${day}"]`);
        if (card && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            localStorage.setItem(`meme-day-${day}-opened`, 'true');
        }
    }
}

// Закрытие модального окна
function closeMemeModal() {
    stopAllMedia();
    memeModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Управление GIF
function setupGifControls() {
    playGifBtn.addEventListener('click', () => {
        memeGif.style.animationPlayState = 'running';
        playGifBtn.style.display = 'none';
        pauseGifBtn.style.display = 'flex';
    });
    
    pauseGifBtn.addEventListener('click', () => {
        memeGif.style.animationPlayState = 'paused';
        playGifBtn.style.display = 'flex';
        pauseGifBtn.style.display = 'none';
    });
}

// Поделиться мемом
function shareMeme() {
    const currentMediaType = mediaTypeBadge.textContent.toLowerCase();
    let shareText = `${memeTitle.textContent} (${currentMediaType})\n${memeDescription.textContent}\n\nОткрывай и другие мемы на Мемном Адвенте 2025!`;
    
    const shareData = {
        title: memeTitle.textContent,
        text: shareText,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Успешно поделились'))
            .catch((error) => console.log('Ошибка при попытке поделиться:', error));
    } else {
        navigator.clipboard.writeText(shareText + '\n' + window.location.href)
            .then(() => {
                alert('Информация о меме скопирована в буфер обмена!');
            })
            .catch(err => {
                console.error('Ошибка при копировании: ', err);
                // Fallback для старых браузеров
                const textArea = document.createElement('textarea');
                textArea.value = shareText + '\n' + window.location.href;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                alert('Информация о меме скопирована в буфер обмена!');
            });
    }
}

// Восстановление открытых карточек из localStorage
function restoreOpenedCards() {
    const today = getCurrentDate();
    if (today.getMonth() !== 11) return;
    
    const currentDay = today.getDate();
    
    for (let day = 1; day < currentDay; day++) {
        if (localStorage.getItem(`meme-day-${day}-opened`)) {
            const card = document.querySelector(`.card[data-day="${day}"]`);
            if (card) {
                card.classList.add('flipped');
                card.classList.remove('active');
                card.classList.add('past');
            }
        }
    }
}

// Инициализация
function init() {
    createCalendarCards();
    updateCountdown();
    restoreOpenedCards();
    setupGifControls();
    
    // Обновляем отсчёт каждую секунду
    setInterval(updateCountdown, 1000);
    
    // Обработчики событий
    closeModal.addEventListener('click', closeMemeModal);
    backBtn.addEventListener('click', closeMemeModal);
    shareBtn.addEventListener('click', shareMeme);
    
    // Закрытие модального окна при клике вне его
    memeModal.addEventListener('click', (e) => {
        if (e.target === memeModal) {
            closeMemeModal();
        }
    });
    
    // Закрытие модального окна при нажатии Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && memeModal.classList.contains('active')) {
            closeMemeModal();
        }
    });
    
    // Для демонстрации: кнопка для сброса localStorage
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Сбросить прогресс (для теста)';
    resetBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #ff4444;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 20px;
        cursor: pointer;
        z-index: 1000;
        font-size: 12px;
        opacity: 0.7;
        transition: opacity 0.3s;
    `;
    resetBtn.addEventListener('mouseenter', () => {
        resetBtn.style.opacity = '1';
    });
    resetBtn.addEventListener('mouseleave', () => {
        resetBtn.style.opacity = '0.7';
    });
    resetBtn.addEventListener('click', () => {
        localStorage.clear();
        alert('Прогресс сброшен. Перезагрузите страницу.');
    });
    document.body.appendChild(resetBtn);
}

// Запуск при загрузке страницы

document.addEventListener('DOMContentLoaded', init);
