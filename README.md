# use-ranges

> React hook to return a matching range (from a list of ranges) for a given value.

[![NPM](https://img.shields.io/npm/v/use-ranges.svg)](https://www.npmjs.com/package/use-ranges) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-ranges
```

## Usage

```tsx
import React, { useState } from 'react'

import { useRange } from 'use-range'

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
