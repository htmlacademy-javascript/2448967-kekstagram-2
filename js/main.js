import {getData} from './data.js'
import {renderThumbnails} from './thumbnails.js'

const data = getData();
renderThumbnails(data);

//console.log(data)