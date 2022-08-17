

const database = firebase.database().ref();



const allMessages = document.getElementById('all-messages');
const usernameElem = document.getElementById('username');
const messageElem = document.getElementById('message');
const sendBtn = document.getElementById('send-btn');
sendBtn.onclick = updateDB;


function updateDB(event) {
    event.preventDefault();

    const data = {
        USERNAME: usernameElem.value,
        MESSAGE: messageElem.value,
    };
    
 
    database.push(data);

    messageElem.value = '';
}




database.on('child_added', addMessageToBoard);



function addMessageToBoard(rowData) {
    const data = rowData.val()
    
    let singleMessage = makeSingleMessageHTML(data.USERNAME, data.MESSAGE);

    allMessages.append(singleMessage);
}



function makeSingleMessageHTML(usernameTxt, messageTxt) {
    let parentDiv = document.createElement('div');
    parentDiv.className = 'single-message';
    let usernameP = document.createElement('p');
    usernameP.className = 'single-message-username';
    usernameP.innerHTML = usernameTxt + ':';
    parentDiv.append(usernameP);
    let messageP = document.createElement('p');
    messageP.innerHTML = messageTxt;
    parentDiv.append(messageP);
    return parentDiv;

}

