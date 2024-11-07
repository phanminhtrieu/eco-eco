# Quản lý Cửa Hàng - Mobile App

## Giới thiệu

Ứng dụng **Quản lý Cửa Hàng** là một công cụ tiện lợi giúp chủ cửa hàng và người quản lý theo dõi, cập nhật thông tin sản phẩm trong kho qua thiết bị di động. Ứng dụng được phát triển bằng **React Native** và **Expo**, sử dụng **Firebase Firestore** làm cơ sở dữ liệu, đảm bảo tốc độ và độ chính xác trong việc lưu trữ và đồng bộ hóa dữ liệu sản phẩm.

## Tính năng chính

- **Thêm sản phẩm**: Nhập thông tin chi tiết sản phẩm như tên, giá, mô tả và ảnh minh họa để thêm vào kho.
- **Xóa sản phẩm**: Xóa sản phẩm không cần thiết khỏi kho hàng.
- **Hiển thị danh sách sản phẩm**: Xem toàn bộ sản phẩm với thông tin cơ bản.
- **Tìm kiếm và lọc sản phẩm** *(Tùy chọn)*: Tìm kiếm theo tên hoặc loại sản phẩm để dễ dàng tra cứu.

## Công nghệ sử dụng

- **React Native**: Framework chính để phát triển ứng dụng di động đa nền tảng.
- **Expo**: Hỗ trợ phát triển và quản lý ứng dụng nhanh chóng.
- **JavaScript**: Ngôn ngữ lập trình chính.
- **Firebase Firestore**: Cơ sở dữ liệu NoSQL để lưu trữ thông tin sản phẩm, hỗ trợ đồng bộ hóa và truy vấn thời gian thực.

## Yêu cầu hệ thống

- **Node.js** >= 14.x
- **Expo CLI**
- **Firebase Project** với Firestore

## Cài đặt

### 1. Clone dự án

```bash
git clone https://github.com/your-username/store-management-app.git
cd store-management-app
