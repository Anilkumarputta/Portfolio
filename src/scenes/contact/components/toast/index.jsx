import { useEffect } from "react";
import styled from "styled-components";

const ToastContainer = styled.div`
  &.toast {
    position: fixed;
    top: 70px;
    right: 20px;
    z-index: 1000;
    background-color: #fffdfa;
    border-radius: 12px;
    padding: 1ch;
    box-shadow: 0 12px 24px rgba(16, 24, 32, 0.15);
    width: 280px;
    color: var(--text-strong);
    border-left: 6px solid var(--brand-orange);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    animation: slideOut 0.5s forwards;

    @media screen and (max-width: 768px) {
      width: 90%;
      right: 0;
      top: 60px;
    }
  }

  &.toast.show {
    opacity: 1;
    transition: all 0.3s ease-in-out;
    animation: slideIn 0.5s forwards;
  }

  .toast-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 13px;
  }

  .icon {
    width: 20px;
    height: 20px;
    padding: 5px;
    background-color: var(--brand-teal);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .message {
    display: flex;
    flex-direction: column;
  }

  .text {
    font-size: 14px;
    color: var(--text-soft);
  }

  .text-1 {
    color: var(--text-strong);
    font-weight: 600;
  }

  &.progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    border-radius: 10px;
    background: #fffdfa;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(90deg, var(--brand-teal), var(--brand-orange));
      border-radius: 10px;
      animation: progress 3s linear infinite;
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes progress {
    0% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }

  @media screen and (max-width: 768px) {
    .toast {
      width: 90%;
      right: 0;
      top: 20px;
    }
  }
`;

const Toast = ({ title, text, type }) => {
  useEffect(() => {
    const toast = document.querySelector(".toast");
    const timer = setTimeout(() => {
      if (toast) {
        toast.classList.remove("show");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastContainer className="toast show">
      <div className="toast-content">
        {type === "success" && <i className="fa-solid fa-check icon"></i>}
        {type === "error" && <i className="fa-solid fa-x-mark icon"></i>}
        <div className="message">
          <span className="text text-1">{title}</span>
          <span className="text text-2">{text}</span>
        </div>
      </div>
      <div className="progress"></div>
    </ToastContainer>
  );
};

export default Toast;
