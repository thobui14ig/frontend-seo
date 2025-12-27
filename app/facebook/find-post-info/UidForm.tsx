/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getInfoFbLink } from "@/api/facebook.api";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { useUidStore } from "./store";

export default function UidForm() {
  const [form] = Form.useForm();
  const [link, setLink] = useState("");
  const { setResult, setIsGetInfo, isGetInfo } = useUidStore();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    if (!link.trim()) {
      toast.error("Vui lòng nhập link Facebook!");
      return;
    }

    startTransition(async () => {
      try {
        setIsGetInfo(true);
        const res = await getInfoFbLink(link);
        setResult(res.data);
        form.resetFields();
        toast.success("Lấy thông tin thành công!");
      } catch (e) {
        const error = e as any;
        setResult(null);
        toast.error(error.response?.data?.["message"]);
      } finally {
        setIsGetInfo(false);
      }
    });
  };

  return (
    <div className="space-y-6">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div className="space-y-5">
          {/* Link Input */}
          <Form.Item
            label={
              <span className="text-sm font-medium text-gray-700">
                Link Facebook
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

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={isPending || isGetInfo}
              disabled={!link.trim()}
              className="h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              icon={isPending || isGetInfo ? <LoadingOutlined /> : <span>🔍</span>}
            >
              {isPending || isGetInfo ? "Đang lấy..." : "Lấy thông tin"}
            </Button>
          </Form.Item>
        </div>
      </Form>

      {/* Hint */}
      <div className="p-4 bg-gradient-to-r from-slate-50 to-sky-50 rounded-2xl border border-slate-100">
        <p className="text-xs text-slate-700 font-medium">
          Nhập link post, profile hoặc page hợp lệ để lấy thông tin nhanh chóng.
        </p>
      </div>
    </div>
  );
}
