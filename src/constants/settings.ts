import { solution } from '../lib/words'

export const MAX_WORD_LENGTH = solution.length
export const MAX_CHALLENGES = MAX_WORD_LENGTH + 3
export const ALERT_TIME_MS = 2000
export const REVEAL_TIME_MS = 350
export const GAME_LOST_INFO_DELAY = (MAX_WORD_LENGTH + 1) * REVEAL_TIME_MS
