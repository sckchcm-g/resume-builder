import { useEffect, useState } from "react";
import AppLayout from "../ui/AppLayout.jsx";
import DesktopView from "../ui/DesktopView.jsx";
function Dashboard() {
  const [viewSize, setViewSize] = useState(null);

  useEffect(() => {
    

    const handleResize = () => {
      
      const width = window.innerWidth;
      console.log(width)
      if (width <= 576) {
        setViewSize("small");
      } else if (width > 576 && width <= 1024) {
        setViewSize("medium");
      } else if (width > 1024 && width <= 1280) {
        setViewSize("large");
      } else {
        setViewSize("Xtra-large");
      }
    };
    
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Initial check for the window size when the component mounts
  handleResize();
    // Cleanup the event listener on component unmount
    return () => {
      
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {viewSize === "Xtra-large" ? (
      <DesktopView />
    ) : (
      <AppLayout />
    )}
    </div>
  );
}

export default Dashboard;
