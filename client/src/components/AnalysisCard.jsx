const AnalysisCard = ({ title, icon, children }) => {
  return (
    <div className="p-5 md:p-8 border rounded-lg shadow-lg bg-gray-50 w-full dark:bg-slate-800 dark:border-slate-700">
      <h2 className="text-xl font-bold flex items-cente gap-6 md:gap-8">
        <div className="bg-white p-2 rounded-full dark:bg-slate-700">
          <img src={icon} alt="" className="w-6 md:w-8" />
        </div>
        <span>{title}</span>
      </h2>
      <ul className="ml-16 md:ml-20 flex flex-col gap-2 ">{children}</ul>
    </div>
  )
}

export default AnalysisCard
