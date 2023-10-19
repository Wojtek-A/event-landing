const nextIcon = document.querySelector('.moments__icon--right');
const prevIcon = document.querySelector('.moments__icon--left');
const visitors = document.querySelectorAll('.visitor');
const dots = document.querySelectorAll('.moments__dot');
let current = 0;

const changeVisitor = () => {
  visitors.forEach(visitor => {
    visitor.classList.replace('visitor--active', 'visitor--hidden');
  });
  visitors[current].classList.replace('visitor--hidden', 'visitor--active');
};
const changeDot = () => {
  dots.forEach(dot => {
    dot.classList.add('moments__dot--covered');
  });
  dots[current].classList.remove('moments__dot--covered');
};

const hideIcon = () => {
  if (current == 0) {
    prevIcon.classList.add('moments__icon--hidden');
    nextIcon.classList.remove('moments__icon--hidden');
  } else if (current > 0 && current < visitors.length - 1) {
    prevIcon.classList.remove('moments__icon--hidden');
    nextIcon.classList.remove('moments__icon--hidden');
  } else nextIcon.classList.add('moments__icon--hidden');
};

const goNextHandler = () => {
  if (current < visitors.length - 1) {
    current++;
  }
  changeVisitor();
  hideIcon();
  changeDot();
};

const goPrevHandler = () => {
  if (current > 0) {
    current--;
  }
  changeVisitor();
  hideIcon();
  changeDot();
};
export const momentsFunction = () => {
  nextIcon.addEventListener('click', goNextHandler);
  prevIcon.addEventListener('click', goPrevHandler);
};
