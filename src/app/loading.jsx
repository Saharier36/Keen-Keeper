
const LoadingPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-dots loading-xl text-emerald-600"></span>
          <p className="text-emerald-900 font-medium">
            Loading Friends...
          </p>
        </div>
      </div>
    );
};

export default LoadingPage;