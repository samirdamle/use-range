import React from 'react'

import { useRange } from 'use-ranges'

const App = () => {
    const example = useRange()
    return <div>{example}</div>
}
export default App
