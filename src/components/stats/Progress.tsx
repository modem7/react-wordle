import classNames from 'classnames'

type Props = {
  index: number
  size: number
  label: string
  currentGuess: boolean
}

export const Progress = ({ index, size, label, currentGuess }: Props) => {
  const currentRowClass = classNames(
    'bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5',
    {
      'current-stat-row': currentGuess,
    }
  )
  return (
    <div className="flex justify-left m-1">
      <div className="items-center justify-center w-2">{index + 1}</div>
      <div className="w-full ml-2">
        <div style={{ width: `${8 + size}%` }} className={currentRowClass}>
          {label}
        </div>
      </div>
    </div>
  )
}
