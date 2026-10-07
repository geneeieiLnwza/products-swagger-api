# Products CRUD API + Swagger UI — v1.0.0

Backend สำหรับงานข้อ 2 ด้วย Node.js + Express และเอกสาร OpenAPI 3.0.3 ผ่าน Swagger UI

**ลิงก์รีโป public:** https://github.com/Akirakato112233/products-swagger-api

**[หน้าเอกสารส่งงานและภาพทดสอบ](SUBMISSION.md)**

## เริ่มใช้งานใน Codespace

เปิดรีโปนี้บน GitHub แล้วเลือก **Code → Codespaces → Create codespace on main**
ไฟล์ `.devcontainer/devcontainer.json` เตรียม Node.js 22, ติดตั้งแพ็กเกจด้วย `npm ci` และ forward พอร์ต 3000
เปิด Terminal ใน Codespace แล้วรัน:

```bash
npm start
```

เปิด `/api-docs` จากแท็บ Ports เพื่อใช้ Swagger UI และ **Try it out → Execute**
สเปก JSON ดาวน์โหลดได้ที่ `/api-docs.json`

## รันในเครื่อง

```bash
npm ci
npm start
```

ถ้าพอร์ต 3000 มีโปรแกรมอื่นใช้ ให้รัน `PORT=3002 npm start` และเปิด `http://localhost:3002/api-docs`

## Products endpoints

| Method | Path | หน้าที่ | สถานะสำเร็จ |
| --- | --- | --- | --- |
| GET | `/api/products` | รายการสินค้า; กรอง `q`, `category`; แบ่งหน้า `page`, `limit` | 200 |
| POST | `/api/products` | สร้างสินค้า | 201 |
| GET | `/api/products/{id}` | ดูสินค้าตาม ID | 200 |
| PUT | `/api/products/{id}` | แทนที่ข้อมูลสินค้า | 200 |
| PATCH | `/api/products/{id}` | แก้ไขบางฟิลด์ | 200 |
| DELETE | `/api/products/{id}` | ลบสินค้า | 204 |

ตัวอย่าง body สำหรับ POST และ PUT:

```json
{"name":"Desk lamp","price":799,"stock":4,"category":"electronics"}
```

PATCH ส่งเฉพาะฟิลด์ที่ต้องการ เช่น `{"price":699}`
`name` และ `price` จำเป็นสำหรับ POST/PUT; `stock` เริ่มต้นที่ 0; category เลือก electronics, books หรือ fashion
ข้อมูลไม่ถูกต้องตอบ 400 และสินค้าไม่มีตอบ 404

ข้อมูลเก็บในหน่วยความจำ เริ่มต้นด้วยสินค้า 2 รายการ และรีเซ็ตเมื่อเซิร์ฟเวอร์เริ่มใหม่

## ทดสอบ

```bash
npm test
npm run demo
# ถ้าใช้พอร์ตอื่น: BASE_URL=http://localhost:3002 npm run demo
```

`npm run demo` เรียก `curl` ทั้ง 6 endpoint ตามลำดับและพิมพ์ผล HTTP status
`npm test` ตรวจเส้นทางจริง, validation, search/pagination และ OpenAPI JSON
