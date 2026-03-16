/**
 * PagarMEI Landing Page - Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar scroll behaviour
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
    }, { passive: true });

    // 2. Intersection Observer — fade-up reveal + counter trigger
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    // Counter animation helper
    const animateCounter = (el) => {
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;
        const duration = 1800; // ms
        const startTime = performance.now();

        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target).toLocaleString('pt-BR');
            if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger counter for any [data-target] descendants
                entry.target.querySelectorAll('.stat-number[data-target]').forEach(animateCounter);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

    // 3. Hero Chat Simulation
    const runChatSequence = () => {
        const typing1 = document.getElementById('chat-typing-1');
        const msg1    = document.getElementById('chat-msg-1');
        const msg2    = document.getElementById('chat-msg-2');
        const typing2 = document.getElementById('chat-typing-2');
        const msg3    = document.getElementById('chat-msg-3');

        if (!typing1) return;

        // t=1500ms: show first assistant message
        setTimeout(() => {
            typing1.classList.add('hidden');
            msg1.classList.remove('hidden');

            // t+1200ms: user replies
            setTimeout(() => {
                msg2.classList.remove('hidden');

                // t+800ms: assistant starts generating
                setTimeout(() => {
                    typing2.classList.remove('hidden');

                    // t+1800ms: assistant sends file
                    setTimeout(() => {
                        typing2.classList.add('hidden');
                        msg3.classList.remove('hidden');

                        const chatArea = document.getElementById('hero-chat');
                        if (chatArea) chatArea.scrollTop = chatArea.scrollHeight;
                    }, 1800);
                }, 800);
            }, 1200);
        }, 1500);
    };

    setTimeout(runChatSequence, 1000);

    // 4. Monitoring Chat Sequence — triggered when section enters viewport
    let monitoringTriggered = false;

    const runMonitoringSequence = () => {
        const msg1    = document.getElementById('mon-msg-1');
        const msg2    = document.getElementById('mon-msg-2');
        const typing3 = document.getElementById('mon-typing-3');
        const msg3    = document.getElementById('mon-msg-3');
        const msg4    = document.getElementById('mon-msg-4');

        if (!msg1) return;

        // t=400ms: DAS alert arrives
        setTimeout(() => {
            msg1.classList.remove('mon-hidden');

            // t+1400ms: User replies
            setTimeout(() => {
                msg2.classList.remove('mon-hidden');

                // t+600ms: Typing indicator
                setTimeout(() => {
                    typing3.classList.remove('mon-hidden');

                    // t+1500ms: Boleto arrives
                    setTimeout(() => {
                        typing3.classList.add('mon-hidden');
                        msg3.classList.remove('mon-hidden');

                        // t+1200ms: CNPJ status check
                        setTimeout(() => {
                            msg4.classList.remove('mon-hidden');
                            const chatArea = document.getElementById('monitoring-chat');
                            if (chatArea) chatArea.scrollTop = chatArea.scrollHeight;
                        }, 1200);
                    }, 1500);
                }, 600);
            }, 1400);
        }, 400);
    };

    const monitoringSection = document.getElementById('monitoramento');
    if (monitoringSection) {
        const monObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !monitoringTriggered) {
                    monitoringTriggered = true;
                    runMonitoringSequence();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        monObserver.observe(monitoringSection);
    }

    // 5. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
