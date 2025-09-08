import { configureStore } from '@reduxjs/toolkit'
import movieReduecer from './reduecers/movieSlice'
import tvReduecer from './reduecers/tvSlice'
import personReduecer from './reduecers/personSlice'

export const store = configureStore({
  reducer: {
    movie: movieReduecer,
    person: personReduecer,
    tv: tvReduecer,
  },
})
