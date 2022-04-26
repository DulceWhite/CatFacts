//Random Cat Fact API

const container = document.querySelector(`.container`);
const fact = document.querySelector(`.fact`);
const next = document.querySelector(`.next`);

next.addEventListener(`click`, getCatFact);

async function getCatFact (){
    const catFact = await axios.get(`https://cat-fact.herokuapp.com/facts`);
    let i = Math.floor((Math.random())*5);
    // console.log(i);

    fact.innerText = catFact.data[i].text;   
    }



