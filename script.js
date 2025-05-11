// getting all elements to be fill
const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');
const imageInput = document.getElementById('imageInput');

//getting all elements previewed
const previewName = document.getElementById('previewName');
const previewMessage = document.getElementById('previewMessage');
const previewImage = document.getElementById('previewImage');

nameInput.addEventListener('input', () => {
  previewName.textContent = `- ${nameInput.value || "Your name"}`;
});

messageInput.addEventListener('input', () => {
  previewMessage.textContent = messageInput.value || "Your message will appear here.";
});

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    previewImage.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  }
});


// export images --
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', () => {
  const card = document.getElementById('cardPreview');

  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'mothers-day-card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
