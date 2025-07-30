function setEqualHeight() {
  const items = ['merit', 'demerit', 'effort', 'request'];

  items.forEach(className => {
    const elements = document.querySelectorAll(`.${className}`);
    let maxHeight = 0;

    // 高さリセット
    elements.forEach(el => {
      el.style.height = 'auto';
    });

    // 最大高さを取得
    elements.forEach(el => {
      if(el.offsetHeight > maxHeight) maxHeight = el.offsetHeight;
    });

    // 高さを揃える
    elements.forEach(el => {
      el.style.height = maxHeight + 'px';
    });
  });
}

window.addEventListener('load', setEqualHeight);
window.addEventListener('resize', setEqualHeight);