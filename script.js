
let count = document.getElementById('repositoryCount');

function sleep(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);

        }, ms);
    })
}

window.onload = async function() {

    const goal = new URL('https://api.github.com/users/brandontcozart/repos');
    const response = await fetch(goal);
    const data = await response.json();


    for(let i=0; i <= data.length; i++){

        //const counter = data.length;
        await sleep(500);
        count.innerHTML = i;
    }
    
  }