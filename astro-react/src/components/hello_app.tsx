import { AppContext } from './app_context'
import { HelloContext } from './hello'

export function HelloApp() {
	return <AppContext.Provider value={{ a: 123 }}>
		<HelloContext />
	</AppContext.Provider>
}
