function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username && password) {
    showScreen('home-screen');
  } else {
    alert('Vui lòng nhập đầy đủ thông tin!');
  }
}

function goBack() {
  showScreen('home-screen');
}

// Fake data for account/product/promotion
document.addEventListener('DOMContentLoaded', () => {
  const accList = document.getElementById('account-list');
  const prodList = document.getElementById('product-list');
  const promList = document.getElementById('promotion-list');

  for (let i = 1; i <= 10; i++) {
    accList.innerHTML += `<li>Nhân viên ${i} - Vai trò: Quản lý</li>`;
    prodList.innerHTML += `<li>Sản phẩm ${i} - Giá: 100.000đ</li>`;
  }

  for (let i = 1; i <= 5; i++) {
    promList.innerHTML += `<li>KM ${i} - Giảm 20% (01/06 - 15/06)</li>`;
  }
});
function addAccount() {
  const accList = document.getElementById('account-list');
  const newAcc = document.getElementById('new-account').value;
  if (newAcc) {
    accList.innerHTML += `<li>${newAcc} - Vai trò: Quản lý</li>`;
    document.getElementById('new-account').value = '';
  } else {
    alert('Vui lòng nhập tên nhân viên!');
  }
}
function addProduct() {
  const prodList = document.getElementById('product-list');
  const newProd = document.getElementById('new-product').value;
  if (newProd) {
    prodList.innerHTML += `<li>${newProd} - Giá: 100.000đ</li>`;
    document.getElementById('new-product').value = '';
  } else {
    alert('Vui lòng nhập tên sản phẩm!');
  }
}
function addPromotion() {
  const promList = document.getElementById('promotion-list');
  const newProm = document.getElementById('new-promotion').value;
  if (newProm) {
    promList.innerHTML += `<li>${newProm} - Giảm 20% (01/06 - 15/06)</li>`;
    document.getElementById('new-promotion').value = '';
  } else {
    alert('Vui lòng nhập tên khuyến mãi!');
  }
}
function deleteAccount() {
  const accList = document.getElementById('account-list');
  const items = accList.getElementsByTagName('li');
  if (items.length > 0) {
    accList.removeChild(items[items.length - 1]);
  } else {
    alert('Không còn nhân viên nào để xóa!');
  }
}
function deleteProduct() {
  const prodList = document.getElementById('product-list');
  const items = prodList.getElementsByTagName('li');
  if (items.length > 0) {
    prodList.removeChild(items[items.length - 1]);
  } else {
    alert('Không còn sản phẩm nào để xóa!');
  }
}
function deletePromotion() {
  const promList = document.getElementById('promotion-list');
  const items = promList.getElementsByTagName('li');
  if (items.length > 0) {
    promList.removeChild(items[items.length - 1]);
  } else {
    alert('Không còn khuyến mãi nào để xóa!');
  }
}
function searchAccount() {
  const input = document.getElementById('search-account').value.toLowerCase();
  const accList = document.getElementById('account-list');
  const items = accList.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.textContent.toLowerCase().includes(input)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  }
}
function searchProduct() {
  const input = document.getElementById('search-product').value.toLowerCase();
  const prodList = document.getElementById('product-list');
  const items = prodList.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.textContent.toLowerCase().includes(input)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  }
}
function searchPromotion() {
  const input = document.getElementById('search-promotion').value.toLowerCase();
  const promList = document.getElementById('promotion-list');
  const items = promList.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.textContent.toLowerCase().includes(input)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  }
}
function showAccountDetails() {
  const accList = document.getElementById('account-list');
  const items = accList.getElementsByTagName('li');
  if (items.length > 0) {
    alert(`Chi tiết nhân viên: ${items[0].textContent}`);
  } else {
    alert('Không có nhân viên nào để xem chi tiết!');
  }
}
function showProductDetails() {
  const prodList = document.getElementById('product-list');
  const items = prodList.getElementsByTagName('li');
  if (items.length > 0) {
    alert(`Chi tiết sản phẩm: ${items[0].textContent}`);
  } else {
    alert('Không có sản phẩm nào để xem chi tiết!');
  }
}
function showPromotionDetails() {
  const promList = document.getElementById('promotion-list');
  const items = promList.getElementsByTagName('li');
  if (items.length > 0) {
    alert(`Chi tiết khuyến mãi: ${items[0].textContent}`);
  } else {
    alert('Không có khuyến mãi nào để xem chi tiết!');
  }
}