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
            submitResponse();
        }
    });
    
    // 提交按钮点击事件
    submitBtn.addEventListener('click', function() {
        submitResponse();
    });
    
    // 提交响应函数
    function submitResponse() {
        const inputValue = input.value.trim();
        if (inputValue !== '') {
            // 检查是否有对应的跳转
            if (inputValue === '你' || inputValue === '我' || inputValue === '答案') {
                // 添加文字渐出效果
                const textElements = document.querySelectorAll('.fade-in-text');
                textElements.forEach((element, index) => {
                    element.style.animationDelay = `${index * 0.2}s`;
                    element.classList.remove('fade-in-text');
                    element.classList.add('fade-out-text');
                });
                
                // 创建渐变过渡效果
                createTransitionEffect();
                
                // 如果音乐正在播放，先停止音乐再跳转
                if (audioPlayer && !audioPlayer.paused) {
                    stopMusic();
                    
                    // 延长跳转时间，等待音乐渐隐完成
                    setTimeout(() => {
                        if (inputValue === '你') {
                            window.location.href = 'you.html';
                        } else if (inputValue === '我') {
                            window.location.href = 'answer.html';
                        } else if (inputValue === '答案') {
                            window.location.href = 'answer.html';
                        }
                    }, 1500); // 延长时间以确保音乐渐隐效果完成
                } else {
                    // 如果没有音乐播放，正常跳转
                    setTimeout(() => {
                        if (inputValue === '你') {
                            window.location.href = 'you.html';
                        } else if (inputValue === '我') {
                            window.location.href = 'answer.html';
                        } else if (inputValue === '答案') {
                            window.location.href = 'answer.html';
                        }
                    }, 1000);
                }
            } else if (inputValue === '问题是没问题') {
                // 播放音乐
                playMusic('dan.mp3');
                
                // 创建橘黄色氛围灯
                createAmbianceLight();
                
                // 创建音乐控制开关
                createMusicSwitch();
                
                // 清空输入框
                input.value = '';
            } else {
                // 创建红色闪烁效果
                createErrorFlashEffect();
            }
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

    // 创建错误闪烁效果
    function createErrorFlashEffect() {
        // 创建覆盖整个页面的闪烁元素
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = '0';
        flash.style.left = '0';
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        flash.style.zIndex = '9999';
        flash.style.pointerEvents = 'none';
        flash.style.transition = 'opacity 0.3s ease';
        
        // 添加到页面
        document.body.appendChild(flash);
        
        // 触发重排以启动动画
        flash.offsetHeight;
        
        // 设置闪烁效果
        flash.style.opacity = '1';
        
        // 移除元素
        setTimeout(() => {
            flash.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(flash);
            }, 300);
        }, 300);
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

    // 播放音乐
    let audioPlayer = null;
    let audioCurrentTime = 0; // 记录当前播放位置

    function playMusic(musicFile) {
        // 如果是首次播放，创建新的音频播放器
        if (!audioPlayer) {
            audioPlayer = new Audio(musicFile);
            
            // 监听音乐结束事件
            audioPlayer.addEventListener('ended', function() {
                // 移除开关和氛围灯
                const musicSwitch = document.querySelector('.music-switch-container');
                const ambianceLight = document.querySelector('.ambiance-light');
                
                if (musicSwitch) {
                    // 渐出开关
                    musicSwitch.style.opacity = '0';
                    setTimeout(() => {
                        if (musicSwitch.parentNode) {
                            musicSwitch.parentNode.removeChild(musicSwitch);
                        }
                    }, 500);
                }
                
                if (ambianceLight) {
                    // 渐出氛围灯
                    ambianceLight.style.opacity = '0';
                    setTimeout(() => {
                        if (ambianceLight.parentNode) {
                            ambianceLight.parentNode.removeChild(ambianceLight);
                        }
                    }, 500);
                }
                
                audioCurrentTime = 0;
            });
        }
        
        // 如果已经创建了播放器，从记录的时间点继续播放
        if (audioCurrentTime > 0) {
            audioPlayer.currentTime = audioCurrentTime;
        }
        
        // 添加音量渐入效果
        audioPlayer.volume = 0;
        
        // 播放音乐
        const playPromise = audioPlayer.play();
        
        // 处理播放可能的异常
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error("播放失败:", error);
            });
        }
        
        // 渐入音量
        let volume = 0;
        const fadeIn = setInterval(() => {
            volume += 0.05;
            if (volume >= 0.8) {
                volume = 0.8;
                clearInterval(fadeIn);
            }
            audioPlayer.volume = volume;
        }, 100);
    }

    // 停止音乐
    function stopMusic() {
        if (!audioPlayer) return;
        
        // 渐出音量
        let volume = audioPlayer.volume;
        const fadeOut = setInterval(() => {
            volume -= 0.05;
            if (volume <= 0) {
                volume = 0;
                clearInterval(fadeOut);
                audioPlayer.pause();
                
                // 在音量渐弱完成后记录当前播放位置
                audioCurrentTime = audioPlayer.currentTime;
            }
            audioPlayer.volume = volume;
        }, 100);
    }

    // 创建橘黄色氛围灯
    function createAmbianceLight() {
        // 移除已有的氛围灯
        const existingLight = document.querySelector('.ambiance-light');
        if (existingLight) {
            existingLight.parentNode.removeChild(existingLight);
        }
        
        // 创建氛围灯
        const ambianceLight = document.createElement('div');
        ambianceLight.className = 'ambiance-light';
        ambianceLight.style.position = 'fixed';
        ambianceLight.style.top = '0';
        ambianceLight.style.left = '0';
        ambianceLight.style.width = '100%';
        ambianceLight.style.height = '100%';
        ambianceLight.style.background = 'radial-gradient(circle at center, rgba(255, 140, 0, 0.3), rgba(255, 69, 0, 0.15))'; // 更橘红色的夕阳色调
        ambianceLight.style.pointerEvents = 'none';
        ambianceLight.style.zIndex = '5';
        ambianceLight.style.opacity = '0';
        ambianceLight.style.transition = 'opacity 1s ease';
        
        // 添加到页面
        document.body.appendChild(ambianceLight);
        
        // 触发重排以启动动画
        ambianceLight.offsetHeight;
        
        // 设置淡入效果
        ambianceLight.style.opacity = '1';
    }

    // 创建音乐控制开关
    function createMusicSwitch() {
        // 移除已有的开关
        const existingSwitch = document.querySelector('.music-switch-container');
        if (existingSwitch) {
            existingSwitch.parentNode.removeChild(existingSwitch);
        }
        
        // 创建开关容器
        const switchContainer = document.createElement('div');
        switchContainer.className = 'music-switch-container';
        switchContainer.style.position = 'fixed';
        switchContainer.style.top = '0';
        switchContainer.style.right = '50px';
        switchContainer.style.width = '2px';
        switchContainer.style.height = '120px';
        switchContainer.style.zIndex = '1000';
        switchContainer.style.cursor = 'pointer';
        switchContainer.style.opacity = '0';
        switchContainer.style.transition = 'opacity 0.5s ease';
        
        // 创建开关线
        const switchLine = document.createElement('div');
        switchLine.className = 'switch-line';
        switchLine.style.position = 'absolute';
        switchLine.style.top = '0';
        switchLine.style.left = '50%';
        switchLine.style.transform = 'translateX(-50%)';
        switchLine.style.width = '1px';
        switchLine.style.height = '100%';
        switchLine.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.9))';
        switchLine.style.zIndex = '999';
        switchLine.style.transition = 'all 0.2s ease';
        
        // 创建开关球（改为柱形）
        const switchBall = document.createElement('div');
        switchBall.className = 'music-switch-ball';
        switchBall.style.position = 'absolute';
        switchBall.style.bottom = '0';
        switchBall.style.left = '50%';
        switchBall.style.transform = 'translateX(-50%)';
        switchBall.style.width = '12px';  // 改为更窄的宽度
        switchBall.style.height = '30px'; // 改为更长的高度
        switchBall.style.borderRadius = '6px'; // 圆角改为高度的一半
        switchBall.style.backgroundColor = '#fff';
        switchBall.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
        switchBall.style.cursor = 'pointer';
        switchBall.style.transition = 'all 0.2s ease';
        
        // 添加到容器
        switchContainer.appendChild(switchLine);
        switchContainer.appendChild(switchBall);
        
        // 添加到页面
        document.body.appendChild(switchContainer);
        
        // 触发重排以启动动画
        switchContainer.offsetHeight;
        
        // 设置淡入效果
        switchContainer.style.opacity = '1';
        
        // 添加拖动功能
        let isDragging = false;
        let isMusicPlaying = true;
        let initialY = 0;
        const originalHeight = switchContainer.offsetHeight;
        
        // 添加冷却机制
        let isCooldown = false;
        const cooldownTime = 1500; // 冷却时间1.5秒
        
        // 为整个开关容器添加点击事件
        switchContainer.addEventListener('click', function(e) {
            // 阻止事件冒泡
            e.stopPropagation();
            
            // 检查是否在冷却中
            if (isCooldown) {
                // 如果在冷却中，显示轻微的视觉反馈
                switchBall.style.opacity = '0.5';
                setTimeout(() => {
                    switchBall.style.opacity = '1';
                }, 200);
                return;
            }
            
            // 设置冷却
            isCooldown = true;
            
            // 执行音乐切换
            toggleMusicState();
            
            // 冷却时间后解除冷却
            setTimeout(() => {
                isCooldown = false;
            }, cooldownTime);
        });
        
        // 开关球鼠标按下事件
        switchBall.addEventListener('mousedown', function(e) {
            // 检查是否在冷却中
            if (isCooldown) return;
            
            isDragging = true;
            initialY = e.clientY;
            e.preventDefault();
            e.stopPropagation();
        });
        
        // 鼠标移动事件
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            // 计算拖动位置（相对于开关容器）
            const containerRect = switchContainer.getBoundingClientRect();
            let newY = e.clientY - containerRect.top;
            
            // 限制在容器内
            newY = Math.max(0, Math.min(newY, originalHeight));
            
            // 移动开关球
            const ballPosition = originalHeight - newY;
            switchBall.style.bottom = `${ballPosition}px`;
            
            // 调整线的高度，使其从顶部延伸到开关球的顶部
            const lineHeight = originalHeight - ballPosition - switchBall.offsetHeight;
            switchLine.style.height = `${lineHeight}px`;
        });
        
        // 鼠标松开事件
        document.addEventListener('mouseup', function(e) {
            if (!isDragging) return;
            isDragging = false;
            
            // 检查是否在冷却中
            if (isCooldown) return;
            
            // 决定开关状态，如果拖动超过10px才触发切换
            if (Math.abs(e.clientY - initialY) > 10) {
                // 判断方向
                if (e.clientY > initialY) {
                    // 向下拖动，关闭音乐
                    if (isMusicPlaying) {
                        // 设置冷却
                        isCooldown = true;
                        toggleMusicState();
                        
                        // 冷却时间后解除冷却
                        setTimeout(() => {
                            isCooldown = false;
                        }, cooldownTime);
                    }
                } else {
                    // 向上拖动，开启音乐
                    if (!isMusicPlaying) {
                        // 设置冷却
                        isCooldown = true;
                        toggleMusicState();
                        
                        // 冷却时间后解除冷却
                        setTimeout(() => {
                            isCooldown = false;
                        }, cooldownTime);
                    }
                }
            }
            
            // 动画回到原位
            animateSwitchToPosition(isMusicPlaying);
        });
        
        // 切换音乐播放状态函数
        function toggleMusicState() {
            if (isMusicPlaying) {
                // 关闭音乐
                stopMusic();
                isMusicPlaying = false;
                
                // 播放拉动动画
                animatePullDown(function() {
                    switchBall.style.backgroundColor = '#aaa';
                    switchBall.style.boxShadow = '0 0 5px rgba(170, 170, 170, 0.5)';
                    animateSwitchToPosition(false);
                });
            } else {
                // 打开音乐
                playMusic('dan.mp3');
                isMusicPlaying = true;
                
                // 播放拉动动画
                animatePullDown(function() {
                    switchBall.style.backgroundColor = '#fff';
                    switchBall.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
                    animateSwitchToPosition(true);
                });
            }
        }
        
        // 开关拉动动画
        function animatePullDown(callback) {
            // 向下拉动
            switchBall.style.transition = 'bottom 0.15s ease-in';
            
            // 拉到中间位置
            switchBall.style.bottom = '25px';
            
            // 调整线的高度，使其从顶部延伸到开关球的顶部
            switchLine.style.transition = 'height 0.15s ease-in';
            switchLine.style.height = `${originalHeight - 25 - switchBall.offsetHeight}px`;
            
            setTimeout(function() {
                if (callback) callback();
            }, 150);
        }
        
        // 动画回到原位
        function animateSwitchToPosition(isOn) {
            switchBall.style.transition = 'bottom 0.15s ease-out';
            switchLine.style.transition = 'height 0.15s ease-out';
            
            if (isOn) {
                // 开启状态 - 球在底部
                switchBall.style.bottom = '0';
                // 线从顶部延伸到开关球的顶部
                switchLine.style.height = `${originalHeight - switchBall.offsetHeight}px`;
            } else {
                // 关闭状态 - 球在顶部
                switchBall.style.bottom = `${originalHeight - 30}px`; // 减去开关球的高度
                // 线缩短，只显示一小部分
                switchLine.style.height = '0';
            }
        }
        
        // 初始化线的高度
        switchLine.style.height = `${originalHeight - switchBall.offsetHeight}px`;
    }
}); 