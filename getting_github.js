var git = document.getElementById('git');

function getGithub() {
    fetch("https://api.github.com/users/adion81")
    .then(response => response.json())
    .then(coderData => { 
    console.log(coderData);
    let name = coderData.name
    let followers = coderData.followers
    let img = coderData.avatar_url
    git.innerHTML = `<h1>${name} has ${followers} followers.</h1>`
    git.innerHTML += `<img src = ${img}>`
    })
    .catch(err => console.log(err))
}