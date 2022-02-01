const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const userEl = document.querySelector('.user');

async function displayUser(username){
    userEl.textContent = '⏳ loading....';
    const res = await fetch(`${usersEndpoint}/${username}`);
    const data = await res.json();
    console.log(data);
    console.log(data.html_url);
    console.log(data.name);
    userEl.textContent = `${data.name} - ${data.html_url}`;

};

function handleError(err){
    console.log('Error!');
    console.log(err);
    userEl.textContent = `Something went wrong: ${err}`;
};

displayUser('codiemaureen').catch(handleError);