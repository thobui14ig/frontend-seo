import Layout from "@/common/components/layout/Layout";
import UidForm from "./UidForm";
import UidResult from "./UidResult";
import { Metadata } from "next";
import SeoLayout from "@/common/components/layout/SeoLayout";

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
      {/* ===== H1 ===== */}
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>
        Công cụ lấy thông tin bài viết Facebook miễn phí
      </h1>

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
      <section style={{ marginTop: 60, lineHeight: 1.9 }}>
        <h2>Công cụ lấy thông tin bài viết Facebook</h2>
        <p>
          Công cụ giúp bạn nhanh chóng lấy UID, ID và các thông tin quan trọng của
          một bài viết Facebook chỉ bằng cách dán link bài viết. Tất cả thao tác
          được thực hiện trực tiếp trên trình duyệt, không yêu cầu đăng nhập
          tài khoản Facebook.
        </p>

        <h2>Hướng dẫn sử dụng từng bước</h2>
        <ol>
          <li>
            <b>Bước 1:</b> Sao chép link bài viết Facebook mà bạn muốn lấy thông tin
          </li>
          <li>
            <b>Bước 2:</b> Dán link bài viết vào ô nhập liệu bên trên
          </li>
          <li>
            <b>Bước 3:</b> Nhấn nút <b>Lấy thông tin</b> để bắt đầu xử lý
          </li>
          <li>
            <b>Bước 4:</b> Xem UID, ID và thông tin bài viết hiển thị ngay lập tức
          </li>
        </ol>

        <h2>Công cụ này phù hợp với ai?</h2>
        <p>
          Công cụ phù hợp cho marketer, người chạy quảng cáo Facebook, quản trị fanpage,
          người làm seeding hoặc bất kỳ ai cần lấy thông tin bài viết Facebook
          để phục vụ phân tích và xử lý dữ liệu.
        </p>

        <h2>Câu hỏi thường gặp</h2>

        <p>
          <b>Công cụ có miễn phí không?</b><br />
          Có. Công cụ hoàn toàn miễn phí và không yêu cầu đăng nhập.
        </p>

        <p>
          <b>Có cần tài khoản Facebook không?</b><br />
          Không. Bạn chỉ cần link bài viết Facebook là có thể sử dụng.
        </p>

        <p>
          <b>Dữ liệu tra cứu có được lưu lại không?</b><br />
          Không. Chúng tôi không lưu trữ link bài viết hay dữ liệu của người dùng.
        </p>
      </section>
    </SeoLayout>
  );
}
