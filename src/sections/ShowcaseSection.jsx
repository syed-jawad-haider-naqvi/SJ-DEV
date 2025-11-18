import { useEffect, useRef } from "react";

// ---------- CSS styles injected directly ---------
const styles = `
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.9s ease-out, transform 0.9s ease-out;
}

.fade-up.show {
  opacity: 1;
  transform: translateY(0);
}

`;

if (typeof document !== "undefined" && !document.getElementById("fade-float-styles")) {
  const styleTag = document.createElement("style");
  styleTag.id = "fade-float-styles";
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
}
// --------------------------------------------------

// Hook: reveal on scroll
const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

// Wrapper component
const FadeFloatCard = ({ className, children }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`fade-up ${className || ""}`}>
      {children}
    </div>
  );
};

// -------- COMPONENT ----------
const AppShowcase = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          {/* FIRST LARGE PROJECT */}
          <FadeFloatCard
            className="first-project-wrapper cursor-pointer"
            onClick={() =>
              (window.location =
                "https://drive.google.com/file/d/17O7PBlDaCM5G0P8GyStzefzzvCXxb8tP/view?usp=drive_link")
            }
          >
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="PetVerse Interface" />
            </div>
            <div className="text-content">
              <h2>
                PetVerse Vets: All-in-one veterinary platform connecting pet
                owners with vets through seamless appointments, payments, and
                communication.
              </h2>
              <p className="text-white-50 md:text-xl">
                MERN Stack with Stripe for fast, smooth experience.
              </p>
            </div>
          </FadeFloatCard>

          {/* SMALL PROJECTS LIST */}
          <div className="project-list-wrapper overflow-hidden">

            <FadeFloatCard className="project">
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project2.png" alt="Library Platform" />
              </div>
              <h2>RestoMania:</h2>
              <p className="text-white-50 md:text-xl">
                Market-ready Restaurant Management Desktop Platform (C#, .NET, SQL).
              </p>
            </FadeFloatCard>

            <FadeFloatCard className="project">
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/fakeNewsDt.png" alt="Fake News AI App" />
              </div>
              <h2>AI-Based Fake News Detection</h2>
              <p className="text-white-50 md:text-xl">
                Python, Flask, Streamlit, Scikit-Learn, TF-IDF.
              </p>
            </FadeFloatCard>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
