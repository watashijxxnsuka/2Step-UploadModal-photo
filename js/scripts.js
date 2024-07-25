document.addEventListener('DOMContentLoaded', () => {
  const openModalButton = document.getElementById('openModal');
  const closeModalButton = document.getElementById('closeModal');
  const modal = document.getElementById('modal');
  const steps = document.querySelectorAll('.step');
  const toStep2Button = document.getElementById('toStep2');
  const backToStep1Button = document.getElementById('backToStep1');
  const submitButton = document.getElementById('submit');
  const imageFileInput = document.getElementById('imageFile');
  const imagePreview = document.getElementById('imagePreview');
  const imagePreviewStep2 = document.getElementById('imagePreviewStep2');

  let currentStep = 0;

  openModalButton.addEventListener('click', () => {
      modal.style.display = 'block';
  });

  closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });

  function showStep(stepIndex) {
      steps.forEach((step, index) => {
          step.style.display = index === stepIndex ? 'block' : 'none';
      });
  }
  
  toStep2Button.addEventListener('click', () => {
      currentStep = 1;
      showStep(currentStep);
      imagePreviewStep2.src = imagePreview.src;
  });
  
  backToStep1Button.addEventListener('click', () => {
      currentStep = 0;
      showStep(currentStep);
  });

  submitButton.addEventListener('click', () => {
      alert('Files Submitted!');
      modal.style.display = 'none';
  });

  imageFileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
              imagePreview.src = e.target.result;
              imagePreview.style.display = 'block';
          };
          reader.readAsDataURL(file);
      }
  });

  showStep(currentStep);
});
