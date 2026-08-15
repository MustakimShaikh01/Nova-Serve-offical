import { Metadata } from "next";
import { WallOfFame } from "@/components/WallOfFame";

export const metadata: Metadata = {
  title: "Contribute & Open Source Wall of Fame | NovaServe Cloud",
  description:
    "Join our open source community. Browse good first issues, submit pull requests, and get featured on the NovaServe Wall of Fame.",
  openGraph: {
    title: "Contribute & Open Source Wall of Fame | NovaServe Cloud",
    description:
      "Join our open source community. Browse good first issues, submit pull requests, and get featured on the NovaServe Wall of Fame.",
    url: "https://novaserve.cloud/contribute",
    siteName: "NovaServe Cloud",
    type: "website",
  },
};

export default function ContributePage() {
  return <WallOfFame />;
}
