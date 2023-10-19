const list = document.querySelector('.schedule-calendar__time-list');
let date = Array.from(document.querySelectorAll('.schedule-calendar__day'));
const line = document.querySelector('.schedule-calendar__day-line');

export const scheduleFunction = () => {
  date[0].addEventListener('mouseover', displayDateOne);
  date[1].addEventListener('mouseover', displayDateTwo);
  date[2].addEventListener('mouseover', displayDateThree);
};
function displayDateOne() {
  date[0].style.color = '#ffcf96';
  date[0].style.opacity = 'unset';
  date[1].style.color = '#fff';
  date[1].style.opacity = '0.3';
  date[2].style.color = '#fff';
  date[2].style.opacity = '0.3';

  line.style.left = '0';
  line.style.width = '170px';

  list.innerHTML = dayOne;
}
function displayDateTwo() {
  date[1].style.color = '#ffcf96';
  date[1].style.opacity = 'unset';
  date[0].style.color = '#fff';
  date[0].style.opacity = '0.3';
  date[2].style.color = '#fff';
  date[2].style.opacity = '0.3';

  line.style.left = '225px';
  line.style.width = '170px';

  list.innerHTML = dayTwo;
}
function displayDateThree() {
  date[2].style.color = '#ffcf96';
  date[2].style.opacity = 'unset';
  date[0].style.color = '#fff';
  date[0].style.opacity = '0.3';
  date[1].style.color = '#fff';
  date[1].style.opacity = '0.3';

  line.style.left = '455px';
  line.style.width = '188px';

  list.innerHTML = dayThree;
}
const dayOne =
  '<div class="schedule-calendar__time-list">\
      <div class="schedule-calendar__time-list-vertical-line"></div>\
      <ul>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">8:00 - 9:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Registration & Coffee</h4>\
            <p>\
              Register your personal data in customer service and take coffee\
              before entering the room\
            </p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">09:00 - 12:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Plan & Conduct User Research</h4>\
            <p>\
              Many early researchers are challanged by aspect of the design and\
              implementation of research studies as well the efective\
              dissemunation.\
            </p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">12:00 - 13:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Q&A For Speaker</h4>\
            <p>\
              Register your personal data in customer service and take coffee\
              before entering the room\
            </p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">13:00 - 14:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Launch Break</h4>\
            <p>Enjoy your meal!</p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">14:00 - 16:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Research For The Right Thing</h4>\
            <p>\
              Research encompasses a cariety of investigative methods used to\
              add context and insight to the design process\
            </p>\
          </div>\
        </li>\
      </ul>\
    </div>';

const dayTwo =
  '<div class="schedule-calendar__time-list">\
      <div class="schedule-calendar__time-list-vertical-line"></div>\
      <ul>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">9:00 - 10:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Opening of the meetinge</h4>\
            <p>\
              Register your personal data in customer service and take coffee\
              before entering the room\
            </p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">10:00 - 12:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Plan And Conduct Interviews With Users</h4>\
            <p>\
              Many early researchers are challanged by aspect of the design and\
              implementation of research studies as well the efective\
              dissemunation.\
            </p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">12:00 - 13:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Q&A For Speaker</h4>\
            <p>\
              Register your personal data in customer service and take coffee\
              before entering the room\
            </p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">13:00 - 14:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Launch Break</h4>\
            <p>Enjoy your meal!</p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">14:00 - 16:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Research to find the right person</h4>\
            <p>\
              Research encompasses a cariety of investigative methods used to\
              add context and insight to the design process\
            </p>\
          </div>\
        </li>\
      </ul>\
    </div>';

const dayThree =
  '<div class="schedule-calendar__time-list">\
      <div class="schedule-calendar__time-list-vertical-line"></div>\
      <ul>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">9:00 - 10:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Opening of the meetinge</h4>\
            <p>\
              Register your personal data in customer service and take coffee\
              before entering the room\
            </p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">10:00 - 12:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Plan & Conduct User Research</h4>\
            <p>\
              Many early researchers are challanged by aspect of the design and\
              implementation of research studies as well the efective\
              dissemunation.\
            </p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">12:00 - 13:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Q&A For Speaker</h4>\
            <p>\
              Register your personal data in customer service and take coffee\
              before entering the room\
            </p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">13:00 - 14:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Launch Break</h4>\
            <p>Enjoy your meal!</p>\
          </div>\
        </li>\
        <li class="schedule-calendar__time-list-items">\
          <p class="schedule-calendar__time-list-time">14:00 - 23:00</p>\
          <svg class="schedule-calendar__time-list-icon">\
            <use href="./images/icons.svg#icon-circle"></use>\
          </svg>\
          <div class="schedule-calendar__time-list-info">\
            <h4>Ending party</h4>\
            <p>\
              Lets Party!!!\
            </p>\
          </div>\
        </li>\
      </ul>\
    </div>';
