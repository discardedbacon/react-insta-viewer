import React from "react"
import classnames from "classnames"
import { useDispatch } from "react-redux"
import { FadeLoader } from "react-spinners"
import { FaHeart, FaComment } from "react-icons/fa";

function Card({ data, config }) {
  const dispatchRedux = useDispatch()
  const id = data.id;
  const url = data.permalink;
  let timestamp = new Date(data.timestamp).toLocaleDateString()

  const onClickHandler = () => {
    dispatchRedux({ type: "MODAL_CONTENT_SELECTED", payload: { id, url } })
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 animated fadeIn">
      <div className="card mb-3" onClick={onClickHandler}>
        <div className={classnames("card-body text-center", { noFrame: !config.imageFrame })}>
          {!data.media_url && (
            <div className="loader-container">
              <FadeLoader color="#666" />
            </div>
          )}
          {data.media_url && <img className="animated fadeIn" alt="" src={data.media_url} width="100%" />}
          <div className="overlay">
            <div className="text overlay-text">
              <p>{timestamp}</p>
              <p><FaHeart className="red" /> {data.like_count} &nbsp; <span><FaComment className="blue" /></span> {data.comments_count}</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Card
