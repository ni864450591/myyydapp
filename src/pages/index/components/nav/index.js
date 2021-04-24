import './nav.css';
import render from './nav.art';
import {getData} from 'api/getData';
import { URL, LAYOUT_ID } from './config';

getData(URL).then(data=>{
    document.getElementById(LAYOUT_ID).innerHTML=render(
        {items:data}
    );
});