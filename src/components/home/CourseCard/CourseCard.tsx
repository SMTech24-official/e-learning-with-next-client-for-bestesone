import Image from "next/image"
import { Star, Calendar, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { CourseCardProps } from "@/interface/interface"


export default function CourseCard({
  coverImage,
  title,
  description,
  authorImage,
  authorName,
  rating,
  date,
  seats,
  price
}: CourseCardProps) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <Image 
        src={coverImage} 
        alt={title} 
        width={384} 
        height={200} 
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base line-clamp-2">{description}</p>
      </div>
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src={authorImage} 
            alt={authorName} 
            width={40} 
            height={40} 
            className="rounded-full border-2 border-gray-500 mr-4"
          />
          <p className="text-gray-900 font-semibold">{authorName}</p>
        </div>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
          <span className="text-gray-600">{rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-2" />
          <span>Seat - {seats}</span>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
        <Button variant="outline" className="hover:bg-primary hover:text-white">View Details</Button>
      </div>
    </div>
  )
}

