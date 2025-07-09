document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  }

  // Außerhalb des Menüs klicken, um es zu schließen
  document.addEventListener('click', function(event) {
    if (!event.target.closest('nav') && !event.target.closest('.mobile-toggle')) {
      if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
      }
    }
  });

  // Galerie-Modal für Bilder
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content img');
  const closeModal = document.querySelector('.close-modal');

  if (galleryItems.length > 0 && modal && modalImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Verhindert Scrollen im Hintergrund
      });
    });

    // Modal schließen
    if (closeModal) {
      closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Scrollen wieder aktivieren
      });
    }

    // Modal schließen bei Klick außerhalb des Bildes
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });

    // Escape-Taste zum Schließen des Modals
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Formularvalidierung
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Hier könnten Sie weitere Validierungen hinzufügen
      alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
      contactForm.reset();
    });
  }
});
