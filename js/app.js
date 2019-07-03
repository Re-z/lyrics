import {sendQuery} from "./api.js";
import * as ui from "./ui.js";



ui.form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    
    let queryArtist = ui.artist.value,
        querySong = ui.song.value;
    
    //handling situation if there is no values at inputs
    if(!queryArtist || !querySong) {
        ui.showError('All fields are mandatory')
        return
    }

    //if input fields are filled - continue
    let response = sendQuery(queryArtist, querySong);
    response
        .then(data => {return(data.response.lyrics);})
        .then(data => {
            //show error if there is no lyrics for this query
            if(!data) {
                ui.showError('There is no lyrics for such artist or(and) song');
                ui.result.innerHTML = '';
                return;
            }
            //displaying lyrics if all ok
            ui.result.innerHTML = data;
        })
        //show error if not 200
        .catch(() => {
            ui.showError('Cannot handle this query')
        });

});
