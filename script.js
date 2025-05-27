// // Simulate Google Analytics tracking with gtag
// // Replace with: gtag('event', 'event_name'); when using real GA setup

// // Page Load
// window.addEventListener('load', () => {
//   gtag('event', 'page_loaded');
// });

// // Track button clicks (e.g., Home, About, Contact)
// function trackClick(tag) {
//   gtag('event', `${tag}_clicked`);
// }

// // Video Play
// const video = document.querySelector("video");
// if (video) {
//   video.addEventListener("play", () => {
//     gtag('event', 'video_played');
//   });
//   video.addEventListener("pause", () => {
//     gtag('event', 'video_paused');
//   });
// }

// // Form Submission
// function submitForm() {
//   const form = document.getElementById("contactForm");
//   const formData = new FormData(form);
//   gtag('event', 'form_submitted');
//   alert("Thanks, your message was sent!");
//   form.reset();
// }

// // Track focus on form fields
// const formInputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
// formInputs.forEach(input => {
//   input.addEventListener("focus", () => {
//     gtag('event', `${input.name}_entered`);
//   });
// });

// // File Upload
// const fileInput = document.getElementById("fileInput");
// if (fileInput) {
//   fileInput.addEventListener("change", () => {
//     const fileName = fileInput.files[0]?.name || 'unknown';
//     gtag('event', `file_uploaded - ${fileName}`);
//   });
// }

// Simulate Google Analytics tracking with gtag
// Replace with: gtag('event', 'event_name'); when using real GA setup

// Page Load
window.addEventListener('load', () => 
  { 
    gtag('event', 'page_loaded');
  });

// Track button clicks (e.g., Home, About, Contact)
function trackClick(tag) 
{
  gtag('event', 'button_click_type', {'button_click_type': `${tag}_clicked`});
}

// Video Play
const video = document.querySelector("video");
if (video) 
{
  video.addEventListener("play", () => 
    { 
      gtag('event', 'video_play_count', {'video_play_count': 1});
      gtag('event', 'video_play_status',{'video_play_status': 'played'});
    });
  
   video.addEventListener("pause", () => 
     {
       gtag('event', 'video_play_status', {'video_play_status': 'paused'});
     });
}

// Form Submission
function submitForm() 
{
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);
  gtag('event', 'form_submissions', {'form_submissions': 1});
  alert("Thanks, your message was sent!");
  form.reset();
}

// Track focus on form fields
const formInputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
formInputs.forEach(input => 
  {
    input.addEventListener("focus", () => 
      {
        gtag('event', 'entered_form_field', {'entered_form_field': input.name});
      });
  });

// File Upload
const fileInput = document.getElementById("fileInput");
if (fileInput) 
{
  fileInput.addEventListener("change", () => 
    { 
      const fileName = fileInput.files[0]?.name || 'unknown';
      gtag('event', `file_uploaded - ${fileName}`);
    });
}
