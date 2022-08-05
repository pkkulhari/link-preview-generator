import { useRef } from 'react'
import domtoimage from 'dom-to-image'

const PreviewCard = ({ ogData }) => {
  const cardRef = useRef()

  const handleDownloadImage = async () => {
    const dataUrl = await domtoimage.toPng(cardRef.current)
    const link = document.createElement('a')
    link.download = 'link-preview.png'
    link.href = dataUrl
    link.click()
  }

  return (
    <div className="max-w-lg border rounded-lg border-gray-200 shadow-lg relative dark:border-slate-700">
      <div ref={cardRef}>
        <img
          src={ogData?.image && `data:image/png;base64,${ogData.image}`}
          alt=""
          className="w-full rounded-t-lg"
        />
        <div className="bg-gray-100 p-3 flex flex-col gap-1 dark:bg-slate-800">
          <div className="uppercase">{ogData?.domain}</div>
          <div className="font-semibold text-xl">{ogData?.title}</div>
          <div>{ogData?.description}</div>
        </div>
      </div>
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
