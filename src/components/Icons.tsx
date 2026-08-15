import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// 1. Official Vercel Logo
export const VercelIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M256 48L512 464H0L256 48Z" fill="#000000" />
  </svg>
);

// 2. Official Stripe Logo
export const StripeIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 25"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M59.64 14.28c0-4.59-2.24-8.23-7.44-8.23-5.22 0-8.38 3.65-8.38 8.19 0 5.41 3.86 8.14 8.7 8.14 2.5 0 4.67-.53 6.22-1.39v-3.79c-1.55.82-3.41 1.25-5.26 1.25-2.18 0-4.14-.77-4.43-3.04h10.51c.02-.38.08-.87.08-1.13zm-10.74-1.92c.22-1.78 1.63-2.6 3.19-2.6 1.5 0 2.94.79 3.19 2.60h-6.38zM34.8 6.36v15.54h5.27V12.19c1.42-.51 3.11-.27 4.09.11V6.52c-1.15-.47-2.91-.56-4.19.16l-.28-1.9H34.8zm-11.4 0l-3.32 12.38-2.63-10.22h-4.99v13.38h4.86v-8.83l2.87 10.45h3.69l3.44-12.8h-3.92zM10.87 2.05L6.47 3.01v14.53c0 2.89 2.18 4.7 5.06 4.7 1.48 0 2.9-.38 3.81-.88v-3.93c-.8.36-1.85.58-2.73.58-1.3 0-2.14-.62-2.14-2.02V8.42h4.87V4.4h-4.48V2.05zM0 8.04c0-2.3 1.84-3.52 4.6-3.52 1.63 0 3.25.43 4.29.98V.91C7.81.39 6.23.16 4.6.16 1.05.16-2.58 2.05-2.58 6.07c0 5.48 7.37 6.13 7.37 9.29 0 1.05-.88 1.54-2.17 1.54-2.6 0-5.75-1.2-7.51-2.22l-.94 5.67C1.52 22.84 4.88 24 8.35 24c6.05 0 9.87-2.87 9.87-7.59C18.22 10.58 10.85 9.93 0 8.04z" fill="#635BFF" />
  </svg>
);

// 3. Official Cloudflare Logo
export const CloudflareIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path d="M16.924 13.916c.14-.492.21-.994.21-1.503 0-2.92-2.37-5.285-5.29-5.285-2.348 0-4.343 1.53-5.025 3.655C5.877 10.923 5 12.022 5 13.344c0 1.764 1.43 3.196 3.194 3.196h8.73c1.765 0 3.194-1.432 3.194-3.196 0-1.465-1.002-2.685-2.433-3.033l-.76.605z" fill="#F38020" />
    <path d="M19.118 10.311c-.347-1.92-1.986-3.376-3.98-3.376-1.522 0-2.877.838-3.585 2.083C11.135 8.706 10.638 8.5 10.1 8.5c-1.49 0-2.7 1.21-2.7 2.7 0 .19.02.38.06.56C6.01 12.18 5 13.56 5 15.1c0 2.15 1.75 3.9 3.9 3.9h10.2c2.15 0 3.9-1.75 3.9-3.9 0-1.92-1.4-3.51-3.26-3.83l-.62-.86z" fill="#F38020" />
  </svg>
);

// 4. Official Supabase Logo
export const SupabaseIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path
      d="M13.359 1.144C12.923.498 11.968.625 11.7.1.343l-8.6 11.53c-.458.614-.02 1.48.74 1.48h8.56l-1.8 9.702c-.436.646.519.519.787 1.244l8.6-11.53c.458-.614.02-1.48-.74-1.48h-8.56l1.8-9.702z"
      fill="#3ECF8E"
    />
  </svg>
);

// 5. Official Linear Logo
export const LinearIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path d="M1.22 66.42a49.9 49.9 0 0 1 32.36-65.2 49.9 49.9 0 0 1 65.2 32.36L66.42 1.22 1.22 66.42z" fill="#5E6AD2" />
    <circle cx="50" cy="50" r="50" fill="#5E6AD2" />
  </svg>
);

// 6. Official Pulumi Logo
export const PulumiIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L2 16l10 5 10-5-10-5z" fill="#8A2BE2" />
  </svg>
);

// 7. Official Docker Logo
export const DockerIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path d="M13.983 11.078h2.119v2.119h-2.119zm-3.084 0h2.119v2.119h-2.119zm-3.084 0h2.119v2.119H7.815zm-3.084 0h2.119v2.119H4.731zm6.168-3.084h2.119v2.119h-2.119zm-3.084 0h2.119v2.119H7.815zm6.168 0h2.119v2.119h-2.119zm3.084 0h2.119v2.119h-2.119zm-6.168-3.084h2.119v2.119h-2.119zM2.5 14.5c0 3.3 2.7 6 6 6h7c3.3 0 6-2.7 6-6H2.5z" fill="#2496ED" />
  </svg>
);

// 8. Official Amazon Web Services (AWS) Logo
export const AwsIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    {/* AWS Smile Arrow & Text */}
    <path d="M6.7 13.2c-.6 0-1.1.2-1.4.6-.3.4-.4.9-.4 1.5 0 .6.1 1.1.4 1.5.3.4.8.6 1.4.6.6 0 1.1-.2 1.4-.6.3-.4.4-.9.4-1.5 0-.6-.1-1.1-.4-1.5-.3-.4-.8-.6-1.4-.6zm10.6 0c-.6 0-1.1.2-1.4.6-.3.4-.4.9-.4 1.5 0 .6.1 1.1.4 1.5.3.4.8.6 1.4.6.6 0 1.1-.2 1.4-.6.3-.4.4-.9.4-1.5 0-.6-.1-1.1-.4-1.5-.3-.4-.8-.6-1.4-.6z" fill="#232F3E" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.8 14.5c-3.1 0-5.8-1.2-7.5-3.1l1.4-1.2c1.3 1.5 3.4 2.4 6.1 2.4 2.7 0 4.8-.9 6.1-2.4l1.4 1.2c-1.7 1.9-4.4 3.1-7.5 3.1z" fill="#FF9900" />
  </svg>
);

// 9. Official Google Cloud Platform (GCP) Logo
export const GcpIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
  </svg>
);

// 10. Official Microsoft Azure Logo
export const AzureIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path d="M13.05 2.15L3.8 17.75h5.55l3.7-6.35 3.35 6.35h5.8L13.05 2.15z" fill="#0089D6" />
    <path d="M2.5 18.25l4.35-7.55 3.35 7.55H2.5z" fill="#0078D4" />
  </svg>
);

// 11. Official Python Logo
export const PythonIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path d="M11.898 0c-5.26 0-4.925 2.278-4.925 2.278l.006 2.355h4.99v.707H4.996S0 4.807 0 10.09c0 5.28 4.343 5.093 4.343 5.093h2.59v-3.64s-.14-4.342 4.27-4.342h4.382v-2.31S16.142 0 11.898 0zm-2.73 1.55a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92z" fill="#3776AB" />
    <path d="M12.102 24c5.26 0 4.925-2.278 4.925-2.278l-.006-2.355h-4.99v-.707h6.973s4.996.533 4.996-4.75c0-5.28-4.343-5.093-4.343-5.093h-2.59v3.64s.14 4.342-4.27 4.342H8.416v2.31s-.557 4.883 3.686 4.883zm2.73-1.55a.96.96 0 1 1 0-1.92.96.96 0 0 1 0 1.92z" fill="#FFD43B" />
  </svg>
);

// 12. Official Go Logo
export const GoIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path d="M1.81 10.07c0-2.42 1.4-3.66 3.67-3.66 1.83 0 3.12.87 3.56 2.29H7.13c-.27-.58-.94-.97-1.68-.97-1.28 0-2.07.82-2.07 2.34 0 1.51.78 2.33 2.07 2.33.78 0 1.46-.43 1.7-1.04H5.32v-1.22h3.76v3.25H8.05v-.73c-.53.58-1.42.92-2.51.92-2.29 0-3.73-1.28-3.73-3.51zm9.32.06c0-2.27 1.48-3.72 3.73-3.72s3.71 1.45 3.71 3.72-1.46 3.71-3.71 3.71-3.73-1.44-3.73-3.71zm5.83 0c0-1.51-.76-2.34-2.1-2.34s-2.1.83-2.1 2.34.76 2.33 2.1 2.33 2.1-.82 2.1-2.33z" fill="#00ADD8" />
  </svg>
);

// 13. Official Java Logo
export const JavaIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5h2v5h-2z" fill="#E76F00" />
  </svg>
);

// 14. Official TypeScript Logo
export const TypescriptIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M11.5 15.5v-7h2v7h-2zm3.5 0v-5h2v1h-1v4h-1z" fill="#FFFFFF" />
  </svg>
);

// 15. Official NovaServe Diamond Emblem
export const DiamondIcon = ({ size = 20, className = "", ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
    {...props}
  >
    <path
      d="M12 2L22 12L12 22L2 12L12 2Z"
      fill="#FFB020"
      stroke="#111111"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M12 6L18 12L12 18L6 12L12 6Z"
      fill="#FFFFFF"
      stroke="#111111"
      strokeWidth="1.5"
    />
  </svg>
);
