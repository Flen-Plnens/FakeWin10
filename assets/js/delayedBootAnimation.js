document.addEventListener('DOMContentLoaded', function() {
    const bootAnimation = document.querySelector('.boot-animation');
    
    // 延迟3秒后显示启动动画
    setTimeout(function() {
        bootAnimation.classList.add('show');
    }, 3000);
});