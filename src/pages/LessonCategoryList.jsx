import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LessonCard } from '../components';

export const LessonCategoryList = () => {

    const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/fulfulde_lessons.json')
      .then(res => res.json())
      .then(data => {
        const unique = [...new Set(data.map(item => item.lcategory))]
        setCategories(unique)
      })
  }, [])


  return(
    <main className="max-w-7xl mx-auto p-7">
      <section className="bg-gray-100 py-10">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Fulfulde Lesson Categories</h2>
      <div className="flex flex-wrap">
        {categories.map(cat => (
          // <Link key={cat} to={`/category/${cat}`} className="m-3 p-4 bg-blue-100 rounded shadow w-64 hover:bg-blue-200">
          //   <h3 className="text-xl font-semibold capitalize">{cat}</h3>
          // </Link>
          <LessonCard key={cat} cat={cat} />
        ))}
      </div>
    </div>
    </section>
    </main>
  )

}
