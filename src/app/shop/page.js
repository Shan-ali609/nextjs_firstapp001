import Abouttests from '@/components/aboutthetests/Abouttests'
import Bloghead from '@/components/blog/Bloghead'
import Recentposts from '@/components/blog/Recentposts'
import Searchsection from '@/components/blog/Searchsection'
import Categories from '@/components/blog/Categories'
import React from 'react'
import '@/app/blog1/page.css'

export default function page() {
  return (
    <>
    <div>
      <Bloghead shoptittle="Shop" />
    
    </div>
  
    <div className='blog-sectionfull'>

      <div>
        <Abouttests shoptitle = 'Shop'
         showContent={false}
        />
      </div>
        

      <div>
    
    <Searchsection />
    <Recentposts />
    <Categories />
 
 
       </div>
      
  
       </div>
  
    </>
  )

}
