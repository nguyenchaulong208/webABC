const list = [{
    "id": 1,
    "title": "CHERRY MỸ MORADA - HỘP 1KG",
    "price": "390000",
    "imgPath":"/images/cherry.jpg"
},
{
    "id": 2,
    "title": "TÁO TÚI CORE NAM PHI NHẬP KHẨU - TÚI 1KG",
    "price": "155000",
    "imgPath":"/images/tao_core.jpg"
},
{
    "id": 3,
    "title": "NHO NGÓN HELLO ÚC - 1KG",
    "price": "135000",
    "imgPath":"/images/hello_uc.jpg"
},
{
    "id": 4,
    "title": "NHO MẪU ĐƠN SHINE MUSCAT - THÙNG 3 CHÙM - 1.5KG",
    "price": "300000",
    "imgPath":"/images/shine_muscat.jpg"
}
,
{
    "id": 5,
    "title": "KIWI VÀNG ZESPRI NEWZELAND- HỘP 1KG",
    "price":  "160000",
    "imgPath":"/images/zespri_newzeland.jpg"
}
,
{
    "id": 6,
    "title": "NHO MẪU ĐƠN RỔ HỒNG",
    "price":  "150000",
    "imgPath":"/images/maudon_ro.jpg"
}
,
{
    "id": 7,
    "title": "NA THÁI - SET 2KG",
    "price":  "140000",
    "imgPath":"/images/na_thai.jpg"
}
,
{
    "id": 8,
    "title": "YẾN SÀO BÌNH THUẬN - NHÀ NUÔI - 100GRAM",
    "price":  "3000000",
    "imgPath":"/images/nest.jpg"
},
{
    "id": 9,
    "title": "NHO ĐỎ KHÔNG HẠT CRIMSON ÚC - 1KG",
    "price":  "150000",
    "imgPath":"/images/nho_do_uc.jpg"
}
]
// chi so trang bat dau tu 1
function getAll() {
    return list;
  }

  function getOne(id) {
    return list.filter((item) => item.id == id);
  }
  
