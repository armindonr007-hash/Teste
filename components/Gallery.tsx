'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type Photo = {
  id: string
  image_url: string
}

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    async function fetchPhotos() {
      const { data } = await supabase
        .from('photos')
        .select('id, image_url')
        .order('id', { ascending: false })

      if (data) setPhotos(data)
    }

    fetchPhotos()
  }, [])

  if (!photos.length) return <p className="p-4 text-center">Nenhuma foto ainda.</p>

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {photos.map(photo => (
        <img
          key={photo.id}
          src={photo.image_url}
          alt="Foto do casamento"
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl"
        />
      ))}
    </div>
  )
}