let speaker = document.querySelectorAll('.speaker');

const speakerOneBigger = () => {
  speaker[0].style.transform = 'scale(1.1)';
  speaker[1].style.transform = 'scale(0.75)';
  speaker[2].style.transform = 'scale(0.75)';
};
const speakerTwoBigger = () => {
  speaker[1].style.transform = 'scale(1.1)';
  speaker[0].style.transform = 'scale(0.75)';
  speaker[2].style.transform = 'scale(0.75)';
};
const speakerThreeBigger = () => {
  speaker[2].style.transform = 'scale(1.1)';
  speaker[0].style.transform = 'scale(0.75)';
  speaker[1].style.transform = 'scale(0.75)';
};
const speakerSmaller = () => {
  speaker[0].style.transform = 'scale(1)';
  speaker[1].style.transform = 'scale(1)';
  speaker[2].style.transform = 'scale(1)';
};

export const speakersFunction = () => {
  speaker[0].addEventListener('mouseover', speakerOneBigger);
  speaker[1].addEventListener('mouseover', speakerTwoBigger);
  speaker[2].addEventListener('mouseover', speakerThreeBigger);

  speaker.forEach(e => {
    e.addEventListener('mouseout', speakerSmaller);
  });
};
