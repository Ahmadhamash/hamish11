<?php
// استلام البيانات المرسلة من لوحة التحكم
$jsonData = file_get_contents('php://input');

// الكتابة فوق ملف products.json بالبيانات الجديدة
file_put_contents('products.json', $jsonData);

// إرجاع رسالة نجاح
echo json_encode(['status' => 'success', 'message' => 'Products saved successfully.']);
?>