<template>
  <!-- Sidebar -->
  <div class="sidebar">
    <h2>📊 Dashboard</h2>
    <a href="#">🏠 Trang chủ</a>
    <a href="#">👤 Tài khoản</a>
    <a href="#">📁 Dữ liệu</a>
    <a href="#">⚙️ Cài đặt</a>
    <a href="#">🚪 Đăng xuất</a>
  </div>

  <!-- Main Content -->
  <div class="main">
    <h1>Chào mừng, Admin!</h1>

    <div class="card">
      <h3>📌 Thông báo</h3>
      <p>
        Hệ thống đang hoạt động ổn định. Không có sự cố nào được ghi nhận hôm
        nay.
      </p>
    </div>

    <div class="card">
      <h3>📝 Báo cáo nhanh</h3>
      <p>
        • Người dùng mới hôm nay: <strong>12</strong><br />
        • Lượt truy cập: <strong>256</strong><br />
        • Tỷ lệ chuyển đổi: <strong>4.8%</strong>
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import "../../assets/css/Dashboard.css";
</script>
