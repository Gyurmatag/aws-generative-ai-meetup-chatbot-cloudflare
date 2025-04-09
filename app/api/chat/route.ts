import { Message } from 'ai';
import { streamText } from 'ai';
import { createWorkersAI } from 'workers-ai-provider';
import { getCloudflareContext } from "@opennextjs/cloudflare";


export async function POST(req: Request) {
  const workersai = createWorkersAI({ binding: getCloudflareContext().env.AI });
  // @ts-expect-error - model name is valid but type is not up to date
  const model = workersai('@cf/meta/llama-4-scout-17b-16e-instruct', {});
  const { messages } = await req.json() as { messages: Message[] };

  const result = streamText({
    model,
    messages: messages as Message[],
  });

  return result.toDataStreamResponse()
}