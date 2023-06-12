       // JavaScript code
        var itemList = [];

        function addItem() {
            var name = document.getElementById("item-name").value;
            var price = document.getElementById("item-price").value;
            var quantity = document.getElementById("item-quantity").value;

            var item = {
                name: name,
                price: price,
                quantity: quantity
            };

            itemList.push(item);
            displayItems();
            calculateTotal();

            // Reset input fields
            document.getElementById("item-name").value = "";
            document.getElementById("item-price").value = "";
            document.getElementById("item-quantity").value = "";
        }

        function displayItems() {
            var itemListElement = document.getElementById("item-list");
            itemListElement.innerHTML = "";

            for (var i = 0; i < itemList.length; i++) {
                var item = itemList[i];
                var listItem = document.createElement("li");
                listItem.className = "item";
                listItem.innerHTML = '<span class="name">' + item.name + '</span>' +
                    '<span class="price">Harga: ' + item.price + '</span>' +
                    '<span class="quantity">Jumlah: ' + item.quantity + '</span>' +
                    '<span class="total">Total: ' + (item.price * item.quantity) + '</span>';
                itemListElement.appendChild(listItem);
            }
        }

        function calculateTotal() {
            var total = 0;

            for (var i = 0; i < itemList.length; i++) {
                var item = itemList[i];
                total += item.price * item.quantity;
            }

            document.getElementById("total").textContent = "Total Transaksi: " + total;
        }
        function finishTransaction() {
            // Lakukan tindakan yang diperlukan ketika transaksi selesai
            alert("Transaksi selesai. Bersiap untuk menyimpan ke database.");
        }

        function saveToDatabase() {
  // Mengambil data barang dari itemList
  var data = JSON.stringify(itemList);

  fetch('/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
    .then(response => response.json())
    .then(result => {
      // Aksi yang ingin dilakukan setelah data berhasil disimpan ke database
      console.log(result);
      alert('Data barang berhasil disimpan ke database.');
    })
    .catch(error => {
      // Aksi yang ingin dilakukan jika terjadi error
      console.error('Error:', error);
    });
}
