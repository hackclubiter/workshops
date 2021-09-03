function workshopDisplay(workshop) {
    return `
        <li>
            <div class="ws-box" style="background-image: url('${workshop.image}');">
            <a href="${workshop.link}" class="wslink">
                <div class="ws-info-present">
                    <h3>${workshop.workshopName}</h3>
                    <p>${workshop.about}</p>
                    <h4>📅 ${workshop.date} | ⏲️ ${workshop.time} </h4>
                </div>
            </a>
            </div>
        </li>
        `;
    }
  
    document.getElementById("upcoming").innerHTML = `
    ${workshopData.map(workshopDisplay).join("")}
    <p>There are ${workshopData.length} upcoming workshops.</p>
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