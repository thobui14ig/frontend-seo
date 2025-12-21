'use client'

import { Card, Spin } from "antd";
import { useUidStore } from "./store";

export default function UidResult() {
  const { result, isGetInfo } = useUidStore();

  if (isGetInfo) {
    return (
      <Card style={{ textAlign: "center", marginTop: 10 }}>
        <Spin/>
      </Card>
    );
  }

  if (!result) {
    return (
      <Card style={{ textAlign: "center", paddingTop: 50, marginTop: 10 }}>
        Chưa có dữ liệu, vui lòng nhập link và bấm Lấy ID.
      </Card>
    );
  }

  return (
    <Card style={{ padding: 20, marginTop: 10, whiteSpace: "pre-wrap", background: "#f5f5f5",  }}>
      {JSON.stringify(result, null, 2)}
    </Card>
  );
}
