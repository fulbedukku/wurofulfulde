import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BackButton } from '../components'


export const LessonSubcategoryList = () => {
  const { category } = useParams()
  const [lessons, setLessons] = useState([])
  const [subcategories, setSubcategories] = useState([])

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/fulfulde_lessons.json`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(item => item.lcategory === category)
        setLessons(filtered)
        const uniqueSubs = [...new Set(filtered.map(item => item.subcategory))]
        setSubcategories(uniqueSubs)
      })
  }, [category])

  return (
    // <main className="max-w-4xl mx-auto p-7">
    //   <div className="p-6">
    //     <BackButton />
    //     <h2 className="text-2xl font-bold mb-4 capitalize">{category} Subcategories</h2>
    //     <div className="flex flex-wrap">


    //       {subcategories.map(sub => (
    //         <div key={sub} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3 p-4">
    //           {/* <div key={sub} className="m-3 p-4 bg-green-100 rounded shadow w-64"> */}
    //           {/* <h3 className="text-xl font-semibold mb-2 capitalize">{sub}</h3> */}

    //           <div className="bg-teal-600 text-white p-4 font-bold text-xl capitalise mb-2">
    //             {sub}
    //           </div>
    //           {lessons.filter(l => l.subcategory === sub).map(lesson => (
    //             <Link
    //               key={lesson.lesson_title}
    //               to={`/lesson/${encodeURIComponent(lesson.lesson_title)}`}
    //               className="block text-blue-700 hover:underline"
    //             >
    //               {lesson.lesson_title}
    //             </Link>
    //           ))}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </main>

    <main className="max-w-7xl mx-auto p-7">
      <section className="bg-gray-100 py-10">
      <div className="p-6">
        <BackButton />
        <h2 className="text-2xl font-bold mb-4 capitalize">{category} Subcategories</h2>
        <div className="flex flex-wrap">
          {subcategories.map(sub => (

            <div key={sub} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-2">
              <div className="bg-teal-600 text-white p-4 font-bold text-xl capitalise mb-2">
                {sub}
              </div>
              <div className="p-5"> 
              {lessons.filter(l => l.subcategory === sub).map(lesson => (
                <Link
                  key={lesson.lesson_title}
                  to={`/lesson/${encodeURIComponent(lesson.lesson_title)}`}
                  className="block text-blue-700 hover:underline"
                >
                  <h6 className="mb-2 text-2xl tracking-tight text-blue-900 dark:text-white hover:underline">{lesson.lesson_title}</h6>
                </Link>
               
              ))}
               </div>  
              {/* <div className="p-5">
                <Link to={`/category/${encodedTitle}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cat}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                
              </div> */}
            </div>
          ))}
        </div>
      </div>
      </section>
    </main>

  )
}
