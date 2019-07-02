import {sendQuery} from "./api.js";
import * as ui from "./ui.js";



let response = sendQuery('Linkin Park', 'In the end');
response.then(data => {
    console.log(data.response);
    text = data.response;
})


ui.form.addEventListener('click', (ev) => {
    ev.preventDefault();
});
