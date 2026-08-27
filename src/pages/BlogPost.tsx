import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { posts } from "../data/posts";

function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <section className="max-w-[1320px] mx-auto px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
          Post não encontrado
        </h1>
        <Link to="/blog" className="text-[var(--primary)]">
          ← Voltar pro blog
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-[760px] mx-auto px-8 py-24">
      <Link
        to="/blog"
        className="flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200 no-underline mb-8"
      >
        <ArrowLeft size={16} /> Voltar pro blog
      </Link>

      <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] mb-4">
        <Calendar size={14} />
        {new Date(post.date).toLocaleDateString("pt-BR")}
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-10">
        {post.title}
      </h1>

      <div className="flex flex-col gap-5">
        {post.content.map((paragrafo, index) => (
          <p key={index} className="text-[var(--text-secondary)] leading-relaxed">
            {paragrafo}
          </p>
        ))}
      </div>
    </section>
  );
}

export default BlogPost;