const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = {
  blog: {
    getAllPosts: async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/posts`);

        if (!response.ok) {
          return { posts: [] };
        }

        const data = await response.json();
        if (data && data.body) {
          try {
            const bodyData = typeof data.body === 'string'
              ? JSON.parse(data.body)
              : data.body;

            return bodyData
          } catch (parseError) {
            return { posts: [] };
          }
        }

        return data;
      } catch (error) {
        return { posts: [] };
      }
    },
    getPostBySlug: async(slug) => {
      try {
        const response = await fetch(`${API_BASE_URL}/posts/${slug}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    },
    createPost: async (postData) => {
      try {
        const response = await fetch(`${API_BASE_URL}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
          },
          body: JSON.stringify(postData)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
      } catch (error) {
        throw error;
      }
    }
  }
};

export default api;