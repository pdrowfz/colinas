import { generateOpenApiDocument } from 'trpc-openapi';
import { appRouter } from './api/root';

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "Colinas Pick'em OpenAPI",
  version: '1.0.0',
  baseUrl: 'http://localhost:3000/api',
});
