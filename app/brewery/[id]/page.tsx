import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function Brewery({params}: {params: Promise<{ id: string }>}) {
    const { id } = await params
    const res = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)

    if (!res.ok) return notFound()

    const brewery = await res.json()

    return <>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 w-250">
            <div className="p-4">
                <h5 className="text-lg font-semibold  text-white mb-2">{brewery.name}</h5>
                <p className="text-gray-300 mb-2 link-underline">
                    <Link href={`${brewery.website_url}`} target="_blank" rel="noopener noreferrer">{brewery.website_url}</Link>
                </p>
                <p className="text-gray-300 mb-2">
                    {brewery.street}
                </p>
                <p className="text-sm text-gray-500">{brewery.city}, {brewery.state_province}, {brewery.postal_code}, {brewery.country}</p>
            </div>

            {brewery.latitude && brewery.longitude ? (
                <>
                    <a
                        href={`https://www.google.com/maps?q=${brewery.latitude},${brewery.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline"
                    >
                        View on Google Maps
                    </a>
                    <iframe
                        width="100%"
                        height="500px"
                        loading="lazy"
                        allowFullScreen
                        className="w-full border-t border-gray-700"
                        src={`https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&center=${brewery.latitude},${brewery.longitude}&zoom=15`}
                    ></iframe>
                </>
            ) : (
                <div className="p-4 text-gray-400 text-sm">No map available for this location.</div>
            )}
        </div>
    </>
}
