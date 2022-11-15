import { content } from './renderContent.js';

const wrapper = document.querySelector('.wrapper');
const lazyBlock = document.querySelector('._lazy-block');
const contentHeight = wrapper.offsetHeight + wrapper.getBoundingClientRect().top;
let lazyBlockPos = lazyBlock.getBoundingClientRect().top + scrollY;
let lazyBlockHeight = lazyBlock.offsetHeight;

const updateLazyBlockInfo = () => {
  lazyBlockPos = lazyBlock.getBoundingClientRect().top + scrollY;
  lazyBlockHeight = lazyBlock.offsetHeight;
};

const loadFirstElements = () => {
  updateLazyBlockInfo();

  while (content.length && contentHeight > lazyBlockPos + lazyBlockHeight) {
    lazyBlock.appendChild(content.shift());

    updateLazyBlockInfo();
  }
};

const lazyLoadingEvent = () => {
  updateLazyBlockInfo();

  if (scrollY + contentHeight > lazyBlockPos + lazyBlock.offsetHeight) {
    if (content.length) {
      lazyBlock.appendChild(content.shift());
    }
  }
};

export { loadFirstElements, lazyLoadingEvent };
