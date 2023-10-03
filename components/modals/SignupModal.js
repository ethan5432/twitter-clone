import Modal from "@mui/material/Modal"
export default function SignupModal() {

    const [isOpen, setIsOpen] = useState(false)
    const handleClose = () => setIsOpen(false)
    const handleOpen = () => setIsOpen(true)

    return (
      <>
        <button
          className="bg-white border border-white text-black w-[160px]
          rounded-full h-[40px] hover:bg-[#cbd2d7]"
          onClick={handleOpen}
        >
          Sign up
        </button>

        <Modal
          open={isOpen}
          onClose={handleClose}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="w-[400px] h-[200px] bg-white">Sign Up</div>
        </Modal>
      </>
    );
}