import React from "react";

const Hobbies = () => {
  const categories = [
    {
      id: "tech",
      title: "Technology",
      icon: "💻",
      description: "Programming, cloud architecture, and new tech explorations",
    },
    {
      id: "travel",
      title: "Travel",
      icon: "✈️",
      description: "Places I've visited and travel experiences",
    },
    {
      id: "books",
      title: "Books",
      icon: "📚",
      description: "Book reviews and reading lists",
    },
    {
      id: "projects",
      title: "Side Projects",
      icon: "🔨",
      description: "Deep dives into my technical projects",
    },
  ];

  return (
    <section id="hobbies">
      <div className="w-full p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-left">
          HOBBIES
        </h2>
        <p className="text-lg text-white mb-8">
          Outside of work, I enjoy exploring various interests and sharing my
          thoughts through my blog. Check out some of my posts in these
          categories:
        </p>

        {/* Changed to flex box instead of grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((category) => (
            <a
              href={`/blog/category/${category.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col hover:-translate-y-1 transform duration-200"
              key={category.id}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </a>
          ))}

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              Recent Blog Posts
            </h3>
            <p className="text-gray-500 italic">Loading recent posts...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;