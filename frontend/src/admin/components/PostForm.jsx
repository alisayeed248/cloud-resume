// src/admin/components/PostForm.jsx
import React, { useState, useEffect, useRef } from 'react';
import TipTapEditor from './TipTapEditor';
import './PostForm.css';

const PostForm = ({ post, onSave, saving }) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [featuredImageUrl, setFeaturedImageUrl] = useState('');
  
  const hasEditedSlug = useRef(false);

  useEffect(() => {
    if (post) {
      setTitle(post.title || '');
      setSlug(post.slug || '');
      setExcerpt(post.excerpt || '');
      setContent(post.content || '');
      setCategory(post.category || '');
      setFeaturedImageUrl(post.featured_image || '');
      hasEditedSlug.current = true; // prevent auto-regeneration
    } else {
      hasEditedSlug.current = false;
    }
  }, [post]);

  const generateSlug = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    if (!hasEditedSlug.current) {
      const newSlug = generateSlug(newTitle);
      setSlug(newSlug);
    }
  };

  const handleSlugChange = (e) => {
    hasEditedSlug.current = true;
    setSlug(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title,
      slug,
      excerpt,
      content,
      category,
      featured_image: featuredImageUrl,
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
        />
      </div>

      <div className="form-group">
        <label htmlFor="slug">Slug</label>
        <input
          type="text"
          id="slug"
          value={slug}
          onChange={handleSlugChange}
          required
          placeholder="post-url-slug"
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g. Technology, Personal, etc."
        />
      </div>

      <div className="form-group">
        <label htmlFor="excerpt">Excerpt</label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Brief summary of the post"
          rows="3"
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
        />
        {featuredImageUrl && (
          <div className="image-preview">
            <img src={featuredImageUrl} alt="Featured" />
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <TipTapEditor key={post?.id || 'new'} content={content} onChange={setContent} />
      </div>

      <div className="form-actions">
        <button type="submit" className="save-button" disabled={saving}>
          {saving ? 'Saving...' : post?.id ? 'Update Post' : 'Create Post'}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
