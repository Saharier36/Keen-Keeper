import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-6xl font-bold text-emerald-900">404</h2>
        <p className="text-xl text-slate-500 mt-4 text-center px-4">
          Oops! The page you are looking for is not available.
        </p>
        <Link
          href="/"
          className="btn bg-emerald-900 text-white mt-8 hover:bg-emerald-700"
        >
          <ArrowLeft />
          Back to Home
        </Link>
      </div>
    );
};

export default NotFoundPage;