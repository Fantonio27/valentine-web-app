export enum AppScreen {
    INTRO = 'INTRO',
    PREAMBLE = 'PREAMBLE',
    JOURNEY = 'JOURNEY',
    QUESTION = 'QUESTION',
    SUCCESS = 'SUCCESS'
}

export interface ImageAsset {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}