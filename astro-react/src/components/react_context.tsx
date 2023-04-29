import { PropsWithChildren, createContext, useContext } from 'react'

export const AppContext = createContext<{ a: number }>({ a: 0 })

export function ReactContextProvider({ children }: PropsWithChildren<Record<string, unknown>>) {
	return <>
		<AppContext.Provider value={{ a: 123 }}>{children}</AppContext.Provider>
	</>
}

export function ReactContextIncrement() {
	const app = useContext(AppContext)
	return <button onClick={() => {
		console.log('ReactContextIncrement', app)
		app.a += 1
	}}>ReactContext ++</button>
}

export function ReactContextDisplay() {
	const app = useContext(AppContext)
	return <div>app.a: {app.a}</div>
}
