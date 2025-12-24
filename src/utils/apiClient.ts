const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.jiaminie.tech';

class APIClient {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Contact form submission
  async submitContact(formData: any) {
    return this.request('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Demo booking
  async bookDemo(demoData: any) {
    return this.request('/api/demo/book', {
      method: 'POST',
      body: JSON.stringify(demoData),
    });
  }

  // Newsletter subscription
  async subscribeNewsletter(email: string) {
    return this.request('/api/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Get case studies
  async getCaseStudies(filters = {}) {
    const queryString = new URLSearchParams(filters).toString();
    return this.request(`/api/case-studies?${queryString}`);
  }

  // Get blog posts
  async getBlogPosts(page = 1, limit = 9) {
    return this.request(`/api/blog?page=${page}&limit=${limit}`);
  }
}

export default new APIClient();
