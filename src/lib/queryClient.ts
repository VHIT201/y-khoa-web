import { QueryClient } from '@tanstack/react-query';
import { API_BASE_URL } from '../config/api';

interface QueryKeyParams {
  queryKey: readonly unknown[];
}

interface MutationParams {
  url: string;
  method?: string;
  body?: unknown;
}

const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

// Helper to build URL with query params
const buildUrl = (path: string, params?: Record<string, unknown>) => {
  const url = new URL(`${API_BASE_URL}${path}`);
  if (params) {
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        url.searchParams.append(key, String(params[key]));
      }
    });
  }
  return url.toString();
};

// Enhanced error handling
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // If not JSON, use status text
    }
    throw new Error(errorMessage);
  }
  return response.json();
};

const defaultQueryFn = async ({ queryKey }: QueryKeyParams) => {
  const [path, params] = queryKey as [string, Record<string, unknown>?];
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const url = buildUrl(path, params);
  const response = await fetch(url, { headers });
  return handleResponse(response);
};

const defaultMutationFn = async (variables: unknown) => {
  const { url, method = 'POST', body } = variables as MutationParams;
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;
  const response = await fetch(fullUrl, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  return handleResponse(response);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      retry: 3,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    },
    mutations: {
      mutationFn: defaultMutationFn,
      retry: 1,
    },
  },
});