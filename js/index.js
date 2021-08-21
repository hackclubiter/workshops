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
  
  document.getElementById("app").innerHTML = `
  ${workshopData.map(workshopDisplay).join("")}
  `;