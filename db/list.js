const list = [{
    "id": 1,
    "title": "CHERRY MỸ MORADA - HỘP 1KG",
    "price": 390.000,
    "imgPath":"/images/cherry.jpg"
},
{
    "id": 2,
    "title": "TÁO TÚI CORE NAM PHI NHẬP KHẨU - TÚI 1KG",
    "price": 155.000,
    "imgPath":"/images/tao_core.jpg"
},
{
    "id": 3,
    "title": "NHO NGÓN HELLO ÚC - 1KG",
    "price": 135.000,
    "imgPath":"/images/hello_uc.jpg"
},
{
    "id": 4,
    "title": "NHO MẪU ĐƠN SHINE MUSCAT THÙNG HỒNG - 1 THÙNG",
    "price": 300.000,
    "imgPath":"/images/shine_muscat.jpg"
}
,
{
    "id": 5,
    "title": "KIWI VÀNG ZESPRI NEWZELAND- HỘP 1KG",
    "price":  155.000,
    "imgPath":"/images/zespri_newzeland.jpg"
}
,
{
    "id": 6,
    "title": "NHO MẪU ĐƠN RỔ HỒNG",
    "price":  150.000,
    "imgPath":"/images/maudon_ro.jpg"
}
,
{
    "id": 7,
    "title": "DƯA QUEEN",
    "price":  115.000,
    "imgPath":"/images/queen.jpg"
}
,
{
    "id": 8,
    "title": "YẾN SÀO NGUYÊN TỔ - BÌNH THUẬN - NHÀ NUÔI - 100GRAM",
    "price":  3.400.000,
    "imgPath":"/images/nest.jpg"
}
]
// chi so trang bat dau tu 1
function getAll() {
    return list;
  }
  
  function getOne(id) {
    return list.filter((item) => item.id == id);
  }
  
