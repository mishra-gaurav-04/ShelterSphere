export type AnalyticsProps = {
    text : string,
    value : number
}

export type QueryType = 'Buy' | 'Rent'

export interface SearchQuery {
    city : string,
    searchType : 'Buy' | 'Rent',
    minPrice : number,
    maxPrice : number
}