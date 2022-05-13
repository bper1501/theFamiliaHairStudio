import React from 'react';
import './InstaFetch.css';

export default class InstaFetch extends React.Component{

  state = ({photos: [], loading: true})

  INSTAGRAM_ID = "17923090426797241";
  THUMBNAIL_WIDTH = 640;
  PHOTO_COUNT = 6;


  
    async componentDidMount(){
      try {
        const response = await fetch(
         
          `https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"${this.INSTAGRAM_ID}","first":${this.PHOTO_COUNT},"after":null}`
        )
        const { data } = await response.json()
        const photos = data.user.edge_owner_to_timeline_media.edges.map(
          ({ node }) => {
            const { id } = node
            const thumbnail = node.thumbnail_resources.find(
              thumbnail => thumbnail.config_width === this.THUMBNAIL_WIDTH
            )
            const { src, config_width: width, config_height: height } = thumbnail
            const url = `https://www.instagram.com/p/${node.shortcode}`
            return {
              id,
              src,
              width,
              height,
              url
            }
          }
        )
        this.setState({ photos, loading: false })
      } catch (error) {
        console.error(error)
      }
    }


render(){
  return (
    <>
      <div className="feed-wrapper">
        <h1>feed should go here</h1>
          {this.state.photos && this.state.photos.map(({src}) =>(
            <img src={src} className="feed-image" alt="insta" />
          ))}
      </div>
    </>
  )
}
}

