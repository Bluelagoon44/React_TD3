const Modal = ({title, children, close}) => {
  return (
    <section>
        <button onClick={close}>X</button>
        <h2>{title}</h2>
        {children}
    </section>
  )
}

export default Modal