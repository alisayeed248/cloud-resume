// src/admin/TestEditor.jsx
import React, { useState } from 'react';
import TipTapEditor from './TipTapEditor';

const TestEditor = () => {
  const [content, setContent] = useState('<p>Test your editor here...</p>');
  
  const handleContentChange = (newContent) => {
    setContent(newContent);
    console.log('Content updated:', newContent); // Check console to see the HTML output
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>TipTap Editor Test</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <TipTapEditor content={content} onChange={handleContentChange} />
      </div>
      
      <div>
        <h3>HTML Output:</h3>
        <pre style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '10px', 
          borderRadius: '4px',
          overflow: 'auto',
          maxHeight: '200px'
        }}>
          {content}
        </pre>
      </div>
    </div>
  );
};

export default TestEditor;