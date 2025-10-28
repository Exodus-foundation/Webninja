import React, { useState } from 'react';
import SkeletonCard from './SkeletonCard';
import PreviewModal from './PreviewModal';

const skeletons = [
  {
    id: 1,
    title: "Minimal Blog",
    preview_image_url: "/previews/blog.png",
    html: "<div>...</div>",
    css: ".container { ... }"
  },
  // ...more skeletons
];

export default function SkeletonGallery() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">AI-Generated Web Skeletons</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skeletons.map(skel => (
          <SkeletonCard
            key={skel.id}
            title={skel.title}
            image={skel.preview_image_url}
            onClick={() => setSelected(skel)}
          />
        ))}
      </div>
      {selected && (
        <PreviewModal skeleton={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
