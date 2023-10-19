const button = document.querySelector('.btn-to-top');

window.onscroll = function() {
  showScrollBtn();
};

export const showScrollBtn = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
};

export const scrollUpFunction = () => {
  const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  button.addEventListener('click', scrollUp);
};
