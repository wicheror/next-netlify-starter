import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main style={{ backgroundColor: "white", padding: "1rem" }}>
      <h2 style={{ fontFamily: "Arial, sans-serif", fontSize: "1.5rem" }}>Gallery</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ margin: "1rem" }}>
          <StaticImage
            src="../images/painting1.jpg"
            alt="Painting 1"
            placeholder="blurred"
            layout="fixed"
            width={200}
          />
        </div>
        <div style={{ margin: "1rem" }}>
          <StaticImage
            src="../images/painting2.jpg"
            alt="Painting 2"
            placeholder="blurred"
            layout="fixed"
            width={200}
          />
        </div>
        <div style={{ margin: "1rem" }}>
          <StaticImage
            src="../images/painting3.jpg"
            alt="Painting 3"
            placeholder="blurred"
            layout="fixed"
            width={200}
          />
        </div>
        {/* Add more paintings here */}
      </div>
    </main>
  )
}

export default IndexPage
