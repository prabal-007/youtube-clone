import VideoCard from "./VideoCard"

const VIDEOS = [{
    title: "Winning Speech (Music Video) Karan Aujla | Mxrci | Latest Punjabi Songs 2024",
    singer: "Karan Aujla",
    views: "10 lakh views | 5 months ago",
    duration: "5:10",
    thumbnail: 'thumbnail.png',
    channel: "channel.png"
}, {
    title: "MILLIONAIRE SONG (Full Video): @YoYoHoneySingh | GLORY | BHUSHAN KUMAR",
    singer: "Yo Yo Honey Singh",
    views: "12 crore views | 1 month ago",
    duration: "3:30",
    thumbnail: 'millionaire.png',
    channel: "tseries.png"
}, {
    title: "Winning Speech 3(Music Video) Karan Aujla | Mxrci | Latest Punjabi Songs 2024",
    singer: "Karan Aujla",
    views: "9 lakh views | 5 months ago",
    duration: "5:10",
    thumbnail: 'thumbnail.png',
    channel: "channel.png"
}, {
    title: "Winning Speech 4 (Music Video) Karan Aujla | Mxrci | Latest Punjabi Songs 2024",
    singer: "Karan Aujla",
    views: "6 lakh views | 5 months ago",
    duration: "5:10",
    thumbnail: 'thumbnail.png',
    channel: "channel.png"
}, {
    title: "Winning Speech 5 (Music Video) Karan Aujla | Mxrci | Latest Punjabi Songs 2024",
    singer: "Karan Aujla",
    views: "11 lakh views | 5 months ago",
    duration: "5:10",
    thumbnail: 'thumbnail.png',
    channel: "channel.png"
}, {
    title: "Winning Speech 2 (Music Video) Karan Aujla | Mxrci | Latest Punjabi Songs 2024",
    singer: "Karan Aujla",
    views: "1 lakh views | 5 months ago",
    duration: "5:10",
    thumbnail: 'thumbnail.png',
    channel: "channel.png"
}, {
    title: "Winning Speech 3(Music Video) Karan Aujla | Mxrci | Latest Punjabi Songs 2024",
    singer: "Karan Aujla",
    views: "9 lakh views | 5 months ago",
    duration: "5:10",
    thumbnail: 'thumbnail.png',
    channel: "channel.png"
}, {
    title: "Winning Speech 4 (Music Video) Karan Aujla | Mxrci | Latest Punjabi Songs 2024",
    singer: "Karan Aujla",
    views: "6 lakh views | 5 months ago",
    duration: "5:10",
    thumbnail: 'thumbnail.png',
    channel: "channel.png"
}, {
    title: "Winning Speech 5 (Music Video) Karan Aujla | Mxrci | Latest Punjabi Songs 2024",
    singer: "Karan Aujla",
    views: "11 lakh views | 5 months ago",
    duration: "5:10",
    thumbnail: 'thumbnail.png',
    channel: "channel.png"
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map(video => (
            <VideoCard key={video.title} title={video.title} singer={video.singer} views={video.views} duration={video.duration} thumbnail={video.thumbnail} channel={video.channel} />
        ))}
    </div>
}
