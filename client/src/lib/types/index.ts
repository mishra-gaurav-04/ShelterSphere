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

export type ForgotPasswordProps = {
    isOpen : boolean,
    setIsOpen : (value:boolean) => void
}

export type AuthParamsType = "sign-in" | "sign-up";