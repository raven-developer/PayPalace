async function loadTeam() {
  try {
    const res = await fetch('../src/json/team.json');
    const teamMembers = await res.json();
    const cardContainer = document.getElementById('team-cards');

    teamMembers.forEach((member) => {
      if (member.index === 0) return;

      const card = document.createElement('div');
      card.className = `is_card img-card img-card--team-variant tm-7-${member.index}`;

      card.innerHTML = `
        <div class="card-img-block mem-image">
            <img src="${member.image}" alt="${member.alt}" class="team-card-image">
        </div>
        <div class="card-label-block">
            <h3 class="section-heading card-label mem-name">${member.name}</h3>
            <p class="par-reg card-label mem-pos">${member.position}</p>
        </div>
      `;
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading team data:', error);
    return;
  }
}

loadTeam();
