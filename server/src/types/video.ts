import { Document } from 'mongoose';

export interface IVideo extends Document{
    _id: string;
    name: string;
    description: string;
    url: string;
}