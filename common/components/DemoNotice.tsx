export default function DemoNotice() {
  return (
    <p
      style={{
        textAlign: "center",
        marginBottom: 40,
        background: "#f5f7fa",
        padding: "12px 16px",
        borderRadius: 8,
        fontSize: 15,
        color: "#555",
      }}
    >
      🚀 Công cụ trên chỉ là <b>bản demo</b> và có giới hạn về số lượng comment.
      Nếu bạn cần <b>crawl comment Facebook hàng loạt</b>, tốc độ cao và xuất dữ
      liệu đầy đủ, hãy sử dụng{" "}
      <a
        href="/tool-crawl-comment-facebook"
        style={{ color: "#1677ff", fontWeight: 600 }}
      >
        công cụ chuyên nghiệp tại đây
      </a>
      .
    </p>
  );
}
