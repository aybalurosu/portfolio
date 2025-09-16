
export function Projects() {
  return (
    <section className="flex flex-col items-start justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Example project cards */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">     
          <h2 className="text-2xl font-semibold mb-4">Project 1</h2>  
          <p className="text-gray-600">Description of Project 1.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Project 2</h2>
          <p className="text-gray-600">Description of Project 2.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Project 3</h2>
          <p className="text-gray-600">Description of Project 3.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
        </section>
  );
}