let getData = async (c) => {
    let rawData = await fetch(`https://static.pipezero.com/covid/data.json`);
    let data = await rawData.json();

    renderData(data);
};

let renderData = (data) => {
    let domWeather = document.querySelector(".showInfo")

    let date = data.overview.date;
    let death = data.overview;

    let html = `
    <h2>${date}*C</h2>
    <p>${death}</p>`

    domWeather.innerHTML = html;
};

console.log(date);