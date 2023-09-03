import { generateOpenApiDocument } from 'trpc-openapi';
import { appRouter } from './api/root';

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "Colinas Pick'em OpenAPI",
  version: '1.0.0',
  baseUrl: 'https://colinas.vercel.app/api',
  docsUrl: 'https://colinas.vercel.app/docs',
});
