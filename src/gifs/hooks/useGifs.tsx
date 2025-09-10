import { useRef, useState, useEffect } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

const CACHE_KEY = 'gifs-cache';
const HISTORY_KEY = 'gifs-history';

const loadFromStorage = <T,>(key: string, defaultValue: T): T => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const saveToStorage = <T,>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('Error saving to localStorage:', error);
  }
};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>(() => 
    loadFromStorage(HISTORY_KEY, [])
  );

  const gifsCache = useRef<Record<string, Gif[]>>(
    loadFromStorage(CACHE_KEY, {})
  );

  useEffect(() => {
    if (previousTerms.length > 0) {
      const lastTerm = previousTerms[0];
      if (gifsCache.current[lastTerm]) {
        setGifs(gifsCache.current[lastTerm]);
      }
    }
  }, [previousTerms]);

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
    gifsCache.current[term] = gifs;
    saveToStorage(CACHE_KEY, gifsCache.current);
  };

  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    const newPreviousTerms = [query, ...previousTerms].splice(0, 8);
    setPreviousTerms(newPreviousTerms);
    saveToStorage(HISTORY_KEY, newPreviousTerms);

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
    saveToStorage(CACHE_KEY, gifsCache.current);
  };

  return {
    // Properties
    gifs,

    // Methods
    handleSearch,
    handleTermClicked,
    previousTerms,
  };
};