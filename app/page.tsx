'use client';

import { useChat } from '@ai-sdk/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle>Chat with Llama 4</CardTitle>
          <CardDescription>
            Powered by Cloudflare AI and Vercel AI SDK
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-hidden">
          <ScrollArea className="h-full pr-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex gap-3 mb-4 ${
                  message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <Avatar>
                  <AvatarFallback>
                    {message.role === 'assistant' ? 'AI' : 'You'}
                  </AvatarFallback>
                  {message.role === 'assistant' && (
                    <AvatarImage src="/bot-avatar.png" />
                  )}
                </Avatar>
                <div
                  className={`rounded-lg px-3 py-2 max-w-[85%] ${
                    message.role === 'assistant'
                      ? 'bg-white'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>

        <CardFooter>
          <form
            onSubmit={handleSubmit}
            className="flex w-full gap-2"
          >
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Thinking...' : 'Send'}
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
