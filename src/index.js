const menuButton = document.querySelector('.nav__bars');
const menuCloseButton = document.querySelector('.nav__menu__close-button');
const menuContainer = document.querySelector('.nav');

menuButton.addEventListener('click', showMenu);
menuCloseButton.addEventListener('click', hideMenu);

function showMenu() {
  menuButton.style.display = 'none';
  menuContainer.classList.add('menu--activo');
}

function hideMenu() {
  menuButton.style.removeProperty('display');
  menuContainer.classList.remove('menu--activo');
}

function showSubmenu(subitem) {}

const subMenu = document.querySelectorAll('.menu__item');

subMenu.forEach((itemMenu) => {
  let menuDropdown = itemMenu.querySelector('.item__link');
  menuDropdown.addEventListener('click', () => {
    let dropdown = itemMenu.querySelector('.dropdown');
    let arrowDown = itemMenu.querySelector('.arrow-down');
    let arrowUp = itemMenu.querySelector('.arrow-up');
    const showArrowUp = () => {
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'unset';
    };
    const showArrowDown = () => {
      arrowDown.style.display = 'unset';
      arrowUp.style.display = 'none';
    };
    dropdown.classList.toggle('item__dropdown--toggle');
    const isSubmenuDisplayed = dropdown.classList.contains(
      'item__dropdown--toggle'
    );
    if (isSubmenuDisplayed) {
      showArrowUp();
    } else {
      showArrowDown();
    }
  });
});
