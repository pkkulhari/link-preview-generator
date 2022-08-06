import icons from '../constants/icons'

const ListItem = ({ tag, children }) => {
  return (
    <li className="flex items-center gap-2 text-gray-800 dark:text-slate-300">
      <img src={tag ? icons.checkMark : icons.crossMark} alt="" className="w-5" />
      <div>
        <span className="font-mono text-pink-600 text-sm">{children}</span> meta tag {!tag && 'not'}{' '}
        found
      </div>
    </li>
  )
}

export default ListItem
