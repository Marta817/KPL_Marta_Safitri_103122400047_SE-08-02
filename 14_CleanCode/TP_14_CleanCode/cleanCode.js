// 1. Fungsi khusus buat narik data dari API
// @ts-ignore
function fetchOrderData(orderId, token) {
    return fetch(`https://example.com/api/order/${orderId}`, {
        headers: { 'Authorization': token }
    })
    .then(response => {
        if (!response.ok) throw new Error('Failed to fetch order details');
        return response.json();
    });
}

// 2. Fungsi khusus untuk membuat dan memasukkan konten data ke dalam modal
// @ts-ignore
function renderOrderContent(detailsDiv, order) {
    detailsDiv.innerHTML = '';

    const header = document.createElement('h3');
    header.textContent = `Order ID: ${order.id}`;
    detailsDiv.appendChild(header);

    const status = document.createElement('p');
    status.textContent = `Status: ${order.status}`;
    detailsDiv.appendChild(status);
}

// 3. Fungsi khusus buat ngatur logika tombol close dan confirm
// @ts-ignore
function setupModalActions(modal, order, token) {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    const confirmBtn = modal.querySelector('#confirmOrderBtn');
    if (order.status === 'Delivered') {
        confirmBtn.style.display = 'none';
    } else {
        confirmBtn.addEventListener('click', () => {
            // @ts-ignore
            confirmOrder(order.id, token);
        });
    }
}

// 4. Fungsi utama buat ngontrol alur jalannya program
// @ts-ignore
function displayOrderDetails(orderId, token) {
    fetchOrderData(orderId, token)
        .then(order => {
            const modal = document.getElementById('orderModal');
            // @ts-ignore
            const detailsDiv = modal.querySelector('#orderDetails');

            renderOrderContent(detailsDiv, order);
            // @ts-ignore
            modal.style.display = 'block';
            setupModalActions(modal, order, token);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}