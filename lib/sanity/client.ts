import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const DEFAULT_PROJECT_ID = "k28x57ex";
const DEFAULT_DATASET = "production";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || DEFAULT_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || DEFAULT_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-01";
const token = process.env.SANITY_API_READ_TOKEN;

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: !token
});

const builder = imageUrlBuilder({ projectId, dataset });

export const urlFor = (source: unknown) => {
  if (!source) return null;
  return builder.image(source).auto("format").width(1600).url();
};
