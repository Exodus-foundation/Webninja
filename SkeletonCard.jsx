import React from 'react';

export default function SkeletonCard({ title, image, onClick }) {
  return (
    <button className="border rounded shadow hover:shadow-lg" onClick={onClick}>
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-2 text-center font-medium">{title}</div>
    </button>
  );
}
