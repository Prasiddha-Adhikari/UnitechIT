'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';

type Story = {
  id: number;
  name: string;
  profile_photo: string;
  title: string;
  story: string;
  image?: string;
  created_at: string;
};

const demoStories: Story[] = [
  {
    id: 1,
    name: 'Sita Shrestha',
    profile_photo: '/images/sita.jpg',
    title: 'Cracked the Interview in 2 Months!',
    story:
      'I joined the training and in just 2 months, I landed a front-end developer job in a reputed IT company...',
    image: '/images/success1.jpg',
    created_at: '2025-05-01',
  },
  {
    id: 2,
    name: 'Ram Thapa',
    profile_photo: '/images/ram.jpg',
    title: 'From Beginner to Backend Pro',
    story:
      'Coming from a non-tech background, I never imagined working with PHP and MySQL. Thanks to the bootcamp...',
    image: '/images/success2.jpg',
    created_at: '2025-04-20',
  },
];

export default function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <>
      {/* Heading Section */}
      <section className="w-full bg-blue-600">
        <div className="max-w-6xl mx-auto py-10 px-4 text-center">
          <h1 className="text-white text-4xl font-bold">
            Our <span className="text-orange-300">Success Stories</span>
          </h1>
          <p className="mt-2 text-blue-100 max-w-xl mx-auto">
            Real experiences from our successful learners who transformed their careers.
          </p>
        </div>
      </section>

      {/* Stories Grid Section */}
      <section className="max-w-6xl mx-auto pt-12 pb-28 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demoStories.map((story) => (
            <article
              key={story.id}
              className="bg-white shadow-md rounded-2xl p-6 cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelectedStory(story)}
            >
              <header className="flex items-center mb-5">
                <Image
                  src={story.profile_photo}
                  alt={story.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                  unoptimized
                />
                <div className="ml-4">
                  <p className="font-semibold text-lg text-gray-900">{story.name}</p>
                  <time className="text-sm text-gray-500" dateTime={story.created_at}>
                    {new Date(story.created_at).toLocaleDateString()}
                  </time>
                </div>
              </header>
              <h2 className="text-xl font-bold mb-3 text-gray-800">{story.title}</h2>
              <p className="text-gray-600 text-sm">{story.story.substring(0, 120)}...</p>
            </article>
          ))}
        </div>
      </section>

      {/* Modal Dialog for Selected Story */}
      <Dialog open={!!selectedStory} onClose={() => setSelectedStory(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-6">
          <DialogPanel className="max-w-3xl w-full bg-white rounded-xl p-8 shadow-xl overflow-auto max-h-[90vh]">
            {selectedStory && (
              <>
                <header className="flex items-center mb-6">
                  <Image
                    src={selectedStory.profile_photo}
                    alt={selectedStory.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                    unoptimized
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-lg text-gray-900">{selectedStory.name}</p>
                    <time className="text-sm text-gray-500" dateTime={selectedStory.created_at}>
                      {new Date(selectedStory.created_at).toLocaleDateString()}
                    </time>
                  </div>
                </header>
                <h2 className="text-3xl font-bold mb-5 text-orange-600">{selectedStory.title}</h2>
                {selectedStory.image && (
                  <Image
                    src={selectedStory.image}
                    alt="Story Image"
                    width={700}
                    height={350}
                    className="rounded-lg mb-6 object-cover"
                    unoptimized
                  />
                )}
                <p className="text-gray-800 whitespace-pre-line text-lg">{selectedStory.story}</p>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
