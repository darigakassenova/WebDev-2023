export interface Album {
    userId : number,
    id : number,
    title : string
}

export interface Product {
    AlbumId : number,
    id : string,
    title : string,
    url : string,
    thumbnailUrl : string
}

export const products = []