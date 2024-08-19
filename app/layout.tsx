import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-b from-gray-100 to-white text-black min-h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar className="bg-gray-200 w-1/5 p-4" />
          <div className="flex-1 flex flex-col">
            <Header className="bg-blue-500 text-white p-4 shadow-lg" />
            <main className="flex-1 p-8">
              {children}
            </main>
            <Footer className="bg-blue-500 text-white text-center p-4 mt-auto" />
          </div>
        </div>
      </body>
    </html>
  );
}

