import React from "react"
import { useSelector, useDispatch } from "react-redux"
function Modal() {
  const selectedModalContent = useSelector(appState => appState.card.selectedModalContent);
  const dispatchRedux = useDispatch()
  const embedURL = `${selectedModalContent.url}embed`;
  const closeModal = () => {
    dispatchRedux({ type: "MODAL_CONTENT_SELECTED", payload: {} })
  }

  if (!selectedModalContent.url) return null
  return (
    <div
      className='modal fade animated fadeIn fast'
      id='instaModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ height: window.innerHeight * 0.95 }}>
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>&times;</button>
          </div>
          <div className="modal-body">
            <iframe id="instagramPage" title="instagram page" scrolling="auto" src={embedURL} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
