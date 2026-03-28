/**
 * Custom React Hooks
 * Hooks reutilizáveis em toda a aplicação
 */

import { useState, useEffect, useCallback } from "react";

/**
 * useAsync - Para gerenciar estado de fetch/async operations
 */
export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await asyncFunction();
      setData(response);
    } catch (e) {
      setError(e instanceof Error ? e : new Error(String(e)));
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { data, loading, error, execute };
}

/**
 * usePagination - Para gerenciar paginação
 */
export function usePagination(items: any[], itemsPerPage: number = 12) {
  const [current, setCurrent] = useState(1);

  const total = Math.ceil(items.length / itemsPerPage);
  const start = (current - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = items.slice(start, end);

  const goToPage = (page: number) => {
    setCurrent(Math.max(1, Math.min(page, total)));
  };

  return {
    current,
    total,
    currentItems,
    goToPage,
    hasNextPage: current < total,
    hasPrevPage: current > 1,
  };
}

/**
 * useWindowSize - Para resposividade
 */
export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

/**
 * useScrollPosition - Para detectar scroll
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}