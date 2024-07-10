import Navbar from "../component/Navbar";
import Course from "../component/Course";
import Footer from "../component/Footer";
export default function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}
