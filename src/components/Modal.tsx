"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "../styles/componentStyles/modal.styles.css";

export default function Modal({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateY(-20px);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
