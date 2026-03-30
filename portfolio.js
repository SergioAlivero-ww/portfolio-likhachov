 const ham = document.getElementById('ham');
  const links = document.getElementById('links');

  ham.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  links.addEventListener('mouseover', () => {
    links.classList.add('brr');
  });
  links.addEventListener('mouseout', () => {
    links.classList.remove('brr');
  });