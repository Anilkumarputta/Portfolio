import { useId } from "react";
import styled from "styled-components";

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoMark = styled.svg`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  flex-shrink: 0;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

const BrandName = styled.span`
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-strong);
  text-transform: uppercase;
`;

const BrandRole = styled.span`
  font-family: var(--font-code);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  text-transform: uppercase;
`;

const BrandLogo = ({ showText = true, size = 52 }) => {
  const gradientId = useId();

  return (
    <Brand>
      <LogoMark
        size={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Anil Kumar logo"
      >
        <defs>
          <linearGradient id={gradientId} x1="8" y1="8" x2="56" y2="56">
            <stop stopColor="#20B4AA" />
            <stop offset="1" stopColor="#FF6E2D" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="16" fill="#101820" />
        <rect
          x="4"
          y="4"
          width="56"
          height="56"
          rx="16"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
        />
        <path
          d="M18 45L30.5 19H34L46 45H40.9L37.8 38H26.2L23 45H18ZM27.9 33.9H35.9L32 24.8L27.9 33.9Z"
          fill="#F7F1DE"
        />
        <path d="M39 27L49 19V23L42.7 27.9L49 33V37L39 29.8V27Z" fill="#20B4AA" />
      </LogoMark>
      {showText && (
        <BrandText>
          <BrandName>Anil Kumar</BrandName>
          <BrandRole>Full Stack Developer</BrandRole>
        </BrandText>
      )}
    </Brand>
  );
};

export default BrandLogo;
