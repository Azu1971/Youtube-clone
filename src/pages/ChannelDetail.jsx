import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "../components/VideoCard";
import "./ChannelDetail.css";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(
      `channels?part=snippet,statistics,brandingSettings&id=${id}`
    ).then((data) => {
      setChannelDetail(data.items[0]);
      console.log("Channel Data:", data.items[0]);
    });
    fetchFromAPI(
      `search?channelId=${id}&part=snippet,id&order=date&maxResults=15`
    ).then((data) => {
      setVideos(data.items);
      console.log(data.items);
    });
  }, [id]);

  return (
    <div className="channel">
      <h1>VIDEOS</h1>
      <div className="channel-dets">
        <img
          className="channel-pic"
          src={channelDetail?.snippet?.thumbnails?.high?.url}
        />
        <div>
          <h2>{channelDetail?.snippet?.title}</h2>
          <p>
            {channelDetail?.snippet?.customUrl} .{" "}
            {channelDetail?.statistics?.subscriberCount} subscribers .{" "}
            {channelDetail?.statistics?.videoCount} videos
          </p>
          <button className="subscribe">Subscribe</button>
        </div>
      </div>
      <div className="feed-videos">
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoCard
              key={
                video?.id?.videoId ||
                video?.id?.playlistId ||
                video?.id?.channelId ||
                video?.etag
              }
              video={video}
            />
          ))
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </div>
  );
};

export default ChannelDetail;
