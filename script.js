document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    // Single toggle function
    hamburger.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('active');
        hamburger.classList.toggle('active', isOpen);
    });

    // Close when clicking links
    document.querySelectorAll('#navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('.skills-section');
    
    function checkScroll() {
        const sectionTop = skillsSection.offsetTop;
        const sectionHeight = skillsSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition > sectionTop + 100) {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
            window.removeEventListener('scroll', checkScroll);
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Run once on load in case already visible
}

document.addEventListener('DOMContentLoaded', animateSkills);

document.addEventListener('DOMContentLoaded', function() {
    const professions = [
        { title: "IoT Engineer", prefix: "an" },
        { title: "Embedded Developer", prefix: "an" },
        { title: "Web Developer", prefix: "a" },
        { title: "VLSI Enthusiast", prefix: "a" },
        { title: "Chip Design Learner", prefix: "a" },
        { title: "Tech Problem Solver", prefix: "a" }
    ];
    
    const prefixElement = document.querySelector('.prefix');
    const professionElement = document.querySelector('.profession');
    let currentIndex = 0;
    let isDeleting = false;
    let text = '';
    let typingSpeed = 100;
    
    function typeWriter() {
        const currentProfession = professions[currentIndex];
        const fullText = currentProfession.title;
        
        // Update prefix with space handling
        prefixElement.textContent = currentProfession.prefix + " ";
        
        if (isDeleting) {
            text = fullText.substring(0, text.length - 1);
            typingSpeed = 50;
        } else {
            text = fullText.substring(0, text.length + 1);
            typingSpeed = 100;
        }
        
        professionElement.textContent = text;
        
        if (!isDeleting && text === fullText) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && text === '') {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % professions.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    
    setTimeout(typeWriter, 1000);
});
// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            navbar.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Smooth scroll
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
            
            // Update active nav item
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});
// Smooth scroll for logo
document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close mobile menu if open
    navbar.classList.remove('active');
    hamburger.classList.remove('active');
    
    // Scroll to top with animation
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Update active nav item
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector('nav a[href="#home"]').classList.add('active');
});

// Smooth scroll for Hire Me button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        window.scrollTo({
            top: contactSection.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
        });
        
        // Optional: Update active nav item
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector('nav a[href="#contact"]').classList.add('active');
    }
});

document.querySelector('.contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');
  
  // Show loading state
  btnText.textContent = 'Sending...';
  btnIcon.className = 'fas fa-spinner fa-spin';
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
      btnText.textContent = 'Sent!';
      btnIcon.className = 'fas fa-check';
      form.reset();
    } else {
      throw new Error('Failed to send');
    }
  } catch (error) {
    btnText.textContent = 'Retry';
    btnIcon.className = 'fas fa-exclamation-triangle';
  } finally {
    setTimeout(() => {
      btnText.textContent = 'Send Message';
      btnIcon.className = 'fas fa-paper-plane';
    }, 3000);
  }
});

