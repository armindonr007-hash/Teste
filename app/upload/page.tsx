import UploadForm from '@/components/UploadForm'
import Link from 'next/link'

export default function UploadPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-4 bg-gray-50">
      <h1 className="text-3xl font-bold">📤 Enviar Foto</h1>
      <UploadForm />
      <Link href="/" className="text-blue-500 underline mt-4">
        Voltar
      </Link>
    </main>
  )
}