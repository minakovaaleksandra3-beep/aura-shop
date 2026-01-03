// src/pages/blogPost.js

let contentData = null;

async function loadContent() {
  if (!contentData) {
    const response = await fetch('/src/data/content.json');
    contentData = await response.json();
  }
  return contentData;
}

export async function BlogPost(params) {
  const data = await loadContent();
  const storyId = parseInt(params.id);
  const story = data.stories.find(s => s.id === storyId);
  
  if (!story) {
    return `
      <main class="blog-post-main">
        <div class="container" style="padding: 150px 0; text-align: center;">
          <h2>Article not found</h2>
          <a href="#/blog" class="btn btn-primary" style="margin-top: 20px;">Back to blog</a>
        </div>
      </main>
    `;
  }
  
  return `
    <main class="blog-post-main">
      <article class="blog-post-container">
        <!-- Hero Image -->
        <div class="blog-post-hero" style="background-image: url('${story.image}');"></div>
        
        <!-- Content -->
        <div class="blog-post-content">
          <div class="blog-post-meta">
            <span class="blog-post-date">${formatDate(story.date)}</span>
            <span class="blog-post-author">By ${story.author}</span>
          </div>
          
          <h1 class="blog-post-title">${story.title}</h1>
          
          <div class="blog-post-body">
            ${story.content}
          </div>
          
          <div class="blog-post-footer">
            <a href="#/blog" class="btn btn-outline">← Back to blog</a>
          </div>
        </div>
      </article>
    </main>
  `;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}