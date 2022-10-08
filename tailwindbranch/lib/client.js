import sanityClient from '@sanity/client';
import { useParams } from "react-router-dom";
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'noj3nhym',
  dataset: 'production',
  apiVersion: '1',
  useCdn: true,
  create: true,
  token: 'skUsjt2aRLKBj133E0cV0J99U8etwQR40GxruDoTJ87OzyG3tZYqS64OTttL0WbYVe4dEKZPMtusqnGusKngqFXTK3E0OX57T1Xbe5GM9hnuZCm8QYQHPykU1mm0H1uTusZA2HHDS3zOk6H0bJpXUjkODWnHpYforr916Xk8ATLdv9gVUlcZ'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);