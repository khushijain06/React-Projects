import React, { useEffect, useState } from "react";

const NewsFetcher = ({styles}) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const fetchNews = async (searchQuery = "") => {
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us${searchQuery}?&q=${searchQuery}:""}&apiKey=8333583594594f20bc33132de12d510c`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "ok") {
        setNews(data.articles);
      } else {
        console.error("Error fetching news:", data.message);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews(query);
  };

  return (
    <div className={styles}>
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">News Fetcher</h1>

      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="flex justify-center my-10 text-xl">Loading...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article, index) => (
            <div
              key={index}
              className={`${styles} p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow`}
            >
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm mb-4 text-gray-600">
                {article.description || "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default NewsFetcher