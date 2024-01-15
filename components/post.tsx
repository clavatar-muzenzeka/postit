import React, { ReactNode } from 'react'
import FillButton from './fillButton'
import { IPost } from '@/types/post'

const Post: (props: {post: IPost})=>React.JSX.Element =  (props: {post: IPost}) => {
  return (
    <div className='p-6 mb-4 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg'>
        <h2 className='text-2xl font-light capitalize text-gray-600'>{props.post.title}</h2>
        <p className='mb-2'><span className='text-gray-600 text-xs'>By <strong>User Firstname</strong></span></p>
        <p className='mb-4 text-lg'>{props.post.body}</p>
        <FillButton label="Comment"></FillButton>
    </div>
  )
}

export default Post