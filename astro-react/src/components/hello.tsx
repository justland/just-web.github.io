import { useContext, useState } from 'react'
import { AppContext } from './app_context'
import { useStore } from '@nanostores/react'
import { value } from '../value'

export function Hello() {
	return <div>Hello world</div>
}

export function HelloContext() {
	const app = useContext(AppContext)
	return <div>Hello world: {app.a}</div>
}

export function SetValue() {
	const x = useStore(value)
	return <button onClick={() => value.set({
		...x,
		a: x.a + 1
	})}>Set value</button>
}

export function ModValue() {
	const x = useStore(value)
	return <button onClick={() => x.plusOne()}>Mod value</button>
}

export function HelloValue() {
	const x = useStore(value)
	return <div>Hello value: {x.a}</div>
}

export function HelloGetA() {
	const x = useStore(value)
	return <div>Hello value: {x.getA() + 123}</div>
}
