// src/hooks/useApi.js
import { useState, useEffect, useCallback } from 'react';
import API from '../api'; // Import your configured Axios instance

const useApi = (endpoint, method = 'get', initialData = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (body = null, queryParams = {}) => {
    setLoading(true);
    setError(null);
    setData(initialData); // Reset data to initial state

    try {
      const config = {
        method,
        url: endpoint,
        data: body, // Only include body for POST, PUT, PATCH
        params: queryParams, // query params for all the requests.
      };

      const response = await API(config);
      setData(response.data);
      return response; // Return the whole response
    } catch (err) {
      setError(err);
        console.error("API Error:", err); // Log full error
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Error Data:", err.response.data);
          console.error("Error Status:", err.response.status);
          console.error("Error Headers:", err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          console.error("Error Request:", err.request);
        }
      return null; // Return null on error.
    } finally {
      setLoading(false);
    }
  }, [endpoint, method, initialData]); // Dependencies for useCallback

  // Optional: Automatic initial fetch on mount
  useEffect(() => {
    if (method === 'get') { // Only auto-fetch for GET requests
      request();
    }
  }, [request, method]);

  return { data, loading, error, request };
};

export default useApi;