document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('#questionList');
  const search = document.querySelector('#questionSearch');
  const category = document.querySelector('#categoryFilter');
  const difficulty = document.querySelector('#difficultyFilter');
  const count = document.querySelector('#questionCount');
  function render() {
    const term = search.value.toLowerCase();
    const filtered = InterviewAI.questions.filter(item => (category.value === 'All' || item.category === category.value) && (difficulty.value === 'All' || item.difficulty === difficulty.value) && `${item.question} ${item.category}`.toLowerCase().includes(term));
    count.textContent = `Showing ${filtered.length} question${filtered.length === 1 ? '' : 's'}`;
    list.innerHTML = filtered.map(item => `<article class="question-card"><div class="question-card-top"><span class="tag tag-violet">${item.category}</span><span class="tag">${item.difficulty}</span></div><h3>${item.question}</h3><p>Take a moment to formulate your answer before revealing the signal.</p><button class="answer-toggle" data-id="${item.id}">Reveal answer +</button><div class="question-answer hidden" id="answer-${item.id}"><strong>${item.answer}</strong><br>${item.explanation}</div></article>`).join('') || '<div class="panel"><p class="muted">No questions match those filters. Try widening your set.</p></div>';
    list.querySelectorAll('.answer-toggle').forEach(button => button.addEventListener('click', () => { const answer = document.querySelector(`#answer-${button.dataset.id}`); answer.classList.toggle('hidden'); button.textContent = answer.classList.contains('hidden') ? 'Reveal answer +' : 'Hide answer −'; }));
  }
  [search, category, difficulty].forEach(input => input.addEventListener('input', render));
  document.querySelector('#resetFilters').addEventListener('click', () => { search.value = ''; category.value = 'All'; difficulty.value = 'All'; render(); });
  render();
});
