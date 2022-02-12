import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'
import { getStoredIsHighContrastMode } from './localStorage'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6${
      isHardMode ? '*' : ''
    }\n\n` + generateEmojiGrid(guesses)
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              if (getStoredIsHighContrastMode()) {
                return '🟧'
              }
              return '🟩'
            case 'present':
              if (getStoredIsHighContrastMode()) {
                return '🟦'
              }
              return '🟨'
            default:
              if (getStoredIsHighContrastMode()) {
                return '⬛'
              }
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
