const chatBoxEl = document.getElementById('chatBox')
const sendEl = document.getElementById('send')
const chatPlace = document.getElementById('chatPlace')


// event listener to send the message
sendEl.addEventListener('click', function () {
    sendMessage()
})


function sendMessage() {
    if (chatBoxEl.value != "") {
        chatPlace.innerHTML += ` <div id="newChat">${chatBoxEl.value}</div>`
        chatBoxEl.value = ''
    } else {
        sendEl.setAttribute('disabled')

    }
}