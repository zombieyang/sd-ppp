import { CSSProperties } from "react";

type IconProps = {
    size?: number;
    className?: string;
    style?: CSSProperties;
};

const baseAttributes = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24"
};

export const CloseIcon = ({ size = 18, className, style }: IconProps) => (
    <svg
        width={size}
        height={size}
        className={className}
        style={style}
        {...baseAttributes}
    >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export const UploadIcon = ({ size = 16, className, style }: IconProps) => (
    <svg
        width={size}
        height={size}
        className={className}
        style={style}
        {...baseAttributes}
    >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
);
