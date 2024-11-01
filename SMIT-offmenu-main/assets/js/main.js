document.addEventListener('DOMContentLoaded', () => {
  const letters = document.querySelectorAll('#loader .logo-text span');

  // GSAP animation for the letters
  gsap.fromTo(letters,
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1, // Delay between letters
      ease: "power2.out",
      onComplete: () => {
        // After animation, hide the loader and show content
        gsap.to('#loader', {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('content').style.display = 'block';

            AOS.init({
              duration: 1000
          });
          
          }
        });
      }
    }
  );
});

// end


