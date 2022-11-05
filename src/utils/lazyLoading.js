const windowHeight = document.documentElement.clientHeight;
const lazyBlock = document.querySelector('._lazy-block');
let lazyBlockPos = lazyBlock.getBoundingClientRect().top + scrollY;
let lazyBlockHeight = lazyBlock.offsetHeight;

const updateLazyBlockInfo = () => {
  lazyBlockPos = lazyBlock.getBoundingClientRect().top + scrollY;
  lazyBlockHeight = lazyBlock.offsetHeight;
};

const loadFirstElements = (elements) => {
  updateLazyBlockInfo();

  while (elements.length && (windowHeight > (lazyBlockPos + lazyBlockHeight))) {
    lazyBlock.innerHTML += elements.shift();

    updateLazyBlockInfo();
  };
};

const createLazyLoading = (elements) => {
  return () => {
    updateLazyBlockInfo();

    if (scrollY + windowHeight > ((lazyBlockPos + lazyBlock.offsetHeight))) {
      if (elements.length) {
        lazyBlock.innerHTML += elements.shift();
      };
    };
  };
};

export {loadFirstElements, createLazyLoading};