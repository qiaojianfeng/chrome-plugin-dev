
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 font-inter">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Header with logo */}
        <div className="bg-primary text-white p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Chrome Plugin</h1>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-primary font-bold">CP</span>
          </div>
        </div>

        {/* Main content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Welcome!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This is a Chrome plugin built with React and Tailwind CSS.
          </p>

          {/* Action button */}
          <button className="w-full bg-cyan-700 hover:bg-secondary/90 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12 5 5L20 7"/>
            </svg>
            Get Started
          </button>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 dark:bg-gray-700 p-3 text-center text-xs text-gray-500 dark:text-gray-400">
          v1.0.0
        </div>
      </div>
    </div>
  );
};

export default App;
