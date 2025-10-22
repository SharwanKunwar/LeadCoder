import { Modal, Button, Avatar } from 'antd';
import React from 'react';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';

function Profile({ open, onClose }) {
  return (
    <>
        <Modal
        open={open}
        onCancel={onClose}
        footer={null}
        maskClosable={false}
        centered
        width={400}
        className="rounded-xl"
        >
        <div className="flex flex-col items-center gap-4">
            {/* Avatar */}
            <Avatar size={80} icon={<UserOutlined />} className="bg-blue-500" />

            {/* User Info */}
            <div className="text-center">
            <h2 className="text-lg font-bold">Mahakal</h2>
            <p className="text-gray-500">Sharwankunwar07@gmail.com</p>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-col gap-2">
            <Button className="w-full !bg-gray-100 !text-gray-800 hover:!bg-gray-200 !font-medium" > View </Button>
            <Button className="w-full !bg-gray-100 !text-gray-800 hover:!bg-indigo-400 !font-medium" > Edit Profile </Button>
            <Button icon={<LogoutOutlined />} className="w-full !bg-red-500 !text-white hover:!bg-red-600 !font-medium" > Logout </Button>
            </div>
        </div>
        </Modal>



        {/* edit prfile model  */}
        <Modal>
            a
        </Modal>

        {/* View profile model  */}
        <Modal>

        </Modal>

    </>
  );
}

export default Profile;
