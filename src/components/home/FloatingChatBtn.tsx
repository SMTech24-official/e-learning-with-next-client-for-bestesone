'use client'

import { useState } from 'react'
import { BsChat } from "react-icons/bs";
import { Card } from "@/components/ui/card"

interface FloatingChatButtonProps {
  message?: string
}

export function FloatingChatBtn({ message = "Welcome! We're excited to have you here. Explore our platform, discover engaging courses & tutors, and start your learning journey today!" }: FloatingChatButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-10 right-5 lg:bottom-20 lg:right-16 z-50 outline-0 border-0">
      <div className="relative">
        <button 
          className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex justify-center items-center bg-primary rounded-full shadow-lg transition-transform hover:scale-110 "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Chat with us"
        >
          <BsChat className='text-white w-8 h-8 lg:w-10 lg:h-10 '  />
        </button>
        {isHovered && (
          <Card className="absolute bottom-full right-0 mb-4 w-64 p-4 shadow-lg transition-opacity duration-300">
            <p className="text-sm">{message}</p>
            <div className="absolute -bottom-2 right-6 w-4  h-4 bg-white rotate-45 border-r border-b"></div>
          </Card>
        )}
      </div>
    </div>
  )
}

