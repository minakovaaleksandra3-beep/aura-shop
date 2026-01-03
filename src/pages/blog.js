// src/pages/blog.js

let contentData = null;

async function loadContent() {
  if (!contentData) {
    const response = await fetch('/src/data/content.json');
    contentData = await response.json();
  }
  return contentData;
}

export async function Blog() {
  const data = await loadContent();
  const stories = data.stories;
  
  return `
    <main class="blog-main">
      <!-- Page Header -->
      <div class="container blog-header">
        <h1 class="blog-title">${data.sections.stories.title}</h1>
      </div>
      
      <!-- Blog Grid -->
      <section class="container blog-section">
        <div class="blog-grid">
          ${stories.map(story => createBlogCard(story)).join('')}
        </div>
      </section>
    </main>
  `;
}

function createBlogCard(story) {
  return `
    <a href="#/blog/${story.id}" class="blog-card">
      <div class="blog-card-image" style="background-image: url('${story.image}');"></div>
      <div class="blog-card-content">
        <h3 class="blog-card-title">${story.title}</h3>
      </div>
    </a>
  `;
}