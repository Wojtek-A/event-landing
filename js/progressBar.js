const bar = document.querySelector('.progress-bar');

const processScroll = () => {
  const docElem = document.documentElement;
  const docBody = document.body;

  const scrollTop = docElem['scrollTop'] || docBody['scrollTop'];
  const scrollBottom =
    (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight;

  const scrollPercent = (scrollTop / scrollBottom) * 100 + '%';

  bar.style.setProperty('--scrollAmount', scrollPercent);
};

export const progressBar = () => {
  document.addEventListener('scroll', processScroll);
};
