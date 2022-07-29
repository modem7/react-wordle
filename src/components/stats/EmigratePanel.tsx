import { loadStats } from '../../lib/stats'
import { loadGameStateFromLocalStorage } from '../../lib/localStorage'
import { MigrationStats } from '../modals/MigrateStatsModal'
import { encrypt } from '../../lib/encryption'
import { copyTextToClipboard } from '../../lib/clipboard'
import { DuplicateIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export const EmigratePanel = () => {
  const [isCopyButtonEnabled, setIsCopyButtonEnabled] = useState(true)
  const [copyButtonText, setCopyButtonText] = useState('Copy')
  const stats = loadStats()
  const gameState = loadGameStateFromLocalStorage()

  const migrationStats: MigrationStats = {
    statistics: stats,
    gameState: gameState,
  }

  const emigrationCode = encrypt(JSON.stringify(migrationStats))

  const copyEmigrationCodeToClipboard = () => {
    copyTextToClipboard(emigrationCode)
    setCopyButtonText('Copied!')
    setIsCopyButtonEnabled(false)
  }

  return (
    <div className="text-sm text-gray-500 dark:text-gray-300">
      <label
        htmlFor="message"
        className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Copy your migration code:
      </label>
      <textarea
        id="emigration-code"
        readOnly={true}
        rows={8}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={emigrationCode}
      />
      <button
        disabled={!isCopyButtonEnabled}
        onClick={copyEmigrationCodeToClipboard}
        type="button"
        className="inline-flex justify-center items-center text-left mt-2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm
          disabled:text-gray-900 disabled:focus:outline-none disabled:bg-white disabled:border-gray-200 disabled:dark:bg-gray-800 disabled:dark:text-gray-400 disabled:dark:border-gray-600"
      >
        {isCopyButtonEnabled && (
          <DuplicateIcon className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white" />
        )}
        {copyButtonText}
      </button>
    </div>
  )
}
