import React from "react"
import { Modal } from "../Modal/Modal"
import { GlobalContext } from "../../../context/GlobalContext"
import { ProductDetail } from "../ProductDetail"

const Layout = ({children}) => {

    const {isOpenModal} = React.useContext(GlobalContext)

    return(
        <main className="flex flex-col items-center mt-20">
            {children}

            {isOpenModal && <Modal> <ProductDetail/> </Modal>}
        </main>
    )
}

export {Layout}