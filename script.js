console.log("สคริปต์ทำงานแล้ว!");

// หา element ปุ่ม จาก id
const btn = document.getElementById("magic-btn");

if (btn) {
  btn.addEventListener("click", () => {
    alert("เย่! ปุ่มนี้ทำงานด้วย JavaScript 🚀");

    // เปลี่ยนข้อความบนหน้า หลังจากกดปุ่ม
    const header = document.querySelector("h1");
    if (header) {
      header.textContent = "คุณกดปุ่มเรียบร้อยแล้ว 😄";
    }
  });
}
