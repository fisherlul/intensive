let getData = async (c) => {
    let rawData = await fetch(`https://static.pipezero.com/covid/data.json`);
    let data = await rawData.json();
    let total = data.total

    console.log(total);

    let slec = document.createElement('b');
    slec.addEventListener("change", () => {
        let slecValue = slec.value();
        
        if (slecValue == "TG"){
            renderData(total.world, "Thế Giới")
        } else if (slecValue == "VN"){
            renderData(total.internal, "Việt Nam")
        }
    });
    renderData(total.internal, "Việt Nam")
}

getData()

let renderData = (data) => {
    let dom = document.getElementById("a")
    let html = `
    <th scope="row">1</th>
     <td>${data.death}</td>
     <td>${data.treating}</td>
     <td>${data.cases}</td>
     <td>${data.recovered}</td>`

    dom.innerHTML = html;
};
const numb = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };