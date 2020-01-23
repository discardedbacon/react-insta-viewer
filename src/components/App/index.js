import React from "react"
import Card from "../Card/"
import { useSelector, useDispatch } from "react-redux"
import Modal from "../Modal/"
import { FaSync } from "react-icons/fa";

function App() {
  const defaultConfig = { numOfImages: 20, imageFrame: true, endPoint: "./insta.php" }
  const config = (window.instaViewer && window.instaViewer.config) ? window.instaViewer.config : defaultConfig

  const dispatchRedux = useDispatch();
  const imageData = useSelector(appState => appState.app.imageData);
  const imageCount = useSelector(appState => appState.app.imageCount);

  const loadMoreHandler = () => {
    dispatchRedux({ type: "IMAGE_COUNT_INCREASED", payload: config.numOfImages });
  }

  React.useEffect(() => {
    (async () => {
      const response = await fetch(config.endPoint);
      const imageJSON = await response.json();
      dispatchRedux({ type: "IMAGE_COUNT_INCREASED", payload: config.numOfImages })
      dispatchRedux({ type: "IMAGE_DATA_LOADED", payload: imageJSON.media.data })
    })();
  }, [])

  return (
    <>
      <div className='container app-container'>
        <div className='row'>
          {imageData && imageData.map((data, index) => {
            return (index < imageCount ? <Card key={index} data={data} config={config} /> : null)
          })}
        </div>
        {imageCount < imageData.length &&
          <div className="col-12 text-center">
            <button type="button" className="btn btn-outline-primary btn-md" onClick={loadMoreHandler}><FaSync /> &nbsp; Load More</button>
          </div>
        }
      </div>
      <Modal />
    </>
  )
}

export default App
