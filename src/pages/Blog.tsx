// src/pages/Blog.tsx
import { Link } from "react-router-dom";

function Blog() {
  return (
    <section className="max-w-[1320px] mx-auto px-8 py-20">
      {/* TODO: lista de posts, cada um linkando para /blog/:id */}
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <Link to="/blog/1" className="text-[var(--primary)]">
        Exemplo de post →
      </Link>
    </section>
  );
}

export default Blog;