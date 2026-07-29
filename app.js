let database = [];
let currentIndex = 0;

async function loadDatabase() {

    const response = await fetch("database/master_database.json");

    const data = await response.json();

    database = data.points;

    showPoint();

}

function showPoint() {

    const point = database[currentIndex];

    document.getElementById("type").textContent = point.type;

    document.getElementById("title").textContent = point.title;

    document.getElementById("description").textContent = point.description;

    document.getElementById("gps").textContent =
        point.gps.lat + ", " + point.gps.lon;

}

document.getElementById("prevBtn").onclick = () => {

    if(currentIndex>0){

        currentIndex--;

        showPoint();

    }

}

document.getElementById("nextBtn").onclick = () => {

    if(currentIndex<database.length-1){

        currentIndex++;

        showPoint();

    }

}

document.getElementById("navigateBtn").onclick = () => {

    const point = database[currentIndex];

    window.open(
        `https://mapy.com/turisticka?x=${point.gps.lon}&y=${point.gps.lat}&z=17`,
        "_blank"
    );

}

loadDatabase();
