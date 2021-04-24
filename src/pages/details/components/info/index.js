import './info.css';

import render from './items.art';
import {getData} from 'api/getData';
import { URL, LAYOUT_ID } from './config';


// console.log(location.href);
//http://localhost:8081/details.html?2
const href=location.href;
const idx=href.indexOf('?');     
const param=href.slice(idx+1);  //id=1
const tempArr=param.split('=');//['id',1]
const id=tempArr[1]; //id=1


getData(URL+id).then(data=>{
    console.log(typeof data);
    document.getElementById(LAYOUT_ID).innerHTML=render(data);
});


