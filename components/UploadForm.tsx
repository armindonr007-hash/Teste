'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) setFile(selectedFile)
  }

  async function handleUpload() {
    if (!file) {
      alert('Selecione uma imagem primeiro')
      return
    }

    try {
      setUploading(true)

      const fileName = `${Date.now()}-${file.name}`

      const { error: uploadError } = await supabase.storage
        .from('wedding-photos')
        .upload(fileName, file)

      if (uploadError) throw uploadError

      const { data } = supabase.storage
        .from('wedding-photos')
        .getPublicUrl(fileName)

      const imageUrl = data.publicUrl

      const { error: dbError } = await supabase
        .from('photos')
        .insert({ image_url: imageUrl })

      if (dbError) throw dbError

      alert('Foto enviada com sucesso!')
      setFile(null)

    } catch (error: any) {
      console.error('Erro completo:', error)
      alert(error.message || 'Erro ao enviar imagem')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full max-w-xs relative z-10">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2 rounded w-full"
      />

      <button
        type="button"
        onClick={handleUpload}
        disabled={uploading}
        className="bg-black text-white px-6 py-2 rounded-xl disabled:opacity-50 w-full"
      >
        {uploading ? 'Enviando...' : 'Enviar Foto'}
      </button>
    </div>
  )
}