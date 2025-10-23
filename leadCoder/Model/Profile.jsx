import { Modal, Button, Avatar, Input } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import {useProfileStore} from "../src/store/useProfileStore"; // adjust the path if needed

function Profile({ open, onClose }) {
  const { profile, setProfile } = useProfileStore();
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [preview, setPreview] = useState(profile.image);

  // handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
        setProfile({ image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Main Profile Modal */}
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
          <Avatar
            size={80}
            src={profile.image}
            icon={!profile.image && <UserOutlined />}
            className="bg-blue-500"
          />

          {/* User Info */}
          <div className="text-center">
            <h2 className="text-lg font-bold">{profile.name}</h2>
            <p className="text-gray-500">{profile.email}</p>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col gap-2">
            <Button
              className="w-full !bg-gray-100 !text-gray-800 hover:!bg-gray-200 !font-medium"
              onClick={() => setOpenView(true)}
            >
              View
            </Button>

            <Button
              onClick={() => setOpenEdit(true)}
              className="w-full !bg-gray-100 !text-gray-800 hover:!bg-indigo-400 !font-medium"
            >
              Edit Profile
            </Button>

            <Button
              icon={<LogoutOutlined />}
              className="w-full !bg-red-500 !text-white hover:!bg-red-600 !font-medium"
            >
              Logout
            </Button>
          </div>
        </div>
      </Modal>

      {/* View Profile Modal */}
      <Modal
        open={openView}
        onCancel={() => setOpenView(false)}
        footer={null}
        centered
        width="100%"
        style={{
          top: 0,
          margin: 0,
          padding: 100,
          height: 0,
          
        }}
        bodyStyle={{
          height: '60vh',
          overflow: 'auto',
          padding: 15,
        }}
        className="!max-w-none !w-[60vw] !h-screen"
      >
        <div className="flex flex-col items-center gap-3 w-full h-full ">
          <div className="w-full h-[200px] flex justify-center items-center">
            {/* profle img  */}
            <div className="w-[200px] h-[200px] rounded-full flex justify-center items-center">
              <Avatar
                // size={80}
                src={profile.image}
                icon={!profile.image && <UserOutlined />}
                className="!bg-gray-400 !w-full !h-full object-cover"
              />
            </div>
          </div>

          {/* other details  */}
          <div className=" w-full h-full text-neutral-400">
            <div>
              <p className="text-gray-400 text-sm text-center mb-5">{profile.bio}</p>
            </div>
            <div className="flex gap-3">
              <div className="w-6/10 h-[170px] flex flex-col gap-1 rounded-md mastShadow px-3 py-2">
                <h2 className="text-lg font-medium">Name : {profile.name}</h2>
                <p className="text-gray-400 text-lg font-medium">Address : {profile.address}</p>
                <p className="text-gray-400 text-lg font-medium">Language : {profile.language}</p>
                <p className="text-gray-400 text-lg font-medium">Passion : {profile.passion}</p>
                <h2 className="text-lg font-medium">Email : {profile.contact}</h2>
              </div>
              <div className="bg-purple-400 w-6/12 border border-white/30 rounded-md mastShadow">right</div>
            </div>

          </div>
          
        </div>
      </Modal>

      {/* Edit Profile Modal */}
      <Modal
        open={openEdit}
        onCancel={() => setOpenEdit(false)}
        footer={null}
        centered
        width={450}
        className="rounded-xl"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-center mb-2">Edit Profile</h2>

          {/* Profile Image Upload */}
          <div className="flex flex-col items-center">
            <Avatar
              size={80}
              src={preview}
              icon={!preview && <UserOutlined />}
              className="bg-blue-500"
            />
            <label className="mt-2 cursor-pointer text-blue-600 hover:underline text-sm">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              Change Profile Picture
            </label>
          </div>

          {/* Input Fields */}
          <Input
            placeholder="Full Name"
            value={profile.name}
            onChange={(e) => setProfile({ name: e.target.value })}
          />
          <Input
            placeholder="Address"
            value={profile.address}
            onChange={(e) => setProfile({ address: e.target.value })}
          />
          <Input.TextArea
            placeholder="Bio"
            rows={3}
            value={profile.bio}
            onChange={(e) => setProfile({ bio: e.target.value })}
          />
          <Input
            placeholder="Phone / Email"
            value={profile.contact}
            onChange={(e) => setProfile({ contact: e.target.value })}
          />
          <Input
            placeholder="Favorite Programming Language"
            value={profile.language}
            onChange={(e) => setProfile({ language: e.target.value })}
          />
          <Input
            placeholder="Passion / Interests"
            value={profile.passion}
            onChange={(e) => setProfile({ passion: e.target.value })}
          />

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-3">
            <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
            <Button
              type="primary"
              onClick={() => {
                setOpenEdit(false);
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Profile;
