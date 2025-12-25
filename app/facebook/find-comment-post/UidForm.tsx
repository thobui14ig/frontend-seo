'use client'

import { getCommentFb } from "@/api/facebook.api";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { AxiosError } from "axios";
import { ChangeEvent, useState, useTransition } from "react";
import { toast } from "react-toastify";
import { useUidStore } from "./store";

export default function UidForm() {
  const [form] = Form.useForm();
  const [link, setLink] = useState("");
  const [numberOfCommentToget, setNumberOfCommentToget] = useState(1);
  const { setResult, setIsGetComment, isGetComment } = useUidStore();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    if (!link.trim()) {
      toast.error("Vui lòng nhập link Facebook!");
      return;
    }
    
    if (numberOfCommentToget > 1) {
      toast.error("Bạn chỉ được lấy tối đa 1 comment. Nâng cấp tài khoản để lấy nhiều hơn.");
      return;
    }

    startTransition(async () => {
      try {
        setIsGetComment(true);
        const res = await getCommentFb(link);
        setResult(res.data);
        form.resetFields();
        toast.success("Lấy comment thành công!");
      } catch (e) {
        const error = e as AxiosError;
        setResult(null);
        toast.error(`Lỗi server: ${error.message}`);
      } finally {
        setIsGetComment(false);
      }
    });
  };

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(1, Number(e.target.value) || 1));
    setNumberOfCommentToget(value);
  };

  return (
    <div className="space-y-6">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div className="space-y-5">
          {/* Link Input */}
          <Form.Item 
            label={
              <span className="text-sm font-medium text-gray-700">
                Link Facebook Post
              </span>
            }
            name="link"
          >
            <Input
              size="large"
              placeholder="https://www.facebook.com/username/posts/123456789..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="h-14 rounded-xl border-gray-200 focus:border-blue-500 transition-all"
              prefix={<span className="text-gray-400 mr-3">🔗</span>}
            />
          </Form.Item>

          {/* Comment Count Input */}
          <Form.Item 
            label={
              <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                Số lượng comment 
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                  Max: 1
                </span>
              </span>
            }
          >
            <Input
              size="large"
              placeholder="1"
              value={numberOfCommentToget}
              onChange={handleNumberChange}
              className="h-14 rounded-xl border-gray-200 w-32 focus:border-blue-500 transition-all"
              disabled={numberOfCommentToget !== 1}
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={isPending || isGetComment}
              disabled={!link.trim()}
              className="h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              icon={isPending || isGetComment ? <LoadingOutlined /> : <span>🚀</span>}
            >
              {isPending || isGetComment ? "Đang lấy..." : "Lấy Comment Ngay"}
            </Button>
          </Form.Item>
        </div>
      </Form>

      {/* Upgrade Hint */}
      <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
        <p className="text-xs text-orange-800 font-medium flex items-center gap-2">
          <span>⚡</span>
          Nâng cấp tài khoản để lấy không giới hạn comment!
        </p>
      </div>
    </div>
  );
}
