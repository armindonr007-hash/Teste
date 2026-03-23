import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-center">
        📸 Casamento Elias & Manuela
      </h1>
      <p className="text-gray-600 text-center max-w-md">
        Ajude-nos a capturar momentos incríveis! Envie suas fotos ou veja as já partilhadas.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/upload"
          className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 text-center"
        >
          Enviar Fotos
        </Link>
        <Link
          href="/gallery"
          className="border px-6 py-3 rounded-xl hover:bg-gray-100 text-center"
        >
          Ver Galeria
        </Link>
      </div>
    </main>
  )
}