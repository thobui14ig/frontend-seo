'use client'

import { getCommentFb } from "@/api/facebook.api";
import { Button, Form, Input } from "antd";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { useUidStore } from "./store";

export default function UidForm() {
  const [link, setLink] = useState("");
  const [numberOfCommentToget, setNumberOfCommentToget] = useState(1);
  const { setResult, setIsGetComment } = useUidStore();

  const handleSubmit = async () => {
    if (link.length === 0) {
      toast.error("Vui lòng nhập link!")
      return
    }
    if (numberOfCommentToget > 1) return toast.error("Bạn chỉ được lấy tối đa 1 comment. Nâng cấp tài khoản để lấy được nhiều comment hơn.")
    try {
      setIsGetComment(true)
      const res = await getCommentFb(link)

      setResult(res.data);  
      setIsGetComment(false)    
    } catch (error: any) {
      setResult(null)
      setIsGetComment(false)  
      toast.error(`Lỗi server: ${error.message}`)
    } 
  };

  const handleNumberOfCommentToget = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberOfCommentToget(Number(e.target.value))
  }

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
      <Form.Item label="Số lượng comment cần lấy">
        <Input
          size="small"
          placeholder="Nhập Số lượng"
          value={numberOfCommentToget}
          onChange={(e) => handleNumberOfCommentToget(e)}
          style={{ height: 50 }}
        />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: "100%", height: 55, fontSize: 18 }}
      >
        Lấy comment
      </Button>
    </Form>
  );
}
