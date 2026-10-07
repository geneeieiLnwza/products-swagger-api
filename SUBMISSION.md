# งานข้อ 2: Products CRUD + Swagger UI

**ใส่ลิงก์ตรงนี้:** https://github.com/Akirakato112233/products-swagger-api

Repository เป็น **Public** และมี Node.js + Express Products CRUD API พร้อม OpenAPI 3.0.3 และ Swagger UI ที่ `/api-docs`

หลักฐานภาพทดสอบด้านล่างถ่ายจาก Swagger UI ของรีโปนี้ในเครื่องที่ `http://localhost:3002`
[ดูผล curl ทั้ง 6 endpoint](evidence/local-curl-output.txt)

## หน้าแรก Swagger UI

![หน้าแรก Swagger UI แสดง Products CRUD API และ 6 operations](evidence/00-swagger-ui-local.jpg)

## GET /api/products — 200 OK

![GET รายการสินค้า แสดง response 200](evidence/01-get-products-local.jpg)

## POST /api/products — 201 Created

![POST สร้างสินค้าใหม่ แสดง response 201 และ id](evidence/02-post-products-local.jpg)

## GET /api/products/{id} — 200 OK

![GET สินค้าตาม id แสดง response 200](evidence/03-get-product-by-id-local.jpg)

## PUT /api/products/{id} — 200 OK

![PUT แทนที่ข้อมูลสินค้า แสดง response 200](evidence/04-put-product-local.jpg)

## PATCH /api/products/{id} — 200 OK

![PATCH แก้ไขราคา แสดง response 200](evidence/05-patch-product-local.jpg)

## DELETE /api/products/{id} — 204 No Content

![DELETE ลบสินค้า แสดง response 204](evidence/06-delete-product-local.jpg)
