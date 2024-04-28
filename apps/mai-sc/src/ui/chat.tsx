'use client';

import type { Message } from '#/lib/chat/actions';
import type { Session } from '#/lib/types';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useAIState, useUIState } from 'ai/rsc';

import { cn } from '@yocxo/ui';
import { toast } from '@yocxo/ui/toast';

import { useLocalStorage } from '#/lib/hooks/use-local-storage';
import { useScrollAnchor } from '#/lib/hooks/use-scroll-anchor';
import { sleep } from '#/lib/utils';
import { ChatList } from '#/ui/chat-list';
import { ChatPanel } from '#/ui/chat-panel';
import { EmptyScreen } from '#/ui/empty-screen';

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[];
  id?: string;
  session?: Session;
  missingKeys: string[];
}

export function Chat({ id, className, session, missingKeys }: ChatProps) {
  const router = useRouter();
  const path = usePathname();
  const [input, setInput] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [messages] = useUIState();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [aiState] = useAIState();

  const [_, setNewChatId] = useLocalStorage('newChatId', id);

  useEffect(() => {
    console.log('Before useEffect: Checking session and path');
    if (session?.user) {
      console.log(
        'During useEffect: User is present, checking path and message length',
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (path === '/chat' && messages.length === 1) {
        console.log(
          'During useEffect: Path is /chat and only one message, updating path state',
        );
        window.history.replaceState({}, '/chat', `/chat/${id}`);
      }
    }
    console.log('After useEffect: Session and path check complete');
  }, [id, path, session?.user, messages]);

  useEffect(() => {
    console.log(
      'Before useEffect: Preparing to check AI state messages length with initial delay',
    );

    async function delayedCheck() {
      console.log('During useEffect: Starting delay before checking messages');
      await sleep(1000);
      console.log(
        'During useEffect: Delay complete, now checking messages length',
      );

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const messagesLength = aiState.messages?.length;
      if (messagesLength === 2) {
        console.log(
          'During useEffect: AI state messages length is 2, refreshing router',
        );
        router.refresh();
      }
    }

    void delayedCheck();

    console.log(
      'After useEffect: AI state messages length check and potential refresh complete',
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  }, [aiState.messages, router]);

  useEffect(() => {
    console.log(
      `Before useEffect: Setting new chat ID in local storage to ${id}`,
    );
    setNewChatId(id);
    console.log(`After useEffect: New chat ID ${id} set in local storage`);
  }, [id, setNewChatId]);

  useEffect(() => {
    missingKeys.map((key) => {
      toast.error('Missing environment variable', {
        description: `We encountered an issue: The ${key} environment variable is missing. Please try again.`,
      });
    });
  }, [missingKeys]);

  const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } =
    useScrollAnchor();

  return (
    <div
      className="no-scrollbar group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]"
      ref={scrollRef}
    >
      <div
        className={cn('pb-[200px] pt-4 md:pt-10', className)}
        ref={messagesRef}
      >
        {/*eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        {messages.length ? (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          <ChatList messages={messages} isShared={false} session={session} />
        ) : (
          <EmptyScreen />
        )}
        <div className="h-px w-full" ref={visibilityRef} />
      </div>
      <ChatPanel
        id={id}
        input={input}
        setInput={setInput}
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />
    </div>
  );
}
