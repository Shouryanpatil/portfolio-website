// RESOURCES PAGE RENDERER
// =========================
// Reads `techniques` (techniques-data.js) and `posts` (posts-data.js) and
// builds the accordion + post cards. You should never need to edit this
// file just to add content — edit the data files instead.

document.addEventListener("DOMContentLoaded", () => {
  renderTechniques();
  renderPosts();
});

// ---------- TECHNIQUES ACCORDION ----------

function renderTechniques() {
  const container = document.getElementById("techniques-container");
  if (!container) return;

  // Group techniques by category, preserving first-seen category order
  const categories = [];
  const grouped = {};
  techniques.forEach((tech) => {
    if (!grouped[tech.category]) {
      grouped[tech.category] = [];
      categories.push(tech.category);
    }
    grouped[tech.category].push(tech);
  });

  container.innerHTML = categories
    .map((category) => {
      const items = grouped[category]
        .map((tech) => renderTechniqueItem(tech))
        .join("");
      return `
        <div class="tech-category">
          <h3 class="tech-category-title">${category}</h3>
          <div class="tech-items">${items}</div>
        </div>
      `;
    })
    .join("");

  // Wire up click-to-expand behavior
  container.querySelectorAll(".tech-header").forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".tech-item");
      const panel = item.querySelector(".tech-panel");
      const isOpen = item.classList.toggle("open");
      header.setAttribute("aria-expanded", isOpen ? "true" : "false");
      panel.hidden = !isOpen;
    });
  });
}

function renderTechniqueItem(tech) {
  const hasContent =
    (tech.summary && tech.summary.trim()) ||
    (tech.whenToUse && tech.whenToUse.trim()) ||
    (tech.keySteps && tech.keySteps.length > 0);

  const bodyHtml = hasContent
    ? `
        ${tech.summary ? `<p class="tech-summary">${tech.summary}</p>` : ""}
        ${
          tech.whenToUse
            ? `<p class="tech-when"><strong>When to use it:</strong> ${tech.whenToUse}</p>`
            : ""
        }
        ${
          tech.keySteps && tech.keySteps.length > 0
            ? `<div class="tech-steps">
                 <strong>Typical workflow:</strong>
                 <ol>${tech.keySteps.map((s) => `<li>${s}</li>`).join("")}</ol>
               </div>`
            : ""
        }
      `
    : `<p class="tech-placeholder">Content coming soon — this one hasn't been written up yet.</p>`;

  return `
    <div class="tech-item" id="${tech.id}">
      <button class="tech-header" aria-expanded="false">
        <span class="tech-name">${tech.name}<small>${tech.fullName}</small></span>
        <span class="tech-chevron">›</span>
      </button>
      <div class="tech-panel" hidden>
        ${bodyHtml}
      </div>
    </div>
  `;
}

// ---------- BLOG / TUTORIAL POSTS ----------

function renderPosts() {
  const container = document.getElementById("posts-container");
  if (!container) return;

  if (!posts || posts.length === 0) {
    container.innerHTML = `<p class="posts-placeholder">No posts yet — check back soon.</p>`;
    return;
  }

  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  container.innerHTML = sorted
    .map(
      (post) => `
      <div class="post-card" id="${post.id}">
        <button class="post-header" aria-expanded="false">
          <div>
            <h3 class="post-title">${post.title}</h3>
            <div class="post-meta">
              <span class="post-date">${formatDate(post.date)}</span>
              ${
                post.tags && post.tags.length
                  ? `<span class="post-tags">${post.tags
                      .map((t) => `<span class="post-tag">${t}</span>`)
                      .join("")}</span>`
                  : ""
              }
            </div>
            <p class="post-excerpt">${post.excerpt}</p>
          </div>
          <span class="tech-chevron">›</span>
        </button>
        <div class="post-content" hidden>${post.content}</div>
      </div>
    `
    )
    .join("");

  container.querySelectorAll(".post-header").forEach((header) => {
    header.addEventListener("click", () => {
      const card = header.closest(".post-card");
      const panel = card.querySelector(".post-content");
      const isOpen = card.classList.toggle("open");
      header.setAttribute("aria-expanded", isOpen ? "true" : "false");
      panel.hidden = !isOpen;
    });
  });
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
