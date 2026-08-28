document.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('interviewai-progress') || '{}');
  if (saved.attempted) document.querySelector('#statQuestions').textContent = saved.attempted;
  if (saved.score) document.querySelector('#statScore').textContent = `${saved.score}%`;
  if (saved.mocks) document.querySelector('#statMocks').textContent = saved.mocks;
});
