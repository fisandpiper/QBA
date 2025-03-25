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
    
    // 为问号添加点击效果
    questionMark.addEventListener('click', function() {
        // 创建闪光效果
        createFlashEffect();
        
        // 设置随机提示问题
        const questions = [
            "再见",
            "吃了吗",
            "晚安",
            "想你",
            "为什么",
            "怎么办",
            "何必呢",
            "听说",
            "可能吧",
            "有时候",
            "偶尔",
            "无聊",
            "发呆",
            "梦境",
            "记忆",
            "思念",
            "等待",
            "未来",
            "昨天",
            "今天",
            "明天",
            "或许",
            "也许",
            "星空",
            "大海",
            "心情",
            "感觉",
            "时间",
            "空间",
            "距离",
            "自由",
            "孤独",
            "快乐",
            "悲伤",
            "希望",
            "绝望",
            "宇宙",
            "黑洞",
            "花开花落",
            "来来往往",
            "鸡翅包饭",
            "云朵",
            "风",
            "雨",
            "雪",
            "暖阳",
            "月光",
            "星辰",
            "沉默",
            "回忆",
            "我思故我在",
            "存在先于本质",
            "人是社会关系的总和",
            "生活需要仪式感",
            "认识你自己",
            "相逢的人会再相逢",
            "物是人非",
            "人生如梦",
            "此岸彼岸",
            "知行合一",
            "天人合一",
            "生而为人",
            "尘埃落定",
            "一切皆有可能",
            "真理总是具体的",
            "自由不是免于...",
            "世界是可解释的",
            "必须想象西西弗斯是幸福的",
            "人不能两次踏进同一条河流",
            "上帝已死"
        ];
        
        // 随机选择一个问题
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        
        // 设置输入框的占位符文本
        input.placeholder = randomQuestion;
        
        // 聚焦到输入框
        setTimeout(() => {
            input.focus();
        }, 500);
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
            submitQuestion();
        }
    });
    
    // 提交按钮点击事件
    submitBtn.addEventListener('click', function() {
        submitQuestion();
    });
    
    // 提交问题函数
    function submitQuestion() {
        if (input.value.trim() !== '') {
            // 如果输入了内容，创建闪光效果
            createFlashEffect();
            
            // 清空输入框
            setTimeout(() => {
                input.value = '';
                input.placeholder = '在这里输入你的问题...';
            }, 300);
        }
    }
    
    // 创建闪光效果
    function createFlashEffect() {
        // 创建覆盖整个页面的闪光元素
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = '0';
        flash.style.left = '0';
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        flash.style.zIndex = '9999';
        flash.style.pointerEvents = 'none';
        flash.style.transition = 'opacity 0.5s ease';
        
        // 添加到页面
        document.body.appendChild(flash);
        
        // 设置淡出效果
        setTimeout(() => {
            flash.style.opacity = '0';
        }, 50);
        
        // 移除元素
        setTimeout(() => {
            document.body.removeChild(flash);
        }, 500);
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