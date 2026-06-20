import { create } from 'zustand';

interface UIState {
  isLoading: boolean;
  activeCategory: string;
  setLoading: (loading: boolean) => void;
  setActiveCategory: (category: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoading: true,
  activeCategory: 'asados',
  setLoading: (loading) => set({ isLoading: loading }),
  setActiveCategory: (category) => set({ activeCategory: category }),
}));