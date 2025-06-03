import { useEffect, useState } from 'react'

export function usePagination<T>(urlBuilder: (page: number) => string, pageSize = 15) {
    const [data, setData] = useState<T[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function load() {
            setLoading(true)
            try {
                const res = await fetch(urlBuilder(page))
                const json = await res.json()
                setData(json)
                setError(null)
            } catch (err) {
                setError('Failed to load data')
                setData([])
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [page, urlBuilder])

    return {
        data,
        loading,
        error,
        page,
        nextPage: () => setPage((p) => p + 1),
        prevPage: () => setPage((p) => Math.max(p - 1, 1)),
    }
}
