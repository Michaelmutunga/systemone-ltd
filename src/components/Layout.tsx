import { ReactNode, Suspense, lazy } from 'react';
import Header from './Header';
import Footer from './Footer';

const VoiceAssistant = lazy(() => import('./VoiceAssistant'));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <VoiceAssistant />
      </Suspense>
    </div>
  );
};

export default Layout;
