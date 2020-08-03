import { createContext } from 'react';
import { modelStarred } from '../models/starred';

interface params {
  stars: Array<modelStarred> | undefined;
  setStars: (stars: Array<modelStarred>) => void;
}

export const StarredRepos = createContext<Partial<params>>({});


