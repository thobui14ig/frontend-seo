'use client'

import { CheckCircleOutlined, CopyOutlined, LoadingOutlined } from "@ant-design/icons";
import { Card, Empty, Spin, Tag } from "antd";
import { useState } from "react";
import { useUidStore } from "./store";

export default function UidResult() {
  const { result, isGetComment } = useUidStore();
  const [copied, setCopied] = useState(false);

  // Loading State
  if (isGetComment) {
    return (
      <Card className="border-0 shadow-xl backdrop-blur-sm bg-white/70 rounded-3xl p-12 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <Spin 
            indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} 
            size="large"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-1">Đang lấy comment...</h3>
            <p className="text-gray-500 text-sm">Vui lòng chờ trong giây lát</p>
          </div>
        </div>
      </Card>
    );
  }

  // No Data State
  if (!result) {
    return (
      <Card className="border-0 shadow-xl backdrop-blur-sm bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center hover:shadow-2xl transition-all duration-300 relative z-10 pt-20">
        <Empty 
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-700">Chưa có dữ liệu</h3>
              <p className="text-gray-500">
                Nhập link Facebook và nhấn <span className="font-semibold text-blue-600">Lấy Comment Ngay</span>
              </p>
            </div>
          }
        />
      </Card>
    );
  }

  // Success State - NO BADGE (handled by parent)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(result, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <Card className="border-0 shadow-2xl backdrop-blur-sm bg-white/80 rounded-3xl p-8 hover:shadow-3xl transition-all duration-300 relative overflow-hidden relative z-10 pt-20">
      
      {/* Copy Button */}
      <div className="flex justify-end mb-6 sticky top-0 z-20 bg-white/90 backdrop-blur-sm py-2">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 active:scale-95 border border-white/30"
        >
          <CopyOutlined />
          {copied ? "Đã copy!" : "Copy JSON"}
        </button>
      </div>

      {/* Pretty JSON Display */}
      <div className="max-h-96 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-2xl p-6 bg-gradient-to-b from-gray-50 to-white border border-gray-100">
        <pre className="text-sm leading-relaxed text-gray-800 font-mono whitespace-pre-wrap">
          {JSON.stringify(result, null, 2)}
        </pre>
      </div>

      {/* Data Summary */}
      {result && typeof result === 'object' && Object.keys(result).length > 0 && (
        <div className="mt-8 pt-8 border-t border-gray-100">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            📊 Thông tin chính
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {Object.entries(result).slice(0, 4).map(([key, value]) => (
              <div key={key} className="flex justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-200">
                <span className="font-semibold text-gray-700 capitalize text-sm">{key.replace(/_/g, ' ')}:</span>
                <span className="font-mono text-gray-900 text-sm truncate max-w-[200px] bg-white px-2 py-1 rounded-lg border">
                  {typeof value === 'string' ? value.slice(0, 50) + (value.length > 50 ? '...' : '') : JSON.stringify(value).slice(0, 50) + '...'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
