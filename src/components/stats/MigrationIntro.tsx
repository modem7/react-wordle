import {
  MIGRATE_BUTTON_TEXT,
  MIGRATE_DESCRIPTION_TEXT,
} from '../../constants/strings'
import { LogoutIcon } from '@heroicons/react/outline'

type Props = {
  handleMigrateStatsButton: () => void
}

export const MigrationIntro = ({ handleMigrateStatsButton }: Props) => {
  return (
    <div className="mt-5 sm:mt-6 columns-2 dark:text-white items-center text-center justify-center items-stretch">
      <div className="mt-3 text-xs">{MIGRATE_DESCRIPTION_TEXT}</div>
      <button
        type="button"
        className="inline-flex justify-center items-center text-center mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
        onClick={handleMigrateStatsButton}
      >
        <LogoutIcon className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white" />
        {MIGRATE_BUTTON_TEXT}
      </button>
    </div>
  )
}
