import React from 'react'
import{ Routes, Route } from 'react-router-dom'
import { MovieList, Search, PageNotFound, LessonCategoryList, LessonSubcategoryList, LessonDetailPage, AboutPage, SongDetail, SongList, HomePage, HowAndWhy } from '../pages'  

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage />} />

           <Route path='/learn' element={<LessonCategoryList />} />
            <Route path='/songs' element={<SongList />} />
            <Route path='/song/:title' element={<SongDetail />} />
          
        <Route path="/category/:category" element={<LessonSubcategoryList />} />
        <Route path="/lesson/:title" element={<LessonDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/how-and-why" element={<HowAndWhy />} />


        <Route path='/search' element={<Search />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
    </>
  )
}
