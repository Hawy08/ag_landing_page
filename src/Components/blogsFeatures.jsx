import React from 'react'
import { Element } from "react-scroll";
import BlogsFeaturesCard from '../Semicomponents/blogsFeatureCard'

function BlogsFeatures() {
  return (
    <Element name="section3" className='flex justify-center w-full'>
      
    <div className="flex flex-col w-4/5 ">
        <div>
            <p className="text-3xl font-bold">Blogs features</p>
            <p className="text-sm tracking-wide md:w-1/2">These are the wonderful insights you get from our blogs if you read them</p>
        </div>
        <div className="p-1">
            <BlogsFeaturesCard/>
        </div>
    </div>
    </Element>
  )
}

export default BlogsFeatures