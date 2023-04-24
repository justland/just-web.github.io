import { atom } from 'nanostores'

const app = (() => {
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
})()
export const value = atom(app)
