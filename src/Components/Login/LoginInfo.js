import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { Button, Modal } from 'antd'
import Login from './Login'
function LoginInfo() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [User, setUser] = useState(undefined);
    // const currentUser = useSelector(state => state.currentUser)
    // setUser(currentUser)

    const logout = () => {
        setUser(undefined)
        setIsModalVisible(false);
    }


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {

        setIsModalVisible(false);

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    if (User) {
        return <div style={{ display: "grid", gridTemplateRows: "50% 40%", marginTop: "20%" }}>
            <div>
                Hi, {User}!
            </div>
            <div >
                <Button onClick={logout} >click to log-out</Button>

            </div>
        </div>

    } else {
        return <div style={{ marginTop: "20%" }}>
            <Button onClick={showModal} >click to log-in</Button>
            <Modal title="Login"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}

                footer={null}>
                <Login setUser={setUser} />
            </Modal>
        </div>
    }
}

export default LoginInfo
