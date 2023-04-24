import { atom } from 'nanostores'
import { PropsWithChildren, createContext } from 'react'

export const value = atom({ a: 123 })

export const AppContext = createContext<{ a: number }>({ a: 0 })

export function AppContextProvider({ children }: PropsWithChildren<Record<string, unknown>>) {
	return <>
		<AppContext.Provider value={{ a: 123 }}>123{children}</AppContext.Provider>
	</>
}
