import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const metadata = {
  title: "Studio | AG Creative"
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
