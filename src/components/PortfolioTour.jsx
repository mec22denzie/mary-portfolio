import { useEffect, useState } from "react";
import "./PortfolioTour.css";

const tourSteps = [
  {
    selector: "#tour-name",
    placement: "right",
  },
  {
    selector: "#tour-about",
    placement: "bottom",
  },
    {
    selector: "#tour-skill",
    placement: "bottom",
  },
    {
    selector: "#tour-contact",
    placement: "bottom",
  },
  {
    selector: "#tour-navbar",
    placement: "bottom",
  },
];

function PortfolioTour() {
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Start the tour after one second
  useEffect(() => {
    const startTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      window.clearTimeout(startTimer);
    };
  }, []);

  // Handle scrolling, highlighting, and ball position
  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const step = tourSteps[currentStep];
    const element = document.querySelector(step.selector);

    // Skip a step if its element is not found
    if (!element) {
      const skipTimer = window.setTimeout(() => {
        if (currentStep < tourSteps.length - 1) {
          setCurrentStep((previousStep) => previousStep + 1);
        } else {
          setIsVisible(false);
        }
      }, 500);

      return () => {
        window.clearTimeout(skipTimer);
      };
    }

    const updatePosition = () => {
      const rectangle = element.getBoundingClientRect();

      let top =
        rectangle.top +
        window.scrollY +
        rectangle.height / 2;

      let left =
        rectangle.left +
        window.scrollX +
        rectangle.width / 2;

      if (step.placement === "right") {
        left = rectangle.right + window.scrollX + 30;
      }

      if (step.placement === "left") {
        left = rectangle.left + window.scrollX - 30;
      }

      if (step.placement === "bottom") {
        top = rectangle.bottom + window.scrollY + 30;
      }

      if (step.placement === "top") {
        top = rectangle.top + window.scrollY - 30;
      }

      setPosition({
        top,
        left,
      });
    };

    // Scroll to the target
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Position the ball after scrolling begins
    const positionTimer = window.setTimeout(() => {
      updatePosition();
      element.classList.add("tour-highlight");
    }, 700);

    // Move to the next tour step
    const stepTimer = window.setTimeout(() => {
      element.classList.remove("tour-highlight");

      if (currentStep < tourSteps.length - 1) {
        setCurrentStep((previousStep) => previousStep + 1);
      } else {
        setIsVisible(false);
      }
    }, 3000);

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.clearTimeout(positionTimer);
      window.clearTimeout(stepTimer);

      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);

      element.classList.remove("tour-highlight");
    };
  }, [currentStep, isVisible]);

  // First return: show nothing until the tour is ready
  if (!isVisible || !position) {
    return null;
  }

  // Second return: display the ball
  return (
    <div className="portfolio-tour" aria-hidden="true">
      <div
        className="tour-pointer"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        <span className="tour-ball" />
      </div>
    </div>
  );
}

export default PortfolioTour;