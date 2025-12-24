import DemoNotice from "@/common/components/DemoNotice";
import SeoLayout from "@/common/components/layout/SeoLayout";
import { Metadata } from "next";
import Description from "./Description";
import UidForm from "./UidForm";
import UidResult from "./UidResult";

/* =======================
   METADATA SEO
======================= */
export const metadata: Metadata = {
  title: "Công cụ lấy thông tin bài viết Facebook miễn phí",
  description:
    "Công cụ miễn phí giúp bạn lấy UID, ID và thông tin bài viết Facebook nhanh chóng chỉ bằng cách dán link bài viết. Không cần đăng nhập.",
  robots: "index, follow",
  openGraph: {
    title: "Công cụ lấy thông tin bài viết Facebook miễn phí",
    description:
      "Dán link Facebook để lấy UID, ID bài viết và thông tin chi tiết nhanh chóng, chính xác.",
    type: "website",
  },
};

/* =======================
   PAGE
======================= */
export default function Page() {
  return (
    <SeoLayout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 style={{ textAlign: "center", marginBottom: 30, fontSize: 30 }}>
          Công cụ lấy thông tin bài viết Facebook miễn phí
        </h1>
        <DemoNotice/>
        {/* ===== TOOL ===== */}
        <div
          className="uid-container"
          style={{
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <UidForm />
          </div>

          <div style={{ flex: 1, minWidth: 280 }}>
            <UidResult />
          </div>
        </div>

        {/* ===== SEO CONTENT ===== */}
        <Description/>
      </div>
      {/* ===== H1 ===== */}

    </SeoLayout>
  );
}
