const body = document.querySelector('.projectCardPop');
const cards = document.getElementById('projects');
const popUp = document.createElement('section');
const showButton = document.getElementsByClassName('extendTap');

const cardsdata = [
  {
    id: 0,
    header: 'Tonic',
    tag1: 'CANOPY',
    tag2: 'Back End Dev',
    tag3: '2015',
    extendedImage: './images/Snapshoot Portfolio.png',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,<br><br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['html', 'css', 'javaScript'],
  },

  {
    id: 1,
    header: 'Multi-Post Stories',
    tag1: 'CANOPY',
    tag2: 'Back End Dev',
    tag3: '2015',
    extendedImage: './images/Snapshoot Portfolio.png',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,<br><br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['html', 'css', 'javaScript'],
  },

  {
    id: 2,
    header: 'Tonic',
    tag1: 'CANOPY',
    tag2: 'Back End Dev',
    tag3: '2015',
    extendedImage: './images/Snapshoot Portfolio.png',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,<br><br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['html', 'css', 'javaScript'],
  },

  {
    id: 3,
    header: 'Multi-Post Stories',
    tag1: 'CANOPY',
    tag2: 'Back End Dev',
    tag3: '2015',
    extendedImage: './images/Snapshoot Portfolio.png',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,<br><br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technology: ['html', 'css', 'javaScript'],
  },
];

const initInfo = [
  {
    id: 0,
    header: 'Tonic',
    tag1: 'CANOPY',
    tag2: 'Back End Dev',
    tag3: '2015',
    extendedImage: './images/desktop/Snapshoot-Desktop1.png',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technology: ['html', 'css', 'javaScript'],
  },

  {
    id: 1,
    header: 'Multi-Post Stories',
    tag1: 'CANOPY',
    tag2: 'Back End Dev',
    tag3: '2015',
    extendedImage: './images/snapshots/Snapshoot Portfolio 2.png',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technology: ['html', 'css', 'javaScript'],
  },

  {
    id: 2,
    header: 'Tonic',
    tag1: 'CANOPY',
    tag2: 'Back End Dev',
    tag3: '2015',
    extendedImage: './images/snapshots/Snapshoot Portfolio 3.png',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technology: ['html', 'css', 'javaScript'],
  },

  {
    id: 3,
    header: 'Multi-Post Stories',
    tag1: 'CANOPY',
    tag2: 'Back End Dev',
    tag3: '2015',
    extendedImage: './images/snapshots/Snapshoot Portfolio 4.png',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technology: ['html', 'css', 'javaScript'],
  },
];

cards.innerHTML = ` 
<div class="secondBody">
  <div class="secondImage swap">
  <img src="${initInfo[0].extendedImage}" width="100%"/>       
  </div>
  <div>
    <h2 class="second_title">${initInfo[0].header}</h2>
    <ul class="second_subtitle">
      <li class="remove">${initInfo[0].tag1}</li>
      <li>${initInfo[0].tag2}</li>
      <li>${initInfo[0].tag3}</li>
    </ul>
    <div class="second_info">
      <p>
      ${initInfo[0].content}
      </p>
      <ul class="parts">
        <li>${initInfo[0].technology[0]}</li>
        <li>${initInfo[0].technology[1]}</li>
        <li>${initInfo[0].technology[2]}</li>
      </ul>
      <button class="extendTap show">See project</button>
    </div>
  </div>
  </div>

  <div class="secondBody">
  <div class="secondImage swap">
  <img src="${initInfo[1].extendedImage}" width="100%"/>       
  </div>
  <div>
    <h2 class="second_title">${initInfo[1].header}</h2>
    <ul class="second_subtitle">
      <li class="remove">${initInfo[1].tag1}</li>
      <li>${initInfo[1].tag2}</li>
      <li>${initInfo[1].tag3}</li>
    </ul>
    <div class="second_info">
      <p>
      ${initInfo[1].content}
      </p>
      <ul class="parts">
        <li>${initInfo[1].technology[0]}</li>
        <li>${initInfo[1].technology[1]}</li>
        <li>${initInfo[1].technology[2]}</li>
      </ul>
      <button class="extendTap show">See project</button>
    </div>
  </div>
  </div>

  <div class="secondBody">
  <div class="secondImage swap">
  <img src="${initInfo[2].extendedImage}" width="100%"/>       
  </div>
  <div>
    <h2 class="second_title">${initInfo[2].header}</h2>
    <ul class="second_subtitle">
      <li class="remove">${initInfo[2].tag1}</li>
      <li>${initInfo[2].tag2}</li>
      <li>${initInfo[2].tag3}</li>
    </ul>
    <div class="second_info">
      <p>
      ${initInfo[1].content}
      </p>
      <ul class="parts">
        <li>${initInfo[2].technology[0]}</li>
        <li>${initInfo[2].technology[1]}</li>
        <li>${initInfo[2].technology[2]}</li>
      </ul>
      <button class="extendTap show">See project</button>
    </div>
  </div>
  </div>

  <div class="secondBody">
  <div class="secondImage swap">
  <img src="${initInfo[3].extendedImage}" width="100%"/>       
  </div>
  <div>
    <h2 class="second_title">${initInfo[3].header}</h2>
    <ul class="second_subtitle">
      <li class="remove">${initInfo[1].tag1}</li>
      <li>${initInfo[3].tag2}</li>
      <li>${initInfo[3].tag3}</li>
    </ul>
    <div class="second_info">
      <p>
      ${initInfo[3].content}
      </p>
      <ul class="parts">
        <li>${initInfo[3].technology[0]}</li>
        <li>${initInfo[3].technology[1]}</li>
        <li>${initInfo[3].technology[2]}</li>
      </ul>
      <button class="extendTap show">See project</button>
    </div>
  </div>
  </div>
  `;

for (let i = 0; i < showButton.length; i += 1) {
  showButton[i].addEventListener('click', () => {
    body.style.display = 'block';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    popUp.innerHTML = `
        <section id="pop_part">
        <div class="pop_main">
          <div class="pop_head">
            <h2 class="second_title">${cardsdata[i].header}</h2>
            <i id="pop_shut" class="uil strng">X</i>
            <ul class="second_subtitle">
              <li class="remove">${cardsdata[i].tag1}</li>
              <li>${cardsdata[i].tag2}</li>
              <li>${cardsdata[i].tag3}</li>
            </ul>
          </div>
          <img class="visual" src="${cardsdata[i].extendedImage}" width="100%"/>       
          <div>
            <div class="pop_txt">
              <p>${cardsdata[i].content}</p>
              <div class="pop_lnks">
                <ul class="parts mobile_parts">
                  <li>${cardsdata[i].technology[0]}</li>
                  <li>${cardsdata[i].technology[1]}</li>
                  <li>${cardsdata[i].technology[2]}</li>
                </ul>
                <div>
                  <hr class="spaces" />
                  <div class="pop_concat">
                    <button class="pop_button live">
                      See live
                      <svg
                        class="svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z"
                          fill="#6070FF"
                        />
                      </svg>
                    </button>
                    <button class="pop_button source">
                      See source
                      <span>
                      <svg
                      class="svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z"
                        fill="#6070FF"
                      />
                    </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        `;
    body.appendChild(popUp);
  });
}

body.addEventListener('click', () => {
  body.style.display = 'none';
  popUp.remove();
});