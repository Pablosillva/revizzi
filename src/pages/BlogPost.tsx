// src/pages/BlogPost.tsx
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <section className="max-w-[1320px] mx-auto px-8 py-20">
      {/* TODO: buscar o post certo usando esse id, e mostrar o conteúdo dele */}
      <h1 className="text-4xl font-bold">Post #{id}</h1>
    </section>
  );
}

export default BlogPost;