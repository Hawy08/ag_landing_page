import React from 'react'
import BlogsFeaturesCard from '../Semicomponents/blogsFeatureCard'

function BlogsFeatures() {
  return (
    <div className=" w-4/5 flex flex-col">
        <div>
            <p className="text-3xl">Blogs features</p>
            <p className="w-1/2 text-sm tracking-wide">These are the wonderful insights you get from our blogs if you read them</p>
        </div>
        <div className="p-1">
            <BlogsFeaturesCard/>
        </div>
    </div>
  )
}

export default BlogsFeatures