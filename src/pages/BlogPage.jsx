import { useMemo, useState } from "react";
import { useRoute } from "../hooks/useRoute.js";
import { sortPosts } from "../utils/navigation.js";
import { SectionHeader, Loading, ErrorState } from "../components/Shared.jsx";
import { BlogCard, Newsletter } from "../components/Blog.jsx";
import { Link } from "../components/Link.jsx";

export function BlogPage({ postsState }) {
  const route = useRoute();
  const category = route.query.get("category");
  const [sort, setSort] = useState("newest");
  const posts = useMemo(() => {
      let filtered = postsState.posts;

      if (category) {
          filtered = filtered.filter(
              (post) => post.category?.slug === category
          );
      }

      return sortPosts(filtered, sort);
  }, [postsState.posts, sort, category]);
  
  const authors = new Set(posts.map((post) => post.author)).size;

  return (
    <main>
      <header className="blog-hero">
        <div className="blog-hero-bg">
          <div className="blob blob-1"></div>
          <div className="grid-overlay"></div>
        </div>
        <div className="container">
          <div className="blog-hero-content">
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <span>Blog</span>
            </nav>
            <div className="blog-hero-badge">
              <span className="badge-dot"></span>
              Engineering Insights
            </div>
            <h1 className="blog-hero-title">
              SealTech <span className="gradient-text">Insights</span>
            </h1>
            <p className="blog-hero-desc">
              Software architecture, tooling, and product engineering lessons
              from the SealTech team.
            </p>
            <div className="blog-hero-stats">
              <div className="blog-stat">
                <span className="blog-stat-num">{posts.length}</span>
                <span className="blog-stat-label">Articles</span>
              </div>
              <div className="blog-stat-divider"></div>
              <div className="blog-stat">
                <span className="blog-stat-num">{authors}</span>
                <span className="blog-stat-label">Authors</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="blog-toolbar">
        <div className="container">
          <div className="blog-toolbar-inner">
            <span className="blog-post-count">{posts.length} articles</span>
            <div className="sort-select-wrapper">
              <select
                className="sort-select"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <section className="blog-main">
        <div className="container">
          {postsState.loading ? (
            <Loading label="Loading articles..." />
          ) : postsState.error ? (
            <ErrorState message={postsState.error} />
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <BlogCard post={post} key={post.slug} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Newsletter />
    </main>
  );
}
