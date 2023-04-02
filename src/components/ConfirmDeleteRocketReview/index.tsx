import { IConfirmDeleteRocketReviewProps } from './types'
import {
  Button,
  CloseModal,
  Content,
  Header,
  IconBox,
  ModalBody,
  ModalFooter,
  Title,
} from './style'
import { FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: '#636363',
    width: '600px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
}

const ConfirmDeleteRocketReview: React.FC<IConfirmDeleteRocketReviewProps> = ({
  isOpen,
  onClose,
  onConfirm,
  id,
}) => {

  const handleClose = () => {
    onClose?.()
  }

  const handleConfirm = () => {
    onConfirm?.(id)
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} style={customStyles}>
      <div>
        <Content>
          <Header>
            <IconBox>
              <FaTimes
                size="46px"
                style={{
                  color: '#f15e5e',
                  display: 'inline-block',
                  marginTop: '13px',
                }}
              />
            </IconBox>
            <Title>Are you sure?</Title>
            <CloseModal onClick={handleClose}>&times;</CloseModal>
          </Header>
          <ModalBody>
            <p>
              Do you really want to delete these records? This process cannot be
              undone.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              style={{ backgroundColor: '#c1c1c1' }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              style={{ backgroundColor: '#f15e5e' }}
              onClick={handleConfirm}
            >
              Delete
            </Button>
          </ModalFooter>
        </Content>
      </div>
    </Modal>
  ) 
}

export default ConfirmDeleteRocketReview
