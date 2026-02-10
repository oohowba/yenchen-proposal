// Custom Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1
    });
    gsap.to(follower, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.3
    });
});

document.addEventListener('mousedown', () => {
    gsap.to(cursor, { scale: 0.8, duration: 0.1 });
    gsap.to(follower, { scale: 1.5, duration: 0.1 });
});

document.addEventListener('mouseup', () => {
    gsap.to(cursor, { scale: 1, duration: 0.1 });
    gsap.to(follower, { scale: 1, duration: 0.1 });
});

// Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Animate Sections Title
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Animate Cards
gsap.utils.toArray('.card, .strategy-card, .benefit-item').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1, // Stagger effect
        ease: "back.out(1.7)"
    });
});

// Animate Timeline Items
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    const content = item.querySelector('.content');
    const badge = item.querySelector('.time-badge');
    
    gsap.from(content, {
        scrollTrigger: {
            trigger: item,
            start: "top 75%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(badge, {
        scrollTrigger: {
            trigger: item,
            start: "top 75%",
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "back.out(2)"
    });
});

// Hero Parallax
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    gsap.to('.hero h1', {
        x: x,
        y: y,
        duration: 2
    });
});
