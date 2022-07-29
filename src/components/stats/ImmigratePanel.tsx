import { SaveIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { decrypt } from '../../lib/encryption'
import {
  saveGameStateToLocalStorage,
  saveStatsToLocalStorage,
} from '../../lib/localStorage'
import { MigrationStats } from '../modals/MigrateStatsModal'

export const ImmigratePanel = () => {
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false)

  const handleImmigrationCodeChange = (event: any) => {
    if (event.target instanceof Element) {
      const textarea = event.target

      textarea.classList.remove('bg-red-400')
      textarea.classList.remove('dark:bg-red-900')
      textarea.classList.remove('bg-gray-100')
      textarea.classList.remove('dark:bg-gray-700')
      setIsSaveButtonEnabled(false)

      const text = textarea.value

      try {
        const migrationStats = JSON.parse(decrypt(text) ?? '') as MigrationStats
        if (
          !migrationStats ||
          (!migrationStats.gameState && !migrationStats.statistics)
        ) {
          textarea.classList.add('bg-red-400')
          textarea.classList.add('dark:bg-red-900')
          return
        }

        textarea.classList.add('bg-gray-100')
        textarea.classList.add('dark:bg-gray-700')
        setIsSaveButtonEnabled(true)
      } catch (error) {
        textarea.classList.add('bg-red-400')
        textarea.classList.add('dark:bg-red-600')
      }
    }
  }

  const handleSaveButton = () => {
    const textarea = document.getElementById(
      'immigration-code'
    ) as HTMLInputElement
    if (
      textarea &&
      window.confirm(
        'Are you sure you want to override the statistics on this device? This action is not reversable.'
      )
    ) {
      var migrationStats = JSON.parse(
        decrypt(textarea.value) ?? ''
      ) as MigrationStats
      if (!migrationStats) return

      if (migrationStats.gameState) {
        saveGameStateToLocalStorage(migrationStats.gameState)
      }

      if (migrationStats.statistics) {
        saveStatsToLocalStorage(migrationStats.statistics)
      }

      alert('The site will now reload.')

      window.location.reload()
    }
  }

  return (
    <div className="text-sm text-gray-500 dark:text-gray-300">
      <label
        htmlFor="message"
        className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Paste your migration code:
      </label>
      <textarea
        onChange={(e) => handleImmigrationCodeChange(e)}
        id="immigration-code"
        rows={8}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></textarea>
      <button
        disabled={!isSaveButtonEnabled}
        onClick={handleSaveButton}
        type="button"
        className="inline-flex justify-center items-center text-left mt-2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm 
          disabled:text-gray-900 disabled:focus:outline-none disabled:bg-white disabled:border-gray-200 disabled:dark:bg-gray-800 disabled:dark:text-gray-400 disabled:dark:border-gray-600"
      >
        {isSaveButtonEnabled && (
          <SaveIcon className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white" />
        )}
        Save
      </button>
    </div>
  )
}
