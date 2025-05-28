// src/admin/TestPostForm.jsx
import React, { useState } from 'react';
import PostForm from './PostForm';
import api from '../../services/api';

const TestPostForm = () => {
  const [saving, setSaving] = useState(false);
  const [savedPost, setSavedPost] = useState(null);

  const handleSave = async (postData) => {
    setSaving(true);
    
    // Simulate API call
    try {
      console.log('Sending to API:', postData);
      const result = await api.blog.createPost(postData);
      console.log('API response:', result);
      alert('Post created successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating post');
    }
    // console.log('Saving post:', postData);
    // await new Promise(resolve => setTimeout(resolve, 1000));
    
    // setSavedPost(postData);
    setSaving(false);
    
    // alert('Post saved successfully (simulated)');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Post Form</h1>
      
      <PostForm onSave={handleSave} saving={saving} />
      
      {savedPost && (
        <div style={{ marginTop: '40px' }}>
          <h2>Last Saved Post Data:</h2>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '4px',
            overflow: 'auto'
          }}>
            {JSON.stringify(savedPost, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TestPostForm;