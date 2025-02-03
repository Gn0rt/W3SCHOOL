const navbar = document.querySelector(".header__navbar-icon")
const dropdown = document.querySelector(".header__dropdow")
console.log(navbar)
const backToTopBtn = document.querySelector(".backToTop")
navbar.addEventListener('click', function (e) {
    e.stopPropagation(); // Ngăn chặn sự kiện click lan đến document
    dropdown.classList.toggle('active'); // Thêm/xóa class 'active'
    navbar.style.backgroundColor = '#000'
    navbar.style.color = '#fff'
    if (!dropdown.classList.contains('active')) {
        navbar.style.backgroundColor = 'transparent'
        navbar.style.color = '#555'
    }

})

// Ẩn menu khi nhấn vào vùng bên ngoài
document.addEventListener('click', (event) => {
    if (dropdown.classList.contains('active') && !dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
        navbar.style.backgroundColor = 'transparent'
        navbar.style.color = '#555'
    }
});


// Cuộn về đầu trang khi nhấn vào nút
backToTopBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt mà
    });
});

