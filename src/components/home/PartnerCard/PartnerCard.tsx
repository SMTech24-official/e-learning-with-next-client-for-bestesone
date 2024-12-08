import Image from 'next/image'
import { Star, Heart } from 'lucide-react'
import { PartnerCardProps } from '@/interface/interface'

export default function PartnerCard({ imageUrl, name, title, rating, ratingCount }: PartnerCardProps) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md max-w-2xl">
      <div className="relative w-24 h-24 mr-4 overflow-hidden flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`${name}'s profile picture`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
          <button 
            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            aria-label="Add to favorites"
          >
            <Heart className="w-6 h-6 text-primary" />
          </button>
        </div>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
          <span className="text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
          <span className="text-sm text-gray-500 ml-1">({ratingCount})</span>
        </div>
      </div>
    </div>
  )
}

