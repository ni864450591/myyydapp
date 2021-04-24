import './tab.css'
// setActiveItem(2)
// to(1)

// set(data)
import { getData, getDelayedData } from 'api/getData';
import { URL, TAB_ITEM_CLASS, TAB_ACTIVE_ITEM_CLASS_NAME } from './config';
class Tab{
    constructor(el){
        this.itemEls= el.querySelectorAll(TAB_ITEM_CLASS);
        
    }
    setActiveItem(index){
    for(const itemEl of this.itemEls){
        itemEl.classList.remove(TAB_ACTIVE_ITEM_CLASS_NAME);
    }
    this.itemEls[index].classList.add(TAB_ACTIVE_ITEM_CLASS_NAME);
    }   
        to(index) {

            // 先判断情求是否存在，存在则取消上一次的请求
            if (this.dataPromise && this.dataPromise.xhr) {
              this.dataPromise.xhr.abort();
            }
        
            this.setActiveItem(index);
            
            //
            this.dataPromise = getData(`${URL}/${this.itemEls[index].dataset.id}`);
            
        
            // xhr.abort()
        
            return this.dataPromise;
          }

}

export default Tab;