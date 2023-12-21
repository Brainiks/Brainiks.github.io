let currentSlide = 0;
        
            function showSlide(n) {
                const slides = document.querySelector('.slides');
                currentSlide = (n + slides.childElementCount) % slides.childElementCount;
                slides.style.transform = `translateX(${-currentSlide * 100}%)`;
            }
        
            function prevSlide() {
                showSlide(currentSlide - 1);
            }
        
            function nextSlide() {
                showSlide(currentSlide + 1);
            }
        
            document.getElementById('prev').addEventListener('click', prevSlide);
            document.getElementById('next').addEventListener('click', nextSlide);
        
            // Автоматическое перелистывание каждые 3 секунды
            setInterval(() => {
                nextSlide();
            }, 3000);