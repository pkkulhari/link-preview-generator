import Spinner from './components/Spinner'
import PreviewCard from './components/PreviewCard'
import { useState, Fragment } from 'react'
import ThemeToggler from './components/ThemeToggler'

function App() {
  const [metadata, setMetadata] = useState(null)
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDarkMode, setDarkMode] = useState(true)

  const handleForm = async (e) => {
    e.preventDefault()
    if (!url) return

    setMetadata(null)
    setIsLoading(true)

    const res = await fetch(`/api?url=${url}`)
    const data = await res.json()

    setMetadata(data)
    setIsLoading(false)
  }

  return (
    <div className={`${isDarkMode && 'dark'}`}>
      <div className="flex justify-center pt-16 pb-24 md:py-32 px-4 md:px-0 relative min-h-screen dark:bg-gray-800 dark:text-slate-200">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-3 text-center">Link Preview Generator</h1>
          <p className="text-gray-800 text-center text-lg md:text-xl  mb-12 md:px-14 dark:text-slate-200">
            Link previews like in Twitter/LinkedIn/Facebbok, but as downloadable images for use in
            any note taking tool (Notion. MacDown, Word, etc.)
          </p>

          <form
            className="flex flex-col md:flex-row gap-4 w-full mb-14"
            onSubmit={(e) => handleForm(e)}
          >
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4 outline-none shadow dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="E.g.: https://www.youtube.com/watch?v=JezatpCP9C0"
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-6 py-2.5 text-center shadow dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Generate
            </button>
          </form>

          {isLoading && <Spinner />}

          {metadata && (
            <Fragment>
              {metadata?.error ? (
                <div className="text-red-600">💥 Oops! there was an error with your URL</div>
              ) : (
                <PreviewCard metadata={metadata} />
              )}
            </Fragment>
          )}
        </div>

        <ThemeToggler isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  )
}

export default App
