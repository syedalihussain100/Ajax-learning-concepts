console.log('Ajax learning');

let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', handlefetchdata);

function handlefetchdata() {
    let xhm = new XMLHttpRequest();
    xhm.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhm.getResponseHeader("content-type", 'application/x-www-form-urlencoded')
    xhm.onprogress = function () {
        console.log('on progress')
    }

    xhm.onload = function () {
        if (this.status === 200) {
            let jsondata = JSON.parse(this.responseText);
            console.log(jsondata)
        } else {
            console.error('some error')
        }
    }


    xhm.send();
    console.log('we are done')
}

let checkbtn = document.getElementById('checkbtn');

checkbtn.addEventListener('click', handlecheckdata);

function handlecheckdata() {
    console.log('you have the clicked to top handler');
    let xhm = new XMLHttpRequest();
    xhm.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhm.getResponseHeader("content-type", 'application/x-www-form-urlencoded')

    xhm.onprogress = function () {
        console.log('on progress')
    }

    xhm.onload = function () {
        if (this.status === 200) {
            let jsondata = JSON.parse(this.responseText);
            let ul = document.getElementById('list');
            console.log(jsondata);
            let str = "";
            for (let key in jsondata) {
                str += `
             <li>${jsondata[key].title}</li>
             `
            }
            ul.innerHTML = str

        } else {
            console.error('Some Error')
        }
    }
    xhm.send();
    console.log('we are done fetching Employes!')
}