import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BackButton } from '../components' 



export const LessonDetailPage = () => {
    const { title } = useParams()
  const [lesson, setLesson] = useState(null)

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/fulfulde_lessons.json`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.lesson_title === decodeURIComponent(title))
        setLesson(found)
      })
  }, [title])

  if (!lesson) return <div className="p-6">Loading lesson...</div>


  return (
    <main className="max-w-4xl mx-auto p-7">
     <section className="bg-gray-100 py-10">
     <div className="p-6">
      <BackButton />
      <h2 className="text-3xl font-bold mb-2">{lesson.lesson_title}</h2>
      <p className="mb-2 text-gray-700"><strong>Category:</strong> {lesson.lcategory}</p>
      <p className="mb-2 text-gray-700"><strong>Subcategory:</strong> {lesson.subcategory}</p>
      <p className="mb-4">{lesson.lesson_content}</p>
      <p className="mb-2"><strong>Created by:</strong> {lesson.created_by}</p>
      <p className="mb-4"><strong>Date:</strong> {lesson.created_date}</p>
      <div className="space-x-4">
        <a href={lesson.youtube_link} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">YouTube</a>
        <a href={lesson.tiktok_link} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">TikTok</a>
      </div>
    </div>
    </section>
</main>
  )
}
