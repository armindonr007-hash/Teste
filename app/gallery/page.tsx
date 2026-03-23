import Gallery from '@/components/Gallery'
import Link from 'next/link'

export default function GalleryPage() {
  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🖼️ Galeria</h1>
        <Link href="/" className="text-blue-500 underline">
          Voltar
        </Link>
      </div>
      <Gallery />
    </main>
  )
}