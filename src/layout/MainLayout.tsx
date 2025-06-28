import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainArea from "@/components/MainArea/MainArea";


export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      
      {/* Header */}
      <div className="h-20 flex items-center">
        <Header />
      </div>

      {/* Main Body */}
      <div className="flex-grow flex flex-row overflow-hidden min-h-0">
        <MainArea />
      </div>

      {/* Footer */}
      <div className="h-8 flex items-center">
        <Footer />
      </div>
    </div>
  );
}
