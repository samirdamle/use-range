import React, { useState } from 'react'
import './styles.css'
import useRange from 'use-range'

const myRanges = [
    {
        id: 'very_low',
        min: -100,
        title: 'Very Low',
        color: 'hsl(0, 80%, 50%)',
    },
    {
        id: 'low',
        min: 100,
        title: 'Low',
        color: 'hsl(30, 80%, 50%)',
    },
    {
        id: 'medium',
        min: 150,
        title: 'Medium',
        color: 'hsl(60, 80%, 50%)',
    },
    {
        id: 'high',
        min: 350,
        title: 'High',
        color: 'hsl(90, 70%, 50%)',
    },
    {
        id: 'very_high',
        min: 450,
        max: 500,
        title: 'Very High',
        color: 'hsl(120, 50%, 50%)',
    },
]

export default function App() {
    const [val, setVal] = useState(0)
    const { range, rangeIndex, setValue } = useRange(myRanges)
    return (
        <div className="App">
            <h1>useRange Hook</h1>
            <p>Finds a matching range from a sorted list of ranges for a given numeric value.</p>
            <table>
                <thead>
                    <tr>
                        <th>rangeIndex</th>
                        <th>id</th>
                        <th>title</th>
                        <th>min</th>
                        <th>max</th>
                        <th>color</th>
                    </tr>
                </thead>
                <tbody>
                    {myRanges.map((range, rangeIndex) => (
                        <tr key={range.id}>
                            <td>{rangeIndex}</td>
                            <td>{range.id}</td>
                            <td>{range.title}</td>
                            <td>{range.min}</td>
                            <td>{range.max}</td>
                            <td style={{ background: range.color }}>&nbsp;</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <br />
                <br />
                <label>Enter a value between -100 and 500 &nbsp; </label>
                <input
                    type="number"
                    value={val}
                    onChange={(evt) => {
                        setVal(evt.target.value)
                        setValue(evt.target.value)
                    }}
                />
            </div>
            <div>
                <br />
                Your value is in the range:
                {range ? (
                    <div>
                        <h2>
                            {rangeIndex} - {range.title}
                        </h2>
                        <div style={{ background: range.color }}>&nbsp;</div>
                    </div>
                ) : (
                    <div>
                        <h2>Out of range</h2>
                    </div>
                )}
            </div>
        </div>
    )
}
