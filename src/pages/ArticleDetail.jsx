import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { articles } from "../data/articles";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));


  if (!article) {
    return <div className="p-6">Article not found</div>;
  }

  return (
    <>
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-8">
        <img
          src={article.cover}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl font-bold mb-3">
          {article.title}
        </h1>

        <p className="text-gray-400 text-sm mb-6">
          By {article.author} · {article.role}
        </p>

        <div className="text-gray-300 whitespace-pre-line leading-relaxed">
          {article.content}
        </div>
      </article>
    </>
  );
};

export default ArticleDetail;
