function animateSkills() {
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    const percent = +skill.getAttribute('data-percent');
    const progressCircle = skill.querySelector('.progress');
    const percentageText = skill.querySelector('.percentage');
    let current = 0;

    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    const interval = setInterval(() => {
      if (current <= percent) {
        let offset = circumference - (current / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
        percentageText.textContent = `${current}%`;
        current++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  });
}

// Trigger animation on scroll
function isInViewport(elem) {
  const rect = elem.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  if (isInViewport(skillsSection) && !skillsSection.classList.contains('animated')) {
    skillsSection.classList.add('animated');
    animateSkills();
  }
});





    document.addEventListener("DOMContentLoaded", function () {
        const leftSection = document.querySelector('.second-left-section');
        const rightSection = document.querySelector('.second-right-section');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('second-left-section')) {
                        entry.target.classList.add('scroll-in-left');
                    }
                    if (entry.target.classList.contains('second-right-section')) {
                        entry.target.classList.add('scroll-in-right');
                    }
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(leftSection);
        observer.observe(rightSection);
    });

