
export type Status =  'waiting' | 'active' | 'failed' | 'completed' | 'removed' | 'paused' ;
export type MediaType =  'audio' | 'video' | 'image' ;

export interface ITranscodeDetail {
 type: MediaType;
 outputFormat: string;
}

export const MEDIA_EXTENSIONS = <const>[ 'MOV', 'JPEG', 'MP4',
  'WEBP', 'MP3', 'HEIC', 'WEBM', 'OGG' ];

