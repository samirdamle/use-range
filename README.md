# use-range

React hook to return a matching range (from a list of ranges) for a given value.

[![NPM](https://img.shields.io/npm/v/use-range.svg)](https://www.npmjs.com/package/use-range) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-range
```

## Usage

```tsx
import React, { useState } from 'react'

import useRange from 'use-range'

const myRanges = [
    {
        id: 'very_low',
        min: -100,
        title: 'Very Low',
    },
    {
        id: 'low',
        min: 100,
        title: 'Low',
    },
    {
        id: 'medium',
        min: 150,
        title: 'Medium',
    },
    {
        id: 'high',
        min: 350,
        title: 'High',
    },
    {
        id: 'very_high',
        min: 450,
        max: 500,
        title: 'Very High',
    },
]

const Example = () => {
    const [valueInput, setValueInput] = useState(0)
    const { range, rangeIndex, setValue } = useRange(myRanges)
    return (
        <div>
            <div>
                Value: <input value={valueInput} onChange={(evt) => setValueInput(evt.target.value)} />
            </div>
            {range ? <div>Current range is: {range.title}</div> : <div>Out of range</div>}
        </div>
    )
}
```

## License

MIT © [samirdamle](https://github.com/samirdamle)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
