import { getStrapiMedia } from "../lib/media"

const Image = ({ image, style }) => {
  const { url, alternativeText, width, height } = image.data.attributes

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
  <img
  
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}

    />
  )
}

export default Image
