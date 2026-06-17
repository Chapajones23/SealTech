import { useEffect } from "react";
import { formatDate, sortPosts } from "../utils/navigation.js";
import { SectionHeader, AuthorAvatar, Loading, ErrorState } from "../components/Shared.jsx";
import { BlogCard, Newsletter } from "../components/Blog.jsx";
import { Link } from "../components/Link.jsx";

export function PostPage({ postsState, slug }) {
  const post = postsState.posts.find((item) => item.slug === slug);
  const related = sortPosts(postsState.posts)
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  useEffect(() => {
    document.title = post
      ? `${post.title} - SealTech Insights`
      : "SealTech Insights";
  }, [post]);

  if (postsState.loading)
    return (
      <main className="post-page">
        <Loading label="Loading article..." />
      </main>
    );
  if (!post)
    return (
      <main className="post-page">
        <ErrorState message="Article not found." />
      </main>
    );

  return (
    <main>
      <section className="post-page">
        <div className="post-page-container">
          <article className="post-content-wrapper">
            <header className="post-header" data-animate="fade-up">
              <div className="post-breadcrumb">
                <Link href="/">Home</Link>
                <Link href="/blog.html">Blog</Link>
                <span>{post.category}</span>
              </div>
              <div className="post-category-badge">{post.category}</div>
              <h1 className="post-title">{post.title}</h1>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-meta-row">
                <div className="post-author-info">
                  <AuthorAvatar post={post} />
                  <div>
                    <div className="post-author-name">{post.author}</div>
                    <div className="post-author-role">{post.authorRole}</div>
                  </div>
                </div>
                <div className="post-meta-details">
                  <span className="post-meta-item">
                    {formatDate(post.publishDate)}
                  </span>
                  <span className="post-meta-item">{post.readTime}</span>
                </div>
              </div>
            </header>
            <div
              className="post-featured-image"
              style={{ background: post.imageGradient }}
            >
              <div
                className="post-featured-image-icon"
                dangerouslySetInnerHTML={{ __html: post.imageIcon }}
              />
            </div>
            <div className="post-body">
              <div
                className="post-content-inner"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
          <aside className="post-sidebar">
            <div className="sidebar-widget">
              <Link href="/blog.html" className="sidebar-back-link">
                Back to Blog
              </Link>
            </div>
            <div className="sidebar-widget sidebar-newsletter">
              <Newsletter compact />
            </div>
          </aside>
        </div>
      </section>
      <section className="related-section">
        <div className="container">
          <SectionHeader
            eyebrow="Keep Reading"
            title={
              <>
                Related <span className="gradient-text">Articles</span>
              </>
            }
          />
          <div className="blog-grid blog-grid--related">
            {related.map((item) => (
              <BlogCard post={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
