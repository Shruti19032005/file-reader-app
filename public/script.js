document.getElementById('read-file-btn').addEventListener('click', () => {
    fetch('/read-file')
        .then(response => response.json())
        .then(data => {
            document.getElementById('file-content').textContent = data.content;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
