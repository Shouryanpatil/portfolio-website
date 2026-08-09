/*
  BLOG / TUTORIAL POSTS DATA
  ===========================
  One object per post. Empty array for now — resources.js will show a
  "No posts yet" placeholder on the page until you add your first one.

  HOW TO ADD A POST
  ------------------
  Push a new object into the array below with this shape:

    {
      id: "unique-slug-no-spaces",
      title: "Your post title",
      date: "2026-08-09",              // YYYY-MM-DD, used for sorting (newest first)
      tags: ["RNA-Seq", "DESeq2"],      // any short labels you want
      excerpt: "One or two sentence teaser shown on the card before it's expanded.",
      content: "<p>Full post body goes here.</p><p>You can use normal HTML tags: p, h3, ul/li, code, a, img, etc.</p>"
    }

  The "content" field is a plain HTML string, so you can write it like a
  mini web page — no Markdown conversion step needed. resources.js inserts
  it directly into the expanded card.

  Newest posts should go first, or just add anywhere — resources.js sorts
  by "date" automatically so order in this file doesn't matter.
*/

const posts = [];
