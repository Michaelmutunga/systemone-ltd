import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from '@/components/Seo';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="Page Not Found | System One Ltd"
        description="The page you requested could not be found."
        noIndex
      />
      <div className="flex min-h-screen items-center justify-center bg-secondary/20">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-dark-grey">404</h1>
          <p className="mb-4 text-xl text-professional-grey">Oops! Page not found</p>
          <Link to="/" className="text-primary underline hover:text-primary/80 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
