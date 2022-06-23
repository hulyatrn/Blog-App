import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogList({bloglar,baslik}) {


  return (
    <div className="blog-list">
        <h2>{baslik}</h2>
    {bloglar.map((blog)=>(

        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.ad}</h2>
            <p>Yazının yazarı: {blog.yazar}</p>
          </Link>
        </div>
    ))}
</div>
  )
}
