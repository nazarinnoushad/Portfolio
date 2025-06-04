const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 bg-gradient-to-br from-blue-400 via-white to-slate-200 text-black">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <a
            href="https://naz-vs-website-clone.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg shadow-md block"
          >
            <img 
              src="VSCodewebsiteClone.png"
              alt="VS code WebsiteClone"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
              <p className="text-xl font-semibold mb-2 text-black">VS code WebsiteClone</p>
              <p className="text-sm text-white">
                A responsive Visual Studio Code website clone built using HTML and Tailwind CSS, focusing on UI design
              </p>
            </div>
          </a>

          {/* Project 2 */}
          <a
            href="https://naz-todo-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg shadow-md block"
          >
            <img
              src="Todo.jpeg"
              alt="ToDo App"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
              <p className="text-xl font-semibold mb-2 text-black">ToDo App</p>
              <p className="text-sm text-white">
                A simple and responsive To-Do List Web App built using React with full CRUD operations and live time & date display.
              </p>
            </div>
          </a>

          {/* Project 3 */}
          <a
            href="https://naz-travel-blog-crud.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg shadow-md block"
          >
            <img
              src="TravelBlog.png"
              alt="Travel Blog"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
              <p className="text-xl font-semibold mb-2 text-black">Travel Blog (CRUD)</p>
              <p className="text-sm text-white">
                A full-featured Travel Blog app built with React supporting create, read, update, and delete blog posts.
              </p>
            </div>
          </a>

          {/* Project 4 */}
          <a
            href="https://naz-github-user-find.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg shadow-md block"
          >
            <img
              src="github user find.jpeg"
              alt="GitHub User Finder"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
              <p className="text-xl font-semibold mb-2 text-black">GitHub User Finder</p>
              <p className="text-sm text-white">
                A React app that fetches and displays GitHub user profiles using the GitHub API in a clean, responsive layout.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


  
  




  
  
