export interface ISearchRecomment {
    value:number
    label:string
}

export interface ISearchResultList {
    list:ISearchResult[]
}

export interface ISearchResult {
    type: number;
    label: string;
    resultCount: number;
}
export interface IHomeData {
    data: IHomeInfo
}
export interface IHomeInfo {
    banner: IBanner
    serachReComments: ISearchRecomment[]
    transformer: ITransformer[]
    scrollBarInfoList: IScrollBarInfo[]
    countdown: ICountdown
    activities: string[]
}

export interface IBanner {
    imgUrl: string
}

export interface ITransformer {
    imgUrl: string
    label: string
}

export interface IScrollBarInfo {
    type: string
    badge: string
    detail: string
    btn: string
}
export interface ICountdown {
    time: number
    goods: IGood
}
