let getData = async (c) => {
    let rawData = await fetch(`https://static.pipezero.com/covid/data.json`);
    let data = await rawData.json();

    let total = data.total

    console.log(total);
};
getData()