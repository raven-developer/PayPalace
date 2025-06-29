async function loadTeam() {
  try {
    const res = await fetch('../src/json/team.json');
    const teamMembers = await res.json();

    if (dataPage === 'about') {
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
    }
  } catch (error) {
    console.error('Error loading team data:', error);
    return;
  }
}

loadTeam();

// Reusable blog card generator
function createBlogCard(post) {
  const card = document.createElement('div');
  card.className = `is_card img-card img-card--blog-variant ic-blog-5-${post.index}`;

  card.innerHTML = `
    
      <div class="card-img-block blog-ftd-image">
        <img src="${post.image}" alt="${post.alt}" />
      </div>
      <div class="card-content-block">
        <div class="upper-content">
          <p class="par-sm blog-date">${post.date}</p>
          <h3 class="section-heading card-label blog-title">${post.title}</h3>
        </div>
        <div class="hr"></div>
        <div class="bottom-content">
          <p class="par-sm blog-author">${post.author}</p>
          <div class="button button--is_blog"><span class="button-span">Read More</span></div>
        </div>
      </div>
    
  `;

  return card;
}

async function loadBlog() {
  try {
    const blogRes = await fetch('../src/json/blog.json');
    const blogData = await blogRes.json();

    const blogContainer = document.getElementById('blog-card-grid');
    const blogLatest = document.getElementById('blog-card-grid');

    blogData.sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestPosts = blogData.slice(0, 3);

    if (dataPage === 'home') {
      latestPosts.forEach((post) => {
        const card = createBlogCard(post);
        blogLatest.appendChild(card);
      });
    }

    if (dataPage === 'stories') {
      blogData.forEach((post) => {
        const card = createBlogCard(post);
        blogContainer.appendChild(card);
      });
    }
  } catch (error) {
    console.error('Error loading blog data:', error);
  }
}

loadBlog();
