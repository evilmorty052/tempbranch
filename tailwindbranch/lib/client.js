import sanityClient from '@sanity/client';
import { useParams } from "react-router-dom";
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'noj3nhym',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: import.meta.env.VITE_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);