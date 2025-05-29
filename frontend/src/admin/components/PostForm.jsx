// src/admin/components/PostForm.jsx
import React, { useState, useEffect } from 'react';
import TipTapEditor from './TiptapEditor';
import { v4 as uuidv4 } from 'uuid';
import './PostForm.css';

const PostForm = ({ post, onSave, saving }) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [featuredImageUrl, setFeaturedImageUrl] = useState('');
  
  const categories = ['Tech', 'Travel', 'Personal', 'Projects'];
  
  // Load post data if editing an existing post
  useEffect(() => {
    if (post) {
      setTitle(post.title || '');
      setSlug(post.slug || '');
      setExcerpt(post.excerpt || '');
      setContent(post.content || '');
      setCategory(post.category || '');
      setFeaturedImageUrl(post.featured_image || '');
    }
  }, [post]);

  // Generate slug from title
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/-+/g, '-')       // Replace multiple hyphens with single
      .trim();                    // Trim leading/trailing spaces/hyphens
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    
    // Only auto-generate slug if it hasn't been manually edited
    if (!post || slug === generateSlug(title)) {
      setSlug(generateSlug(newTitle));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!category) {
      alert('Please select a category');
      return;
    }
    
    const currentTimestamp = new Date().toISOString();

    const postData = {
      postId: uuidv4(),
      title,
      slug,
      excerpt,
      content,
      category,
      featured_image: featuredImageUrl,
      author: "Sayeed Ali",
      status: "published",  
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp
    };
    
    if (post?.id) {
      postData.id = post.id;
    }
    
    onSave(postData);
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
          placeholder="Enter post title"
          className="form-control"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="slug">Slug</label>
        <div className="input-group">
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            placeholder="post-url-slug"
            className="form-control"
          />
          <div className="slug-help">
            This will be the URL for your post: /hobbies/{category.toLowerCase()}/{slug}
          </div>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="form-control"
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat.toLowerCase()}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="excerpt">Excerpt</label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Brief summary of the post"
          rows="3"
          className="form-control"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="featuredImageUrl">Featured Image URL</label>
        <input
          type="text"
          id="featuredImageUrl"
          value={featuredImageUrl}
          onChange={(e) => setFeaturedImageUrl(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="form-control"
        />
        {featuredImageUrl && (
          <div className="image-preview">
            <img src={featuredImageUrl} alt="Featured" />
          </div>
        )}
      </div>
      
      <div className="form-group">
        <label>Content</label>
        <TipTapEditor content={content} onChange={setContent} />
      </div>
      
      <div className="form-actions">
        <button type="submit" className="save-button" disabled={saving}>
          {saving ? 'Saving...' : (post?.id ? 'Update Post' : 'Create Post')}
        </button>
      </div>
    </form> 
  );
};

export default PostForm;