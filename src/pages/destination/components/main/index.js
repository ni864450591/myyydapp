import './main.css';
import Tab from '../tab';
import Content from '../content';
import 'components/loading';
import { set, get } from 'utils/sessionStorage';
// 终止请求
//慢网环境，快速切换，可以将上一次的请求终止掉，直接设置成最后一个请求的数据
//先发送的请求不一定先得到数据
//如何终止请求:xhr.abort(),封装到了ajax上，找到了xhr就行，

//本地存储
//可以使用本地缓存
//将第一次获得的存储在本地缓存中


const tabEl = document.querySelector('.tab');
//实例化选项卡
const tab = new Tab(tabEl);
//实例化内容
const content = new Content(document.getElementById('destination-content'));
//选项卡的选择绑定事件
const itemEls = tabEl.querySelectorAll('.tab-item');

// 事件代理（原理：利用事件冒泡机制）参数：事件对象 
tabEl.addEventListener(
  'click',
  ev => {
    const itemEl = ev.target;

    //查看是否点击的是不是选项卡里的选项
    if (itemEl.classList.contains('tab-item')) {
        //更新index
      const index = itemEl.dataset.id - 1;

      //存储的键名
      //获取存储的内容
      const storageName = `destination_content_${index}`;
      const storageContent = get(storageName);

      //如果获取得到，直接改变状态，然后再把数据直接传进去
      //如果没有，发送请求
      if (storageContent) {
        //设置高亮
        tab.setActiveItem(index);
        //传入本地缓存的数据
        content.set(storageContent);
      } else {
        const tabPromise = tab.to(index);//返回一个promise对象

        //每次更新数据前使用加载中组件，相当于提示信息
        content.setLoading();

        tabPromise.then(data => {
          // 将得到数据放入内容中
          content.set(data);
        //顺便将数据保存在本地缓存中，键名：键值
          set(storageName, data);
        });
      }
    }
  },
  false
);
//系统自己先点击第一个，完成初始化
itemEls[0].click();
