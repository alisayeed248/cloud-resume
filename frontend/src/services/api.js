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
    }
  }
};

export default api;