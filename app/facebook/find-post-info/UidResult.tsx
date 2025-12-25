"use client";

import { Card, Empty, Spin } from "antd";
import { useUidStore } from "./store";
import { LoadingOutlined } from "@ant-design/icons";

export default function UidResult() {
  const { result, isGetInfo } = useUidStore();

  if (isGetInfo) {
    return (
      <Card className="border border-slate-100 shadow-lg rounded-2xl p-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 32 }} spin />} />
          <p className="text-sm text-gray-600">Đang lấy thông tin, vui lòng chờ...</p>
        </div>
      </Card>
    );
  }

  if (!result) {
    return (
      <Card className="border border-slate-100 shadow-sm rounded-2xl p-8 text-center bg-gradient-to-br from-slate-50 to-white">
        <Empty
          description={
            <div className="space-y-1">
              <p className="text-base font-medium text-gray-700">Chưa có dữ liệu</p>
              <p className="text-sm text-gray-500">
                Nhập link Facebook và bấm <span className="font-semibold text-blue-600">Lấy thông tin</span>.
              </p>
            </div>
          }
        />
      </Card>
    );
  }

  return (
    <Card className="border border-slate-100 shadow-lg rounded-2xl p-6 bg-white">
      <div className="max-h-80 overflow-auto rounded-xl border border-slate-100 bg-slate-50 p-4">
        <pre className="text-xs leading-relaxed text-slate-800 font-mono whitespace-pre-wrap">
          {JSON.stringify(result, null, 2)}
        </pre>
      </div>
    </Card>
  );
}
