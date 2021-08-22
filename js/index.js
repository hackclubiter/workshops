function workshopDisplay(workshop) {
    return `
        <li>
            <div class="ws-box" style="background-image: url('${workshop.image}');">
            <a href="${workshop.link}" class="wslink">
                <div class="ws-info">
                    <h3>${workshop.workshopName}</h3>
                    <p>${workshop.about}</p>
                </div>
            </a>
            </div>
        </li>
        `;
    }
  
  document.getElementById("upcoming").innerHTML = `
  ${workshopData.map(workshopDisplay).join("")}

`;

//Past Workshops

function pastWorkshops(workshop) {
    return `
        <li>
            <div class="ws-box" style="background-image: url('${workshop.image}');">
            <a href="${workshop.link}" class="wslink">
                <div class="ws-info">
                    <h3>${workshop.workshopName}</h3>
                    <p>${workshop.about}</p>
                </div>
            </a>
            </div>
        </li>
        `;
    }
  
  document.getElementById("past").innerHTML = `
  ${pastWorkshopData.map(pastWorkshops).join("")}
  <p>There are ${pastWorkshopData.length} workshops.</p>
`;