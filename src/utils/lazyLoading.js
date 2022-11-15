const wrapper = document.querySelector('.wrapper');
const lazyBlock = document.querySelector('._lazy-block');
const contentHeight = wrapper.offsetHeight + wrapper.getBoundingClientRect().top;
let lazyBlockPos = lazyBlock.getBoundingClientRect().top + scrollY;
let lazyBlockHeight = lazyBlock.offsetHeight;

const updateLazyBlockInfo = () => {
  lazyBlockPos = lazyBlock.getBoundingClientRect().top + scrollY;
  lazyBlockHeight = lazyBlock.offsetHeight;
};

const loadFirstElements = (elements) => {
  updateLazyBlockInfo();

  while (elements.length && contentHeight > lazyBlockPos + lazyBlockHeight) {
    lazyBlock.appendChild(elements.shift());

    updateLazyBlockInfo();
  }
};

const createLazyLoading = (elements) => {
  return () => {
    updateLazyBlockInfo();

    if (scrollY + contentHeight > lazyBlockPos + lazyBlock.offsetHeight) {
      if (elements.length) {
        lazyBlock.appendChild(elements.shift());
      }
    }
  };
};

export { loadFirstElements, createLazyLoading };
