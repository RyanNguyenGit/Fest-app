import store from "@/store/index";


export default {
    postNewEvent(newEventData){

        //console.log(newEventData)
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/newEvent`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request

        xhttp.send(JSON.stringify(newEventData));
    },

    postFriendNotifications(friend) {
        //console.log(newEventData)
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/sendNotifications`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request

        xhttp.send(JSON.stringify(friend));
    },

    sendNewEventEmail() {
        //console.log(newEventData)
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/sendEmail`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request

        xhttp.send();
    }

    // postFriendInvited(invitedFriends) {
    //     console.log(invitedFriends)
    //     let xhttp = new XMLHttpRequest();

    //     //Run on response
    //     xhttp.onreadystatechange = function() {
    //     if(this.readyState == 4 && this.status == 200) {
    //         return this.response;
    //         }
    //     }
    //     //Open connection
    //     xhttp.open('POST', `https://foolfish93-code50-99941624-97xg6q9xq3794w-8080.githubpreview.dev/newEvent`, true);
    //     xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
    //     //Send request
    //     xhttp.send(JSON.stringify(invitedFriends));
    // }
}