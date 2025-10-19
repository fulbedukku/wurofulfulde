// 'use client';

import React, { useEffect, useState } from 'react';

export const AudioPlayerEmbed = ({ songurl }) => {
  const [mounted, setMounted] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const url = new URL(songurl);
      setValid(url.protocol.startsWith('http'));
    } catch {
      setValid(false);
    }
  }, [songurl]);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[252px] bg-gray-100 text-gray-600">
        Loading audio player...
      </div>
    );
  }

  if (!valid) {
    return (
      <div className="flex items-center justify-center h-[252px] bg-red-50 text-red-500">
        Invalid audio URL.
      </div>
    );
  }

  return (
    <iframe
      src={songurl}
      width="100%"
      height="252"
      title="Audio Player"
      className="w-full"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  );
};
