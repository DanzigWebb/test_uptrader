// ========================>
// navigation
// <========================
(function () {

  let sect_main = document.querySelector('.main');
  let mainContent = sect_main.querySelector('.main_content');
  let control = sect_main.querySelectorAll('.main-menu__btn');

  let sect_tabs = document.querySelector('.about');
  let tabs = sect_tabs.querySelectorAll('.tabs__item');
  let tabsContent = sect_tabs.querySelectorAll('.tabs-content');

  function hideAll(elems) {
    elems.forEach(el => {
      el.classList.remove('active');
    });
  };
  function addActiveItem(i) {
    hideAll(tabs);
    hideAll(tabsContent);
    tabsContent[i].classList.add('active');
    tabs[i].classList.add('active');
  };
  function scrollToTab(btn, offset) {
    if (offset == undefined) offset = 0;
    setTimeout(() => {
      window.scrollBy(0, btn.getBoundingClientRect().top - offset)
    }, 200);
  };
  tabs.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        hideAll(tabs);
        hideAll(tabsContent);
      }
      else {
        addActiveItem(i)
        scrollToTab(item)
      };
    })
  });
  control.forEach((item, i) => {
    item.addEventListener('click', () => {
      addActiveItem(i);
      mainContent.classList.add('active');
      setTimeout(() => {
        sect_main.style.opacity = '0';
        setTimeout(() => {
          sect_tabs.style.display = 'block';
          scrollToTab(tabsContent[i], 90)
        }, 200);
      }, 400);
    })
  })
})();
