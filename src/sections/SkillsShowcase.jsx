import { useMediaQuery } from "react-responsive";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
  // 1. Define logo size
  const logoWidth = isMobile ? 40 : 80; 
  
  // 2. Define desired horizontal spacing (e.g., 8px on desktop, 4px on mobile)
  // We'll use this for the margin/padding to control the gap between logos.
  const horizontalSpacing = isMobile ? 4 : 8; // Small gap on mobile (4px), larger on desktop (8px)

  return (
    // Remove all margin classes (mx-[-...px] and marquee-item spacing)
    // Use padding for spacing, which is safer than negative margins
    <div 
      className="flex-none flex-center"
      style={{ 
        // Apply horizontal padding to create the space around the logo
        paddingLeft: `${horizontalSpacing}px`,
        paddingRight: `${horizontalSpacing}px`,
      }}
    >
      <img src={icon.imgPath} alt={icon.name} width={logoWidth} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />
    
    <div className="marquee h-52">
      {/* Remove the conflicting gap class, spacing is now handled by LogoIcon's padding */}
      <div className="marquee-box md:gap-6"> 
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;