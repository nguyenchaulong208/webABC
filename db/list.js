const list = [{
    "id": 1,
    "title": "Cherry Mỹ - hộp 500gram",
    "price": 1.99,
    "imgPath":"/images/cherry.jpg"
},
{
    "id": 2,
    "title": "Táo túi core Nam Phi - túi 3kg",
    "price": 1.99,
    "imgPath":"/images/tao_core.jpg"
},
{
    "id": 3,
    "title": "Quýt Úc - túi 800gram",
    "price": 1.99,
    "imgPath":"/images/quyt.jpg"
},
{
    "id": 4,
    "title": "Táo mật EverCrisp - túi 1kg",
    "price": 1.99,
    "imgPath":"/images/evercrisp.jpg"
}
]
// chi so trang bat dau tu 1
function getAll() {
    return list;
  }
  
  function getOne(id) {
    return list.filter((item) => item.id == id);
  }
  