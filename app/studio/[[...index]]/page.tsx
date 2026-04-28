import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Studio | AG Creative"
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
