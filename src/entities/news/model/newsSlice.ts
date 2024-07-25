import { PAGE_SIZE } from '@/shared/constants/constants';
import { IFilter } from '@/shared/interfaces';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { INews } from './types';

export interface State {
  news: INews[]
  filters: IFilter;
}

const initialState: State = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: ''
}
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    setFilters: (state, action: PayloadAction<{key: string, value: string | number | null}>) => {
        const { key, value } = action.payload;
        state.filters = { ...state.filters, [key]: value };
    }
  },
})

export const { actions: newsActions, reducer: newsReducer } = newsSlice