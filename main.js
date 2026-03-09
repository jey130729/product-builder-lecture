// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

const updateLabel = (theme) => {
  themeLabel.textContent = theme === 'dark' ? 'Light' : 'Dark';
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateLabel(newTheme);
};

// Initialize theme
const currentTheme = document.documentElement.getAttribute('data-theme');
updateLabel(currentTheme);
themeToggle.addEventListener('click', toggleTheme);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    updateLabel(newTheme);
  }
});

// Form Submission Logic
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('.submit-btn');
    
    // UI state: Loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatus.textContent = 'Processing your inquiry...';
    formStatus.className = 'form-status';

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formStatus.textContent = 'Thank you! Your inquiry has been sent successfully.';
        formStatus.classList.add('success');
        contactForm.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          formStatus.textContent = data['errors'].map(error => error['message']).join(', ');
        } else {
          formStatus.textContent = 'Oops! There was a problem submitting your form.';
        }
        formStatus.classList.add('error');
      }
    } catch (error) {
      formStatus.textContent = 'Oops! There was a problem submitting your form.';
      formStatus.classList.add('error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Inquiry';
    }
  });
}

console.log('Modern Web App Initialized');
