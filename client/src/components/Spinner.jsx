import '../styles/spinner.css'

const Spinner = () => {
  return (
    <div className="spinner flex gap-1">
      <div className="bounce1 bg-gray-400"></div>
      <div className="bounce2 bg-gray-400"></div>
      <div className="bounce3 bg-gray-400"></div>
    </div>
  )
}

export default Spinner
