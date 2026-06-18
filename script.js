function sendMessage() {
    const input = document.getElementById('msgInput');
    const chatBox = document.getElementById('chatBox');

    if (input.value.trim() === '') return;

    const msgDiv = document.createElement('div');
    msgDiv.className = 'msg outgoing';
    msgDiv.innerHTML = `
        <span class="msg-author">Вы:</span>
        <p>${input.value}</p>
        <span class="msg-time">Только что ✔️</span>
    `;

    chatBox.appendChild(msgDiv);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
    const msgInput = document.getElementById('msgInput');
    if (msgInput) {
        msgInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendMessage();
        });
    }
});
