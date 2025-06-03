'use client'
import Image from "next/image"
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'

export default function Home() {
    const [search, setSearch] = useState('')
    const [answer, setAnswer] = useState([])
    const router = useRouter()

    useEffect(() => {
        if (search.trim().length < 2) {
            setAnswer([])
            return
        }
        const timer = setTimeout(async () => {
            try {
                const res = await fetch(`/api/autocomplete?query=${search}`)
                const data = await res.json()
                setAnswer(data)
            } catch (err) {
                console.error('Failed to fetch suggestions:', err)
            }
        }, 400)
        return () => clearTimeout(timer)
    }, [search])

    const handleClear = () => {
        setSearch('')
        setAnswer([])
    }

    return (
        <>
            <div className="flex flex-col gap-8 items-center sm:items-start w-full max-w-xl mx-auto">
                <div className="relative w-full h-[40vh]">
                    <Image
                        src="/breweries.png"
                        alt="breweries"
                        fill
                        className="object-cover"
                        aria-hidden
                    />
                </div>
                <div className="relative w-full">
                    <label htmlFor="brewery-search" className="block mb-2 text-sm text-gray-400">Type at least 3 characters...</label>
                    <input
                        type="text"
                        value={search}
                        placeholder="Search breweries..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-3 pr-10 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                    {answer.length > 0 && (
                        <ol className="absolute top-full mt-2 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                            {answer.map(brewery => (
                                <li key={brewery.id}
                                    className="px-4 py-2 text-gray-100 hover:bg-gray-700 hover:text-white cursor-pointer transition"
                                    onClick={() => router.push(`/brewery/${brewery.id}`)}>
                                    {brewery.name}
                                </li>
                            ))}
                        </ol>
                    )}
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute right-3 top-[55%] -translate-y-1/5 text-gray-400 hover:text-white text-xl"
                        aria-label="Clear search"
                    >
                        ✕
                    </button>
                </div>

            </div>
        </>
    )
}

