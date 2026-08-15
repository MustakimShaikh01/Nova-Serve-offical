import { Metadata } from "next";
import { WallOfFame } from "@/components/WallOfFame";

export const metadata: Metadata = {
  title: "Wall of Fame & Open Source Contribution | NovaServe Cloud",
  description:
    "Honoring open source contributors, maintainers, and cloud architects building NovaServe. Explore our Wall of Fame, claim good first issues, and earn contributor perks.",
  openGraph: {
    title: "Wall of Fame & Open Source Contribution | NovaServe Cloud",
    description:
      "Honoring open source contributors, maintainers, and cloud architects building NovaServe.",
    url: "https://novaserve.cloud/wall-of-fame",
    siteName: "NovaServe Cloud",
    type: "website",
  },
};

export default function WallOfFamePage() {
  return <WallOfFame />;
}
