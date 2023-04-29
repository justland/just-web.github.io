import { createStoreContext, useStoreContext } from '@just-web/react'
import { createStore } from '@just-web/states'
import type { PropsWithChildren } from 'react'

export const JustStoreContext = createStoreContext<{ count: number }>()

export function JustStoreProvider({ children }: PropsWithChildren<Record<string, unknown>>) {
	const store = createStore({ count: 0 })
	return <JustStoreContext.Provider value={store}>{children}</JustStoreContext.Provider>
}

export function JustStoreIncrement() {
	const [, setCount] = useStoreContext(JustStoreContext, s => s.count, (s, v) => {
		s.count = v
	})
	return <button onClick={() => setCount(v => v + 1)}>JustStore ++</button>
	// return <button onClick={() => alert(123)}>JustStore ++</button>
}

export function JustStoreDisplay() {
	const [count] = useStoreContext(JustStoreContext, s => s.count)
	return <div>justStore.count: {count}</div>
}
