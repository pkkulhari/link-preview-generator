import { useRef } from 'react'
import domtoimage from 'dom-to-image'

const PreviewCard = ({ metadata }) => {
  const cardRef = useRef()

  const handleDownloadImage = async () => {
    const dataUrl = await domtoimage.toPng(cardRef.current)
    const link = document.createElement('a')
    link.download = 'link-preview.png'
    link.href = dataUrl
    link.click()
  }

  return (
    <div className="max-w-lg relative">
      <a href={metadata.url} target="_blank">
        <div
          ref={cardRef}
          className="border border-gray-200 dark:border-slate-700 shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={metadata?.image && `data:image/png;base64,${metadata.image}`}
            alt=""
            className="w-full"
          />
          <div className="bg-gray-100 p-3 flex flex-col gap-1 dark:bg-slate-800">
            <div className="uppercase">{metadata?.domain}</div>
            <div className="font-semibold text-xl">{metadata?.title}</div>
            <div>{metadata?.description}</div>
          </div>
        </div>
      </a>
      <button
        className="absolute -bottom-14 md:top-0 right-0 md:-right-14 p-2 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 h-fit dark:bg-slate-700 dark:hover:bg-slate-600"
        onClick={handleDownloadImage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-download w-6"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </button>
    </div>
  )
}

export default PreviewCard
