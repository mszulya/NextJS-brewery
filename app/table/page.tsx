'use client'

import { useCallback } from 'react'
import {useRouter} from 'next/navigation'
import {usePagination} from '../hooks/usePagination'

export default function Table() {
    const pageSize = 15
    const urlBuilder = useCallback(
        (page: number) =>
            `https://api.openbrewerydb.org/v1/breweries?per_page=${pageSize}&page=${page}`,
        [pageSize]
    )

    const {
        data: breweries,
        loading,
        page,
        nextPage,
        prevPage,
    } = usePagination(urlBuilder)
    const router = useRouter()

    return (
        <div className="p-4">
            <div className="relative overflow-x-auto">
                {loading && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 animate-pulse z-50 rounded" />
                )}
                <table className="min-w-full divide-y divide-gray-700 text-sm text-left text-white">
                    <thead className="bg-gray-800">
                    <tr>
                        <th className="px-4 py-3">Brewery Name</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">City</th>
                        <th className="px-4 py-3">Country</th>
                        <th className="px-4 py-3">Website</th>
                        <th className="px-4 py-3">Phone</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 bg-gray-900">
                    {breweries.map((brewery) => (
                        <tr key={brewery.id} className="even:bg-gray-800">
                            <td className="px-4 py-3 hover:underline  cursor-pointer" onClick={() => router.push(`/brewery/${brewery.id}`)}>{brewery.name}</td>
                            <td className="px-4 py-3 capitalize">{brewery.brewery_type}</td>
                            <td className="px-4 py-3">{brewery.city}</td>
                            <td className="px-4 py-3">{brewery.country || '—'}</td>
                            <td className="px-4 py-3">
                                {brewery.website_url ? (
                                    <a
                                        href={brewery.website_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline hover:text-blue-300"
                                    >
                                        Visit website
                                    </a>
                                ) : (
                                    '—'
                                )}
                            </td>
                            <td className="px-4 py-3">{brewery.phone || '—'}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4 text-white">
                <button
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50"
                    onClick={prevPage}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span className="text-sm">Page {page}</span>
                <button
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={nextPage}
                    disabled={breweries.length < pageSize}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
