Quản lý Cửa Hàng - Mobile App
Giới thiệu
Ứng dụng Quản lý Cửa Hàng là công cụ quản lý sản phẩm tiện lợi, giúp các chủ cửa hàng và người quản lý dễ dàng theo dõi và cập nhật thông tin sản phẩm mọi lúc mọi nơi. Ứng dụng được phát triển với React Native, Expo, và sử dụng Firebase Firestore làm cơ sở dữ liệu, đảm bảo tính nhanh chóng và đáng tin cậy cho việc lưu trữ và đồng bộ dữ liệu.

Tính năng chính
Thêm sản phẩm: Nhập thông tin sản phẩm như tên, giá, mô tả, ảnh minh họa để thêm sản phẩm vào kho.
Xóa sản phẩm: Xóa sản phẩm khi không còn cần thiết.
Hiển thị danh sách sản phẩm: Xem toàn bộ sản phẩm hiện có trong kho với thông tin cơ bản.
Tìm kiếm và lọc sản phẩm (Tùy chọn): Tìm kiếm sản phẩm theo tên hoặc loại sản phẩm để thuận tiện cho việc tra cứu.
Công nghệ sử dụng
React Native: Framework chính để phát triển ứng dụng di động đa nền tảng.
Expo: Quản lý và hỗ trợ phát triển ứng dụng một cách nhanh chóng và dễ dàng.
JavaScript: Ngôn ngữ lập trình chính cho logic ứng dụng.
Firebase Firestore: Cơ sở dữ liệu NoSQL lưu trữ thông tin sản phẩm, hỗ trợ đồng bộ hóa và truy vấn thời gian thực.

Cấu trúc thư mục
less
Copy code
├── assets                   # Chứa ảnh và tài liệu
├── components               # Các thành phần React độc lập như ProductCard, ProductForm, ...
├── screens                  # Các màn hình chính: HomeScreen, AddProductScreen, ...
├── services                 # Chứa các file liên quan đến Firebase như config và các hàm dịch vụ
├── .env                     # Cấu hình môi trường cho Firebase
├── App.js                   # Điểm bắt đầu của ứng dụng
└── README.md

Sử dụng
Thêm sản phẩm: Truy cập màn hình "Thêm sản phẩm" và nhập thông tin chi tiết sản phẩm.
Xóa sản phẩm: Trên màn hình danh sách, chọn một sản phẩm và xóa nếu cần.
Hiển thị sản phẩm: Tất cả sản phẩm sẽ hiển thị ở màn hình chính.
