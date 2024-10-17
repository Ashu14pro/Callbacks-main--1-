document.getElementById('callbackBtn').addEventListener('click', function() {
    updateAfterDelay(fetchDataFromAPI);
    document.getElementById('result').innerText = 'Callback executed after 5 seconds';
});

function updateAfterDelay(callback) {
    setTimeout(callback, 5000); // 5-second delay
}

function fetchDataFromAPI() {
    fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(data => {
        const posts = data.posts;
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<h3>Post Titles:</h3>';
        posts.forEach(post => {
            const title = document.createElement('p');
            title.innerText = post.title;
            resultDiv.appendChild(title);
        });
    })
    .catch(error => {
        document.getElementById('result').innerText = 'Error fetching data';
    });
}
