import mockData from './fe_data.json';

export interface ItemType {
    name: string,
    pii: boolean,
    masked: boolean,
    type: string
}

export interface RequestType {
    urlParams: ItemType[],
    queryParams: ItemType[],
    headers: ItemType[],
    body: ItemType[]
}

export interface ResponseType {
    headers: ItemType[],
    body: ItemType[]
}

export interface DataType {
    api: string,
    method: string,
    path: string,
    request: RequestType,
    response: ResponseType
}

export interface SettingsType {
    api: string,
    method: string,
    path: string,
}

export const getData = (): DataType => {
    return mockData;
}

export const getSettings = (): SettingsType => {
    return {api: mockData.api, method: mockData.method, path: mockData.path}
}

export const getRequest = (): RequestType => {
    return mockData.request;
}

export const getResponse = (): ResponseType => {
    return mockData.response;
}