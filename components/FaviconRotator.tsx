'use client';

import { useEffect } from 'react';

export default function FaviconRotator() {
  useEffect(() => {
    const img = new Image();
    img.src = '/IMG-20251014-WA0007.jpg';

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 64;
    canvas.height = 64;

    let angle = 0;

    const existingLink = document.querySelector("link[rel='icon']");
    const link =
      (existingLink as HTMLLinkElement) ||
      (Object.assign(document.createElement('link'), {
        rel: 'icon',
        type: 'image/png',
      }) as HTMLLinkElement);

    function drawRotatingFavicon() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // circular mask
      ctx.save();
      ctx.beginPath();
      ctx.arc(32, 32, 30, 0, Math.PI * 2);
      ctx.clip();

      // rotate + draw
      ctx.translate(32, 32);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.translate(-32, -32);
      ctx.drawImage(img, 0, 0, 64, 64);
      ctx.restore();

      link.href = canvas.toDataURL('image/png'); // ✅ fixed type
      document.head.appendChild(link);

      angle += 2; // speed
      requestAnimationFrame(drawRotatingFavicon);
    }

    img.onload = drawRotatingFavicon;
  }, []);

  return null;
}
