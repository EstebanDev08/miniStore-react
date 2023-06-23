import React from "react"
import { Modal } from "../Modal/Modal"
import { GlobalContext } from "../../../context/GlobalContext"
import { ProductDetail } from "../ProductDetail"

const Layout = ({children}) => {

    const {isOpenModal} = React.useContext(GlobalContext)

    return(
        <main className="grid justify-items-center pt-16 min-h-screen">
            {children}

            {isOpenModal && <Modal> <ProductDetail/> </Modal>}
        </main>
    )
}

export {Layout}