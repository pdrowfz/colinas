import { type NextApiRequest, type NextApiResponse } from 'next';
import { createOpenApiNextHandler } from 'trpc-openapi';
import cors from 'nextjs-cors';
import { appRouter } from '~/server/api/root';
import { createTRPCContext } from '~/server/api/trpc';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  return createOpenApiNextHandler({
    router: appRouter,
    createContext: createTRPCContext,
  })(req, res);
};

export default handler;
