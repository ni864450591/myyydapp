import Backtop from 'components/backtop';

const scrollContainer = document.getElementById('index-page');
const backtopEl = scrollContainer.querySelector('.backtop');
//滚过一个页面的高度后显现
new Backtop(backtopEl, window.innerHeight, scrollContainer);