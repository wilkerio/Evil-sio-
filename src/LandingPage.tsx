import { useEffect, useRef } from "react";
import bodyHtml from "./landing-body.html?raw";
import bootScript from "./landing-boot.js?raw";

// HTML/CSS/JS artesanal preservado como está (visual/comportamento aprovado).
export default function LandingPage() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const script = document.createElement("script");
    script.textContent = bootScript;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
