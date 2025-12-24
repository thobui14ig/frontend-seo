import SeoLayout from "@/common/components/layout/SeoLayout";
import { Metadata } from "next";
import UidForm from "./UidForm";
import UidResult from "./UidResult";
import DemoNotice from "@/common/components/DemoNotice";
import Description from "./Description";

/* =======================
   METADATA SEO
======================= */
export const metadata: Metadata = {
  title: "Công cụ lấy comment bài viết Facebook miễn phí",
  description:
    "Công cụ miễn phí giúp bạn lấy comment bài viết Facebook nhanh chóng chỉ bằng cách dán link bài viết. Không cần đăng nhập, sử dụng đơn giản.",
  robots: "index, follow",
  openGraph: {
    title: "Công cụ lấy comment bài viết Facebook miễn phí",
    description:
      "Dán link Facebook để lấy toàn bộ comment bài viết nhanh chóng, chính xác.",
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
        {/* ===== H1 ===== */}
        <h1 style={{ textAlign: "center", marginBottom: 30, fontSize: 30 }}>
          Công cụ lấy comment bài viết Facebook miễn phí
        </h1>
        <DemoNotice/>
        <div
          className="uid-container"
          style={{
            gap: 20,
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

    </SeoLayout>
  );
}
