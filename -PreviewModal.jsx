import React from 'react';

export default function PreviewModal({ skeleton, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded max-w-lg w-full">
        <button className="float-right" onClick={onClose}>✖</button>
        <h2 className="text-xl font-bold mb-2">{skeleton.title}</h2>
        <div className="mb-4">
          <iframe
            title="Preview"
            srcDoc={`<style>${skeleton.css}</style>${skeleton.html}`}
            className="w-full h-60 border"
          />
        </div>
        <pre className="bg-gray-100 p-2 overflow-x-auto">{skeleton.html}</pre>
      </div>
    </div>
  );
}
