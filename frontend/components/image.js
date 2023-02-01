import { getStrapiMedia } from "../lib/media"

const Image = ({ image, style }) => {
   if (!image.data) return;
  const { url, alternativeText, width, height } = image.data.attributes

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
  <img src={getStrapiMedia(image)}  alt={alternativeText || ""}  />
  )
}

export default Image
