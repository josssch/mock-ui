import type { ClassValue } from 'clsx/lite'

import clsx from 'clsx/lite'
import { twMerge } from 'tailwind-merge'

export default function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs))
}
