// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const questionMark = document.querySelector('.question-mark');
    const input = document.querySelector('.neon-input');
    const submitBtn = document.querySelector('.submit-btn');
    
    // 为问号添加鼠标悬停效果
    questionMark.addEventListener('mouseover', function() {
        this.style.textShadow = `
            0 0 2px #fff,
            0 0 5px #fff,
            0 0 8px #fff,
            0 0 12px #fff,
            0 0 16px #0ff,
            0 0 20px #0ff,
            0 0 25px #0ff
        `;
        
        // 添加轻微的放大效果
        this.style.transform = 'translateY(-15px) scale(1.05)';
    });
    
    // 鼠标移出时恢复原样
    questionMark.addEventListener('mouseout', function() {
        this.style.textShadow = `
            0 0 2px #fff,
            0 0 5px #fff,
            0 0 8px #fff,
            0 0 12px #0ff,
            0 0 20px #0ff
        `;
        
        // 移除transform样式，回到原始动画状态
        this.style.transform = '';
    });
    
    // 为输入框添加事件
    input.addEventListener('focus', function() {
        // 增强荧光效果
        this.style.boxShadow = `
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 15px #0ff,
            0 0 20px #0ff,
            0 0 30px #0ff,
            0 0 40px #0ff
        `;
    });
    
    input.addEventListener('blur', function() {
        // 恢复原始荧光效果
        this.style.boxShadow = `
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 15px #0ff,
            0 0 20px #0ff
        `;
    });
    
    // 输入框键盘事件
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            submitResponse();
        }
    });
    
    // 提交按钮点击事件
    submitBtn.addEventListener('click', function() {
        submitResponse();
    });
    
    // 提交响应函数
    function submitResponse() {
        if (input.value.trim() !== '') {
            // 添加文字渐出效果
            const textElements = document.querySelectorAll('.fade-in-text');
            textElements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
                element.classList.remove('fade-in-text');
                element.classList.add('fade-out-text');
            });
            
            // 创建渐变过渡效果
            createTransitionEffect();
            
            // 延迟跳转
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }
    }
    
    // 创建渐变过渡效果
    function createTransitionEffect() {
        // 创建覆盖整个页面的渐变元素
        const transition = document.createElement('div');
        transition.style.position = 'fixed';
        transition.style.top = '0';
        transition.style.left = '0';
        transition.style.width = '100%';
        transition.style.height = '100%';
        transition.style.background = 'linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 255, 255, 0.2))';
        transition.style.zIndex = '9999';
        transition.style.pointerEvents = 'none';
        transition.style.opacity = '0';
        transition.style.transition = 'opacity 0.8s ease';
        
        // 添加到页面
        document.body.appendChild(transition);
        
        // 触发重排以启动动画
        transition.offsetHeight;
        
        // 设置淡入效果
        transition.style.opacity = '1';
        
        // 移除元素
        setTimeout(() => {
            document.body.removeChild(transition);
        }, 800);
    }
    
    // 创建随机的背景粒子
    createBackgroundParticles();
    
    function createBackgroundParticles() {
        // 创建一个容器来放置所有粒子
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.position = 'fixed';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.zIndex = '-1';
        particlesContainer.style.overflow = 'hidden';
        document.body.appendChild(particlesContainer);
        
        // 创建30个粒子
        for (let i = 0; i < 30; i++) {
            createParticle(particlesContainer);
        }
    }
    
    function createParticle(container) {
        // 创建单个粒子
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 设置随机位置、大小和动画持续时间
        const size = Math.random() * 3 + 1; // 1-4像素
        const posX = Math.random() * 100; // 0-100%
        const posY = Math.random() * 100; // 0-100%
        const duration = Math.random() * 50 + 30; // 30-80秒
        const delay = Math.random() * 5; // 0-5秒延迟
        
        // 设置样式
        particle.style.position = 'absolute';
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 3px #fff';
        
        // 设置动画
        particle.style.animation = `floatParticle ${duration}s linear ${delay}s infinite`;
        
        // 添加到容器
        container.appendChild(particle);
        
        // 添加动画关键帧到样式表
        if (!document.querySelector('#particle-keyframes')) {
            const style = document.createElement('style');
            style.id = 'particle-keyframes';
            style.innerHTML = `
                @keyframes floatParticle {
                    0% { transform: translate(0, 0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
}); 