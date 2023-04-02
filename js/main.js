const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = star.getAttribute('data-value');
    // Save the value to your database or do something else with it
    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i < value; i++) {
      stars[i].classList.add('active');
    }
  });
});