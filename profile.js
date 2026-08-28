document.addEventListener('DOMContentLoaded', () => {
  const user = InterviewAI.getUser(); const name = document.querySelector('#profileName'); const email = document.querySelector('#profileEmail'); const role = document.querySelector('#profileRole'); const experience = document.querySelector('#profileExperience');
  name.value = user.name; email.value = user.email; role.value = user.role; experience.value = user.experience;
  document.querySelector('#profileForm').addEventListener('submit', event => { event.preventDefault(); const updated = { name: name.value.trim(), email: email.value.trim(), role: role.value, experience: experience.value }; InterviewAI.saveUser(updated); document.querySelector('#profileDisplayName').textContent = updated.name; document.querySelector('#profileDisplayRole').textContent = updated.role; document.querySelectorAll('#sideUser').forEach(el => el.textContent = updated.name); InterviewAI.showToast('Profile updated successfully'); });
});
