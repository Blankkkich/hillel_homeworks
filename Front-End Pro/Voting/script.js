const emojis = ['😊', '😄', '😍', '🥳', '😎', '💩'];
const votes = Array(emojis.length).fill(0);

const votingContainer = document.getElementById('voting-container');

function renderVotes() {
    votingContainer.innerHTML = '';

    emojis.forEach((emoji, index) => {
        const emojiDiv = document.createElement('div');
        emojiDiv.classList.add('emoji');
        emojiDiv.textContent = emoji + ' ' + votes[index];

        emojiDiv.addEventListener('click', () => {
            votes[index]++;
            renderVotes();
        });

        votingContainer.appendChild(emojiDiv);
    });
}

renderVotes();