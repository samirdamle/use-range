import { useEffect, useState } from 'react'

type Range = {
    min: number
    max?: number
}

/**
 * @summary useRange is a React hook for getting a matching range from a list of ranges
 * for a given numeric value such that range.min >= value < range.max
 *
 * @param {range[]} ranges - An array of range objects.
 * Each range object has to have a min property that sets the lower threshold
 * for that range. So a value is considered to be in that range if it is
 * greater than or equal to its min. The range can optionally have a max
 * (maximum threshold) which is excluded from the range i.e.
 * range.min >= value < range.max
 * The array needs to be sorted ascending by range.min.
 * Each range can optionally have any number of additional arbitrary properties.
 *
 * @returns {{range, rangeIndex, setValue}} - Object with the following properties -
 * range - The matching range object for the value (value is set with setValue).
 * rangeIndex - The index of the matching range for the value.
 * setValue - Method exposed by the hook to set the value (number) to find its matching
 * range such that range.min >= value < range.max
 *
 */
const useRange = (ranges: Range[]): { range: Range | null; rangeIndex: number; setValue: Function } => {
    const [range, setRange] = useState<Range | null>(null)
    const [rangeIndex, setRangeIndex] = useState<number>(-1)
    const [value, setValue] = useState<number | null>(null)

    useEffect(() => {
        if (ranges && Array.isArray(ranges)) {
            let matchingRangeIndex: number = ranges.findIndex(
                (rg: Range | null, rgIndex: number) => rg != null && value != null && value >= rg.min && (ranges[rgIndex + 1] ? value < ranges[rgIndex + 1].min : true),
            )

            let matchingRange: Range | null = matchingRangeIndex > -1 ? { ...ranges.slice()[matchingRangeIndex] } : null

            if (value == null || (matchingRange && matchingRange.max != null && value >= matchingRange.max)) {
                matchingRange = null
            }

            setRange(matchingRange)
            setRangeIndex(matchingRange != null ? matchingRangeIndex : -1)
        }
    }, [ranges, value])

    return { range, rangeIndex, setValue }
}

export default useRange
