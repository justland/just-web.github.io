import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'

export const nanoValue = atom({ a: 123 })

export const nanoObject = atom((() => {
	let a = 1
	return {
		plusOne() {
			console.log('plusOne', a)
			a += 1
		},
		a,
		getA() {
			return a
		}
	}
})())

export function NanoValueIncrement() {
	const x = useStore(nanoValue)
	return <button onClick={() => nanoValue.set({
		...x,
		a: x.a + 1
	})}>NanoValue ++</button>
}

export function NanoValueDisplay() {
	const x = useStore(nanoValue)
	return <div>Nano value: {x.a}</div>
}

export function NanoObjectPlusOne() {
	const x = useStore(nanoObject)
	return <button onClick={() => {
		x.plusOne()
		nanoObject.set({ ...x })
	}} > NanoObject.plusOne()</button >
}

export function NanoObjectGet() {
	const x = useStore(nanoObject)
	return <div>
		<div>NanoObject.getA(): {x.getA()}</div>
	</div>

}
