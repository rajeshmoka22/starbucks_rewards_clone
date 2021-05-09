
const tabButtons = document.querySelectorAll('.tab');
const tabs = document.querySelectorAll('.tab-content')

tabButtons.forEach(tab => {
  tab.addEventListener('click', (e) => {
    const { price } = e.currentTarget.dataset;

    tabs.forEach(content => {
      const {name} = content.dataset;
      if(name === price) {
        content.classList.remove('hidden');
        content.classList.add('show');
      }
      else {
        content.classList.add('hidden');
        content.classList.remove('show');
      }
    });

    tabButtons.forEach(button => {
      if(button.dataset['price'] === price) {
        button.classList.add('active');
      } else button.classList.remove('active');
    })
  })
});

const menu = document.querySelector('.menu-bars');
menu.addEventListener('click', () => {
  const lines = menu.querySelectorAll('.menubar');
  lines.forEach((line, index) => {
    if(index === 0) line.classList.toggle('rotate45');
    else if(index === 2) line.classList.toggle('rotate-45');
    else line.classList.toggle('hidden');
  })
  document.querySelector('.menu').classList.toggle('menu-hidden');
})

function signin() {
  const anchor = document.createElement('a');
  anchor.href = 'https://www.starbucks.com/account/signin';
  anchor.target = '_blank';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

function join() {
  const anchor = document.createElement('a');
  anchor.href = 'https://www.starbucks.com/account/create';
  anchor.target = '_blank';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}