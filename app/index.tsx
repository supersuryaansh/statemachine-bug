import {useState, useEffect} from 'react'
import {Text} from 'react-native'
import {Worklet} from 'react-native-bare-kit'
import bundle from './app.bundle.js'




export default function App() {
    const [response, setReponse] = useState<string | null>(null)

    useEffect(() => {
        const worklet = new Worklet()

        worklet.start('/app.bundle', bundle)
        const {IPC} = worklet
        worklet.resume()
        worklet.resume()
        worklet.suspend()
        worklet.resume()
        worklet.suspend()
        worklet.resume()
        worklet.suspend()
    }, [])

    return <Text>{response}</Text>
}
