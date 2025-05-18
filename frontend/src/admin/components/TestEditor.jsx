// src/admin/TestPostForm.jsx (updated)
import React, { useState } from 'react';
import PostForm from './PostForm';

const TestPostForm = () => {
  const [saving, setSaving] = useState(false);
  const [savedPost, setSavedPost] = useState(null);

  const handleSave = async (postData) => {
    setSaving(true);
    
    // Simulate API call
    console.log('Saving post:', postData);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For testing, add an ID and timestamps
    const newPost = {
      ...postData,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    setSavedPost(newPost);
    setSaving(false);
    
    alert('Post saved successfully (simulated)');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '20px'
      }}>
        <h1 style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginTop: '0' }}>
          Create New Post
        </h1>
        
        <PostForm onSave={handleSave} saving={saving} />
      </div>
      
      {savedPost && (
        <div style={{ 
          maxWidth: '900px', 
          margin: '20px auto 0', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '20px'
        }}>
          <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            Post Preview
          </h2>
          
          <div style={{ marginTop: '20px' }}>
            <h3>Title: {savedPost.title}</h3>
            <p><strong>Slug:</strong> {savedPost.slug}</p>
            <p><strong>Category:</strong> {savedPost.category}</p>
            
            {savedPost.featured_image && (
              <div style={{ margin: '20px 0' }}>
                <img 
                  src={savedPost.featured_image} 
                  alt="Featured" 
                  style={{ maxWidth: '100%', maxHeight: '300px' }}
                />
              </div>
            )}
            
            <div style={{ margin: '20px 0' }}>
              <h4>Excerpt:</h4>
              <p>{savedPost.excerpt}</p>
            </div>
            
            <div>
              <h4>Content:</h4>
              <div dangerouslySetInnerHTML={{ __html: savedPost.content }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPostForm;