import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { savedBookmarks: [] };

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: initialState,
  reducers: {
    replaceBookmark(state, action) {
      state.savedBookmarks = action.payload;
    },
    addBookmark(state, action) {
      // object will come and store into createSlice
      state.savedBookmarks.push(action.payload);
    },
    removeBookmark(state, action) {
      const id = action.payload;
      console.log('payload recived => ', id);
      state.savedBookmarks = state.savedBookmarks.filter(
        (item) => item.id !== id
      );
    },
  },
});

const store = configureStore({ reducer: { bookmark: bookmarkSlice.reducer } });

export const bookmarkActions = bookmarkSlice.actions;

export default store;
