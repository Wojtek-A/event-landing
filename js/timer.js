export const timerFunction = () => {
  const currentDate = new Date();
  let date = new Date(2024, 10, 25);

  const dateIntreval = setInterval(() => {
    const todayDate = new Date();
    let ms = 0;

    function calculateDate() {
      if (date > todayDate) {
        return (ms = Math.abs(date - todayDate));
      } else ms = 0;
    }
    calculateDate();

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    function addLeadingZero(value) {
      if (value <= 9) {
        return String(value).padStart(2, '0');
      } else return value;
    }

    document.querySelector('#days').textContent = addLeadingZero(days);
    document.querySelector('#hours').textContent = addLeadingZero(hours);
    document.querySelector('#minutes').textContent = addLeadingZero(minutes);
    document.querySelector('#seconds').textContent = addLeadingZero(seconds);
  });
};
