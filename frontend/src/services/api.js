const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = {
  blog: {
    getAllPosts: async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/posts`);

        if (!response.ok) {
          console.error(`API request failed with status ${response.status}`);
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
            console.error("Error parsing body:", parseError);
            return { posts: [] };
          }
        }

        return data;
      } catch (error) {
        console.error("API request error:", error);
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
        console.error("Error fetching post:", error);
        throw error;
      }
    },
    createPost: async (postData) => {
      try {
        console.log('Making POST request to:', `${API_BASE_URL}/posts`);
        const response = await fetch(`${API_BASE_URL}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData)
        });

        if (!response.ok) {
          console.error(`API request failed with status ${response.status}`);
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('API response:', result);
        return result;
      } catch (error) {
        console.error("Error creating post:", error);
        throw error;
      }
    }
  }
};

export default api;