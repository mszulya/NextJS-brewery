export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

    const res = await fetch(`https://api.openbrewerydb.org/v1/breweries/autocomplete?query=${query}`)
    const data = await res.json()

    return Response.json(data)
}
