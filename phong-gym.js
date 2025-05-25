// Function to show/hide screens
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Show selected screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Functions for Edit Member Screen delete confirmation
function showDeleteMemberConfirm() {
    document.getElementById('delete-member-confirm-box').style.display = 'block';
}

function hideDeleteMemberConfirm() {
    document.getElementById('delete-member-confirm-box').style.display = 'none';
}

// Function for Customer Management filter
function showCustomerFilter(filterType) {
    const customerCards = document.querySelectorAll('#customer-list-container .customer-card');
    const filterTabs = document.querySelectorAll('.filter-tab');

    // Update active tab styling
    filterTabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.filter-tab[onclick="showCustomerFilter('${filterType}')"]`).classList.add('active');


    customerCards.forEach(card => {
        card.style.display = 'flex'; // Show by default
        if (filterType === 'active' && !card.classList.contains('customer-active')) {
            card.style.display = 'none';
        } else if (filterType === 'expired' && !card.classList.contains('customer-expired')) {
            card.style.display = 'none';
        }
    });
}

// Add event listeners when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Event listener for image upload (simple placeholder)
    const uploadImageInput = document.getElementById('upload-image-input');
    if (uploadImageInput) {
        uploadImageInput.addEventListener('change', function() {
            const fileNameSpan = this.nextElementSibling; // The <span> after the button
            if (this.files.length > 0) {
                fileNameSpan.textContent = this.files[0].name;
            } else {
                fileNameSpan.textContent = 'chưa chọn tệp nào';
            }
        });
    }

    // Revenue Management Tabs functionality
    const revenueTabs = document.querySelectorAll('.revenue-tab');
    const revenueAmount = document.getElementById('revenue-amount');
    const packagesSold = document.getElementById('packages-sold');
    const revenueChartBars = document.querySelectorAll('.revenue-chart .bar');

    revenueTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            revenueTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Simulate data change for chart and summary
            let newRevenue = '0 vnđ';
            let newPackages = '0 gói';
            let newBarHeights = [];

            if (this.id === 'today-tab') {
                newRevenue = '5.000.000 vnđ';
                newPackages = '10 gói';
                newBarHeights = [40, 60, 30, 70, 50, 80, 45, 65, 35, 75, 55, 90]; // Example heights
            } else if (this.id === '7-days-tab') {
                newRevenue = '10.000.000 vnđ';
                newPackages = '20 gói';
                newBarHeights = [70, 80, 50, 90, 60, 75, 55, 85, 40, 60, 70, 80]; // Example heights
            } else if (this.id === 'month-tab') {
                newRevenue = '12.000.000 vnđ';
                newPackages = '24 gói';
                newBarHeights = [80, 90, 70, 85, 75, 95, 60, 70, 50, 80, 65, 90]; // Example heights
            }

            revenueAmount.textContent = newRevenue;
            packagesSold.textContent = newPackages;

            // Update chart bars
            revenueChartBars.forEach((bar, index) => {
                bar.style.height = (newBarHeights[index] || 0) + '%'; // Use new height or 0 if not defined
            });
        });
    });

    // Initial customer filter apply (show all by default)
    showCustomerFilter('all');
});