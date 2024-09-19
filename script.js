document.addEventListener('DOMContentLoaded', () => {
    // 轮播图功能
    const carousel = document.querySelector('.carousel');
    const container = carousel.querySelector('.carousel-container');
    const images = carousel.querySelectorAll('.carousel-image');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    const indicators = carousel.querySelector('.carousel-indicators');

    let currentIndex = 0;

    // 创建指示器
    images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });

    function updateCarousel() {
        images.forEach((image, index) => {
            image.classList.toggle('active', index === currentIndex);
        });
        updateIndicators();
    }

    function updateIndicators() {
        const indicatorDots = indicators.querySelectorAll('.carousel-indicator');
        indicatorDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // 自动播放
    setInterval(nextSlide, 5000);

    // 模拟产品数据
    const products = [
        { name: '魅可口红', price: '￥199' },
        { name: '兰蔻粉底液', price: '￥499' },
        { name: 'YSL香水', price: '￥699' },
    ];

    // 动态添加产品
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>加入购物车</button>
        `;
        productList.appendChild(productElement);
    });

    // 处理联系表单提交
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('感谢您的留言，我们会尽快回复！');
        contactForm.reset();
    });
});