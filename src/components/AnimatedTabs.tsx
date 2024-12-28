'use client';

import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export function TabsDemo() {
    const tabs = [
        {
            title: 'Chess (scratch)',
            value: 'Chess',
            content: (
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                    <Image src='/images/chess.png' alt='Netflix' />
                </div>
            ),
        },
        {
            title: 'Scalable Chat App',
            value: 'Scalable Chat App',
            content: (
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                    <Image src='/images/1.png' alt='Netflix' />
                </div>
            ),
        },
        {
            title: 'Deploy repo to cloud (like Vercel)',
            value: 'Deploy repo to cloud',
            content: (
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                    <Image
                        src='/images/vercel-deploy.png'
                        alt='Netflix'
                    />
                </div>
            ),
        },
        {
            title: 'Socket 3d Game',
            value: 'Socket 3d Game',
            content: (
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                    <Image
                        src='/images/socket-3d-game.png.'
                        alt='Netflix'
                    />
                </div>
            ),
        },
        {
            title: 'Community Platform',
            value: 'Community Platform',
            content: (
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                    <Image src='/images/discord.png' alt='Netflix' />
                </div>
            ),
        },
    ];

    return (
        <div className='h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full items-start justify-start'>
            <Tabs defaultValue='Chess' className='w-[400px]'>
                <TabsList>
                    {tabs.map(tab => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                            {tab.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map(tab => (
                    <TabsContent key={tab.value} value={tab.value}>
                        {tab.content}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
