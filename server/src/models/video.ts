import {Schema, model} from 'mongoose';
import { IVideo } from '../types/video';

const videoSchema = new Schema<IVideo>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        url: {
            
                type: String,
                required: true,
                trim: true
            }
    },
    {
        timestamps: true,
        toJSON: { getters: true},
        toObject: { getters: true}
    }
);

const Video = model<IVideo>('Video', videoSchema);

export default Video;