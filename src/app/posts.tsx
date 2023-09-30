"use client"
import {useState} from "react"

export default async function Posts() {
  return (
    <div className="px-20 py-8">
      <button className="bg-teal-500 font-bold px-5 mr-3 py-3 rounded-lg">Get All Posts</button>
      <button className="bg-teal-500 font-bold px-5 mr-3 py-3 rounded-lg">
        Get All Users
      </button>
      <button className="bg-teal-500 font-bold px-5 py-3 rounded-lg">Create New Post</button>
    </div>
  )
}
