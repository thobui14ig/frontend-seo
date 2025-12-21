'use client'

import { Input, Button, Form } from "antd";
import { useState } from "react";
import { useUidStore } from "./store";
import { getInfoFbLink } from "@/api/facebook.api";
import { toast } from "react-toastify";

export default function UidForm() {
  const [link, setLink] = useState("");
  const { setResult, setIsGetInfo } = useUidStore();

  const handleSubmit = async () => {
    if (link.length === 0) {
      toast.error("Vui lòng nhập link!")
      return
    }
    try {
      setIsGetInfo(true)
      const res = await getInfoFbLink(link)

      setResult(res.data);  
      setIsGetInfo(false)    
    } catch (error: any) {
      setIsGetInfo(false)  
      setResult(null)
      toast.error(`Lỗi server: ${error.message}`)
    } 
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="Link facebook">
        <Input
          size="large"
          placeholder="Nhập Link facebook cần lấy thông tin"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          style={{ height: 50 }}
        />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: "100%", height: 55, fontSize: 18 }}
      >
        Lấy thông tin
      </Button>
    </Form>
  );
}
