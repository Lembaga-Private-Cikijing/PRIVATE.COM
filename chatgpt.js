document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // Debugging: cek apakah JS berjalan

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const navMenu = document.querySelector(".nav-links");
    const hamburger = document.getElementById("hamburger");

    if (!navMenu) {
        console.error("ERROR: nav-menu tidak ditemukan!");
    }
    if (!hamburger) {
        console.error("ERROR: hamburger tidak ditemukan!");
    }

    function changeActiveNav() {
        let fromTop = window.scrollY + 100;

        sections.forEach(section => {
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                let activeSection = section.getAttribute("id");

                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").includes(activeSection)) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // Fungsi Toggle Menu untuk Hamburger
    function toggleMenu(event) {
        event.preventDefault(); // Mencegah kejadian bawaan
        console.log("Hamburger diklik!"); // Debugging
        navMenu.classList.toggle("show");
    }

    // Menutup menu jika klik di luar menu atau memilih link
    function closeMenu(event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove("show");
        }
    }

    // Pastikan hamburger bisa diklik
    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
        document.addEventListener("click", closeMenu); // Tambahkan event listener di luar menu
    } else {
        console.error("ERROR: Tidak bisa menambahkan event listener ke hamburger!");
    }

    window.addEventListener("scroll", changeActiveNav);

    // === Swiper Carousel Initialization ===
    const swiper = new Swiper('.aboutog-carousel', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3
            }
        }
    });

    // Update your Swiper initialization in chatgpt.js
    const swiperTutor = new Swiper('.TBGCRSL', {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 20,
        navigation: {
        nextEl: '.TBGCRSL-next',
        prevEl: '.TBGCRSL-prev',
        },
        breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
        }
    });

    const monthYear = document.getElementById("monthYear");
    const calendarDates = document.getElementById("calendarDates");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let date = new Date();

    function renderCalendar() {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    monthYear.textContent = `${monthNames[month]} ${year}`;
    calendarDates.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
        calendarDates.innerHTML += `<div></div>`;
    }

    for (let d = 1; d <= lastDate; d++) {
        const isToday = d === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear();

        calendarDates.innerHTML += `<div class="${isToday ? "today" : ""}">${d}</div>`;
    }
    }

    prevBtn.onclick = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
    };

    nextBtn.onclick = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
    };

    renderCalendar();

});