const toggleButtons = document.querySelectorAll('[data-toggle-profile]');

for (const button of toggleButtons) {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-toggle-profile');
    const target = document.getElementById(targetId);
    if (target) {
      target.classList.toggle('show');
      button.textContent = target.classList.contains('show')
        ? 'Hide profile'
        : 'Show profile';
    }
  });
}

const availabilityToggle = document.querySelector('[data-availability-toggle]');
if (availabilityToggle) {
  availabilityToggle.addEventListener('change', (event) => {
    const showAvailableOnly = event.target.checked;
    document.querySelectorAll('[data-availability]').forEach((card) => {
      const isAvailable = card.getAttribute('data-availability') === 'available';
      card.style.display = !showAvailableOnly || isAvailable ? 'flex' : 'none';
    });
  });
}

const bookingForm = document.querySelector('[data-booking-form]');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    const form = event.target;
    const requiredFields = form.querySelectorAll('[required]');
    let valid = true;
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        valid = false;
      }
    });
    if (!valid) {
      event.preventDefault();
      alert('Please complete all required fields.');
    }
  });
}

const adminNotice = document.querySelector('.admin-notice');
if (adminNotice && window.location.protocol === 'file:') {
  adminNotice.textContent = '管理员入口：请通过服务器访问 /admin（本地文件模式不可用）';
}
