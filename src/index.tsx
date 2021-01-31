import React, { useEffect } from 'react'

export const useRange = () => {
    let [{ counter }, setState] = React.useState<{
        counter: number
    }>({
        counter: 0,
    })

    useEffect(() => {
        let interval = window.setInterval(() => {
            counter++
            setState({ counter })
        }, 1000)
        return () => {
            window.clearInterval(interval)
        }
    }, [])

    return counter
}
