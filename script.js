// Sample Data
const restaurants = [
    { id: 1, name: 'Tarek Restaurant', status: 'active', description: 'Premium dining experience with authentic flavors', phone: '+1 234-567-8901', hours: '9:00 AM - 11:00 PM', branches: 5, address: '123 Main St, Downtown', owners: 2, staff: 12, date: '2024-01-15' },
    { id: 2, name: 'Sa3eed QA', status: 'active', description: 'Quality assured delicious meals', phone: '+1 234-567-8902', hours: '10:00 AM - 10:00 PM', branches: 3, address: '456 North Ave, Uptown', owners: 1, staff: 8, date: '2024-02-20' },
    { id: 3, name: 'Imad Resto', status: 'active', description: 'Fine dining with exceptional service', phone: '+1 234-567-8903', hours: '8:00 AM - 11:30 PM', branches: 7, address: '789 Mall Blvd, Shopping Center', owners: 3, staff: 15, date: '2024-03-10' },
    { id: 4, name: 'Shrimp Nation', status: 'active', description: 'Fresh seafood specialists', phone: '+1 234-567-8904', hours: '11:00 AM - 9:00 PM', branches: 2, address: '321 Beach Rd, Seaside', owners: 1, staff: 6, date: '2024-01-25' },
    { id: 5, name: 'Wingman Jo', status: 'active', description: 'Best wings in town', phone: '+1 234-567-8905', hours: '12:00 PM - 11:00 PM', branches: 4, address: '654 City Center Dr', owners: 2, staff: 10, date: '2024-02-05' },
    { id: 6, name: '99Grill', status: 'active', description: 'Grilled perfection every time', phone: '+1 234-567-8906', hours: '9:00 AM - 10:00 PM', branches: 3, address: '987 North Side Ave', owners: 1, staff: 7, date: '2024-03-15' },
    { id: 7, name: 'Pasta Palace', status: 'inactive', description: 'Italian cuisine at its finest', phone: '+1 234-567-8907', hours: '9:00 AM - 10:00 PM', branches: 1, address: '147 East End St', owners: 2, staff: 5, date: '2024-01-30' },
    { id: 8, name: 'Burger Hub', status: 'active', description: 'Gourmet burgers and more', phone: '+1 234-567-8908', hours: '10:00 AM - 11:00 PM', branches: 6, address: '258 West Side Blvd', owners: 1, staff: 9, date: '2024-02-18' },
    { id: 9, name: 'Sushi World', status: 'inactive', description: 'Authentic Japanese sushi', phone: '+1 234-567-8909', hours: '9:00 AM - 10:00 PM', branches: 2, address: '369 Downtown Plaza', owners: 2, staff: 4, date: '2024-03-22' },
    { id: 10, name: 'Vegan Delight', status: 'active', description: 'Healthy plant-based meals', phone: '+1 234-567-8910', hours: '8:00 AM - 9:00 PM', branches: 3, address: '741 Uptown Circle', owners: 1, staff: 11, date: '2024-01-12' },
    { id: 11, name: 'Pizza Planet', status: 'active', description: 'Out of this world pizza', phone: '+1 234-567-8911', hours: '11:00 AM - 12:00 AM', branches: 8, address: '852 Mall Road', owners: 2, staff: 13, date: '2024-02-28' },
    { id: 12, name: 'Curry Corner', status: 'active', description: 'Spicy and flavorful curries', phone: '+1 234-567-8912', hours: '10:00 AM - 10:30 PM', branches: 4, address: '963 City Center Way', owners: 1, staff: 14, date: '2024-03-05' },
    { id: 13, name: 'Taco Town', status: 'inactive', description: 'Mexican street food paradise', phone: '+1 234-567-8913', hours: '9:00 AM - 10:00 PM', branches: 1, address: '159 Beach Ave', owners: 1, staff: 3, date: '2024-01-20' },
    { id: 14, name: 'BBQ Barn', status: 'active', description: 'Smoky BBQ perfection', phone: '+1 234-567-8914', hours: '12:00 PM - 10:00 PM', branches: 5, address: '357 North Side Dr', owners: 2, staff: 8, date: '2024-02-14' },
    { id: 15, name: 'Salad Stop', status: 'active', description: 'Fresh and healthy salads', phone: '+1 234-567-8915', hours: '8:00 AM - 8:00 PM', branches: 3, address: '753 East End Rd', owners: 1, staff: 6, date: '2024-03-18' },
    { id: 16, name: 'Dumpling Den', status: 'active', description: 'Handmade dumplings daily', phone: '+1 234-567-8916', hours: '11:00 AM - 9:30 PM', branches: 2, address: '951 West Side St', owners: 2, staff: 7, date: '2024-01-28' },
    { id: 17, name: 'Steakhouse 101', status: 'active', description: 'Premium cuts and fine wines', phone: '+1 234-567-8917', hours: '5:00 PM - 11:00 PM', branches: 6, address: '159 Downtown Ave', owners: 3, staff: 12, date: '2024-02-22' },
    { id: 18, name: 'Seafood Shack', status: 'inactive', description: 'Ocean fresh seafood', phone: '+1 234-567-8918', hours: '9:00 AM - 10:00 PM', branches: 1, address: '357 Uptown Blvd', owners: 1, staff: 5, date: '2024-03-08' }
];

const systemRoles = [
    { id: 1, name: 'Ahmed Hassan', email: 'ahmed@ordertech.com', role: 'System Owner', joinedDate: 'Jan 2024' },
    { id: 2, name: 'Sara Mohamed', email: 'sara@ordertech.com', role: 'System Admin', joinedDate: 'Feb 2024' },
    { id: 3, name: 'Omar Ali', email: 'omar@ordertech.com', role: 'System Admin', joinedDate: 'Mar 2024' },
    { id: 4, name: 'Fatima Ibrahim', email: 'fatima@ordertech.com', role: 'System Owner', joinedDate: 'Jan 2024' },
    { id: 5, name: 'Khaled Mahmoud', email: 'khaled@ordertech.com', role: 'System Admin', joinedDate: 'Feb 2024' },
    { id: 6, name: 'Nour Youssef', email: 'nour@ordertech.com', role: 'System Owner', joinedDate: 'Mar 2024' },
    { id: 7, name: 'Amira Kamal', email: 'amira@ordertech.com', role: 'System Admin', joinedDate: 'Jan 2024' },
    { id: 8, name: 'Hassan Saleh', email: 'hassan@ordertech.com', role: 'System Admin', joinedDate: 'Feb 2024' },
    { id: 9, name: 'Laila Fawzy', email: 'laila@ordertech.com', role: 'System Owner', joinedDate: 'Mar 2024' },
    { id: 10, name: 'Youssef Ahmed', email: 'youssef@ordertech.com', role: 'System Admin', joinedDate: 'Jan 2024' },
    { id: 11, name: 'Mona Adel', email: 'mona@ordertech.com', role: 'System Owner', joinedDate: 'Feb 2024' },
    { id: 12, name: 'Tarek Nabil', email: 'tarek@ordertech.com', role: 'System Admin', joinedDate: 'Mar 2024' },
    { id: 13, name: 'Dina Gamal', email: 'dina@ordertech.com', role: 'System Admin', joinedDate: 'Jan 2024' },
    { id: 14, name: 'Mahmoud Samir', email: 'mahmoud@ordertech.com', role: 'System Owner', joinedDate: 'Feb 2024' },
    { id: 15, name: 'Salma Hossam', email: 'salma@ordertech.com', role: 'System Admin', joinedDate: 'Mar 2024' }
];

const restaurantMembers = [
    { id: 1, name: 'John Smith', email: 'john@restaurant.com', role: 'Owner', joinedDate: 'Jan 2024' },
    { id: 2, name: 'Emily Johnson', email: 'emily@restaurant.com', role: 'Owner', joinedDate: 'Feb 2024' },
    { id: 3, name: 'Michael Brown', email: 'michael@restaurant.com', role: 'Recipient', branch: 'Downtown Branch', joinedDate: 'Mar 2024' },
    { id: 4, name: 'David Lee', email: 'david@restaurant.com', role: 'Recipient', branch: 'Uptown Branch', joinedDate: 'Jan 2024' },
    { id: 5, name: 'Lisa Wang', email: 'lisa@restaurant.com', role: 'Viewer', branch: 'Downtown Branch', joinedDate: 'Feb 2024' },
    { id: 6, name: 'Tom Wilson', email: 'tom@restaurant.com', role: 'Recipient', branch: 'Mall Branch', joinedDate: 'Mar 2024' },
    { id: 7, name: 'Anna Taylor', email: 'anna@restaurant.com', role: 'Viewer', branch: 'Uptown Branch', joinedDate: 'Jan 2024' },
    { id: 8, name: 'Robert Chen', email: 'robert@restaurant.com', role: 'Owner', joinedDate: 'Feb 2024' },
    { id: 9, name: 'Sarah Miller', email: 'sarah@restaurant.com', role: 'Recipient', branch: 'Downtown Branch', joinedDate: 'Mar 2024' },
    { id: 10, name: 'James Wilson', email: 'james@restaurant.com', role: 'Viewer', branch: 'Mall Branch', joinedDate: 'Jan 2024' },
    { id: 11, name: 'Maria Garcia', email: 'maria@restaurant.com', role: 'Recipient', branch: 'Uptown Branch', joinedDate: 'Feb 2024' },
    { id: 12, name: 'Daniel Kim', email: 'daniel@restaurant.com', role: 'Viewer', branch: 'Downtown Branch', joinedDate: 'Mar 2024' }
];

let currentView = 'grid';
let currentRestaurant = null;
let userToDelete = null;
let currentPage = 1;
let itemsPerPage = 10;
let filteredRestaurants = [...restaurants];
let rolesView = 'grid';
let rolesCurrentPage = 1;
let rolesItemsPerPage = 10;
let filteredSystemRoles = [...systemRoles];

// Tab-based member management
let tabStates = {
    owners: {
        view: 'grid',
        currentPage: 1,
        itemsPerPage: 10,
        filteredMembers: [],
        searchTerm: ''
    },
    recipients: {
        view: 'grid',
        currentPage: 1,
        itemsPerPage: 10,
        filteredMembers: [],
        searchTerm: '',
        branchFilter: 'all'
    },
    viewers: {
        view: 'grid',
        currentPage: 1,
        itemsPerPage: 10,
        filteredMembers: [],
        searchTerm: '',
        branchFilter: 'all'
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    filteredRestaurants = [...restaurants];
    filteredSystemRoles = [...systemRoles];
    updateStats();
    renderRestaurants();
    renderSystemRoles();
});

// Update statistics
function updateStats() {
    const totalRestaurants = restaurants.length;
    const activeRestaurants = restaurants.filter(r => r.status === 'active').length;
    const totalBranches = restaurants.reduce((sum, r) => sum + r.branches, 0);
    
    const totalEl = document.getElementById('totalRestaurants');
    const activeEl = document.getElementById('activeRestaurants');
    const branchesEl = document.getElementById('totalBranches');
    
    if (totalEl) totalEl.textContent = totalRestaurants;
    if (activeEl) activeEl.textContent = activeRestaurants;
    if (branchesEl) branchesEl.textContent = totalBranches;
}

// Toggle sidebar on mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    // On desktop, toggle collapsed state (icon-only view)
    if (window.innerWidth > 768) {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    } else {
        // On mobile, toggle active state (show/hide sidebar)
        sidebar.classList.toggle('active');
    }
}

// Add Restaurant Modal Functions
function openAddRestaurantModal() {
    const modal = document.getElementById('addRestaurantModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAddRestaurantModal() {
    const modal = document.getElementById('addRestaurantModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('addRestaurantForm').reset();
}

function handleAddRestaurant(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('restaurantName').value,
        phone: document.getElementById('restaurantPhone').value,
        email: document.getElementById('restaurantEmail').value,
        currency: document.getElementById('restaurantCurrency').value,
        openingTime: document.getElementById('openingTime').value,
        closingTime: document.getElementById('closingTime').value
    };
    
    // Format hours
    const hours = formData.openingTime && formData.closingTime 
        ? `${formatTime(formData.openingTime)} - ${formatTime(formData.closingTime)}`
        : 'Not set';
    
    // Create new restaurant object
    const newRestaurant = {
        id: restaurants.length + 1,
        name: formData.name,
        status: 'active',
        description: 'New restaurant location',
        phone: formData.phone,
        hours: hours,
        branches: 1,
        address: 'Address not set',
        owners: 1,
        staff: 0,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    };
    
    // Add to restaurants array
    restaurants.unshift(newRestaurant);
    filteredRestaurants = [...restaurants];
    
    // Update UI
    updateStats();
    renderRestaurants();
    closeAddRestaurantModal();
    
    // Show success message (optional)
    alert('Restaurant added successfully!');
}

function formatTime(time24) {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
}

// Restaurant Details Modal Functions
let currentRestaurantId = null;

function openRestaurantDetails(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;
    
    currentRestaurantId = restaurantId;
    
    // Populate modal with restaurant data
    document.getElementById('detailsName').textContent = restaurant.name;
    document.getElementById('detailsStatus').textContent = restaurant.status === 'active' ? 'Active' : 'Inactive';
    document.getElementById('detailsStatus').className = `status-badge ${restaurant.status}`;
    document.getElementById('detailsDescription').textContent = restaurant.description;
    document.getElementById('detailsPhone').textContent = restaurant.phone;
    document.getElementById('detailsEmail').textContent = restaurant.email || 'Not provided';
    document.getElementById('detailsHours').textContent = restaurant.hours;
    document.getElementById('detailsBranches').textContent = restaurant.branches;
    
    // Set stats (mock data for now)
    document.getElementById('detailsCustomers').textContent = Math.floor(Math.random() * 50) + 1;
    document.getElementById('detailsMenuItems').textContent = Math.floor(Math.random() * 100);
    document.getElementById('detailsOrders').textContent = Math.floor(Math.random() * 500);
    document.getElementById('detailsCalls').textContent = Math.floor(Math.random() * 50);
    document.getElementById('detailsCreated').textContent = restaurant.date;
    
    // Show modal
    const modal = document.getElementById('restaurantDetailsModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRestaurantDetails() {
    const modal = document.getElementById('restaurantDetailsModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentRestaurantId = null;
}

function editRestaurant() {
    alert('Edit functionality will be implemented');
    // You can add edit functionality here
}

function deleteRestaurant() {
    if (!currentRestaurantId) return;
    
    const restaurant = restaurants.find(r => r.id === currentRestaurantId);
    if (!restaurant) return;
    
    // Show warning modal
    document.getElementById('deleteRestaurantName').textContent = restaurant.name;
    const modal = document.getElementById('deleteWarningModal');
    modal.classList.add('active');
}

function closeDeleteWarning() {
    const modal = document.getElementById('deleteWarningModal');
    modal.classList.remove('active');
}

function confirmDeleteRestaurant() {
    if (!currentRestaurantId) return;
    
    const index = restaurants.findIndex(r => r.id === currentRestaurantId);
    if (index !== -1) {
        restaurants.splice(index, 1);
        filteredRestaurants = [...restaurants];
        updateStats();
        renderRestaurants();
        closeDeleteWarning();
        closeRestaurantDetails();
        
        // Show success message
        showSuccessMessage('Restaurant deleted successfully!');
    }
}

function showSuccessMessage(message) {
    // Simple success notification (you can enhance this later)
    const notification = document.createElement('div');
    notification.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #10b981; color: white; padding: 16px 24px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10001; animation: slideIn 0.3s ease;';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Handle navigation clicks
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all items
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Get page name
        const pageName = this.getAttribute('data-page');
        
        // Show appropriate page
        if (pageName === 'members') {
            showPage('restaurantsPage');
        }
    });
});

// Handle sign out
function handleSignOut(e) {
    e.preventDefault();
    if (confirm('Are you sure you want to sign out?')) {
        console.log('Signing out...');
        alert('Sign out functionality would be implemented here');
    }
}

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Render Restaurants with Pagination
function renderRestaurants() {
    const totalItems = filteredRestaurants.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // Make sure current page is valid
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }
    if (currentPage < 1) {
        currentPage = 1;
    }
    
    // Calculate start and end indices
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    
    // Get items for current page
    const pageItems = filteredRestaurants.slice(startIndex, endIndex);
    
    // Render items
    const grid = document.getElementById('restaurantsGrid');
    if (pageItems.length === 0) {
        grid.innerHTML = '<div style="text-align: center; padding: 60px 20px; color: #6b7280; grid-column: 1/-1;"><i class="fas fa-store" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3; display: block;"></i><p style="font-size: 16px;">No restaurants found</p></div>';
    } else {
        grid.innerHTML = pageItems.map(restaurant => `
            <div class="restaurant-card ${restaurant.status}" onclick="openRestaurantMembers(${restaurant.id}, '${restaurant.name}')">
                 <div class="restaurant-card-header">
                    <div class="restaurant-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div class="restaurant-card-title">
                        <h3>${restaurant.name}</h3>
                        <p class="restaurant-description">${restaurant.description}</p>
                    </div>
                    <span class="status-badge ${restaurant.status}">
                        ${restaurant.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                </div>
                <div class="restaurant-info">
                    <div class="info-item">
                        <i class="fas fa-phone"></i>
                        <span>${restaurant.phone}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <span>${restaurant.hours}</span>
                    </div>
                </div>
                <div class="restaurant-stats">
                    <div class="stat-item">
                        <div class="stat-icon">
                            <i class="fas fa-store"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-value">${restaurant.branches}</div>
                            <div class="stat-label">Branches</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update pagination info
    updatePaginationInfo(startIndex + 1, endIndex, totalItems);
    
    // Render pagination controls
    renderPagination(totalPages);
}

// Update Pagination Info
function updatePaginationInfo(start, end, total) {
    document.getElementById('itemsStart').textContent = total > 0 ? start : 0;
    document.getElementById('itemsEnd').textContent = end;
    document.getElementById('itemsTotal').textContent = total;
}

// Render Pagination Controls
function renderPagination(totalPages) {
    const controls = document.getElementById('paginationControls');
    
    if (totalPages <= 1) {
        controls.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Previous button
    html += `<button class="pagination-btn" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i>
             </button>`;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // First page
    if (startPage > 1) {
        html += `<button class="pagination-btn" onclick="goToPage(1)">1</button>`;
        if (startPage > 2) {
            html += '<span class="pagination-ellipsis">...</span>';
        }
    }
    
    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
        html += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
    }
    
    // Last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += '<span class="pagination-ellipsis">...</span>';
        }
        html += `<button class="pagination-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    html += `<button class="pagination-btn" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
                <i class="fas fa-chevron-right"></i>
             </button>`;
    
    controls.innerHTML = html;
}

// Go to specific page
function goToPage(page) {
    const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderRestaurants();
    
    // Scroll to top of grid
    document.getElementById('restaurantsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Filter Restaurants
function filterRestaurants() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filterValue = document.getElementById('filterSelect').value;
    
    filteredRestaurants = restaurants.filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm) || 
                            restaurant.address.toLowerCase().includes(searchTerm);
        const matchesFilter = filterValue === 'all' || restaurant.status === filterValue;
        
        return matchesSearch && matchesFilter;
    });
    
    currentPage = 1; // Reset to first page when filtering
    renderRestaurants();
}

// Sort Restaurants
function sortRestaurants() {
    const sortValue = document.getElementById('sortSelect').value;
    
    switch(sortValue) {
        case 'name':
            filteredRestaurants.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'date':
            filteredRestaurants.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'members':
            filteredRestaurants.sort((a, b) => b.members - a.members);
            break;
    }
    
    currentPage = 1; // Reset to first page when sorting
    renderRestaurants();
}

// Change View
function changeView(view) {
    currentView = view;
    const grid = document.getElementById('restaurantsGrid');
    const buttons = document.querySelectorAll('.view-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-view="${view}"]`).classList.add('active');
    
    if (view === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
}

// System Roles Page
function openSystemRolesPage() {
    filteredSystemRoles = [...systemRoles];
    rolesCurrentPage = 1;
    document.getElementById('rolesSearchInput').value = '';
    document.getElementById('rolesFilterSelect').value = 'all';
    document.getElementById('rolesSortSelect').value = 'name';
    renderSystemRoles();
    showPage('systemRolesPage');
}

function closeSystemRolesPage() {
    showPage('restaurantsPage');
}

function renderSystemRoles() {
    const totalItems = filteredSystemRoles.length;
    const totalPages = Math.ceil(totalItems / rolesItemsPerPage);
    
    // Make sure current page is valid
    if (rolesCurrentPage > totalPages && totalPages > 0) {
        rolesCurrentPage = totalPages;
    }
    if (rolesCurrentPage < 1) {
        rolesCurrentPage = 1;
    }
    
    // Calculate start and end indices
    const startIndex = (rolesCurrentPage - 1) * rolesItemsPerPage;
    const endIndex = Math.min(startIndex + rolesItemsPerPage, totalItems);
    
    // Get items for current page
    const pageItems = filteredSystemRoles.slice(startIndex, endIndex);
    
    // Render items
    const grid = document.getElementById('systemRolesGrid');
    if (pageItems.length === 0) {
        grid.innerHTML = '<div style="text-align: center; padding: 60px 20px; color: #6b7280; grid-column: 1/-1;"><i class="fas fa-user-shield" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3; display: block;"></i><p style="font-size: 16px;">No users found</p></div>';
    } else {
        grid.innerHTML = pageItems.map(user => {
            const roleClass = user.role === 'System Admin' ? 'admin' : 'owner';
            return `
                <div class="role-card ${roleClass}">
                    <div class="role-card-header">
                        <div class="role-user-info">
                            <div class="role-avatar">${user.name.split(' ').map(n => n[0]).join('')}</div>
                            <div class="role-details">
                                <h4>${user.name}</h4>
                                <span class="role-badge ${roleClass}">
                                    ${user.role}
                                </span>
                            </div>
                        </div>
                        <div class="role-actions">
                            <button class="icon-btn edit" onclick="editUser(${user.id}); event.stopPropagation();" title="Edit">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="icon-btn delete" onclick="openDeleteModal(${user.id}, '${user.name}'); event.stopPropagation();" title="Delete">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div class="role-card-body">
                        <p><i class="fas fa-envelope"></i> ${user.email}</p>
                        <p><i class="fas fa-calendar"></i> Joined ${user.joinedDate}</p>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Update pagination info
    updateRolesPaginationInfo(startIndex + 1, endIndex, totalItems);
    
    // Render pagination controls
    renderRolesPagination(totalPages);
}

// Update Roles Pagination Info
function updateRolesPaginationInfo(start, end, total) {
    document.getElementById('rolesItemsStart').textContent = total > 0 ? start : 0;
    document.getElementById('rolesItemsEnd').textContent = end;
    document.getElementById('rolesItemsTotal').textContent = total;
}

// Render Roles Pagination Controls
function renderRolesPagination(totalPages) {
    const controls = document.getElementById('rolesPaginationControls');
    
    if (totalPages <= 1) {
        controls.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Previous button
    html += `<button class="pagination-btn" onclick="goToRolesPage(${rolesCurrentPage - 1})" ${rolesCurrentPage === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i>
             </button>`;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, rolesCurrentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // First page
    if (startPage > 1) {
        html += `<button class="pagination-btn" onclick="goToRolesPage(1)">1</button>`;
        if (startPage > 2) {
            html += '<span class="pagination-ellipsis">...</span>';
        }
    }
    
    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
        html += `<button class="pagination-btn ${i === rolesCurrentPage ? 'active' : ''}" onclick="goToRolesPage(${i})">${i}</button>`;
    }
    
    // Last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += '<span class="pagination-ellipsis">...</span>';
        }
        html += `<button class="pagination-btn" onclick="goToRolesPage(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    html += `<button class="pagination-btn" onclick="goToRolesPage(${rolesCurrentPage + 1})" ${rolesCurrentPage === totalPages ? 'disabled' : ''}>
                <i class="fas fa-chevron-right"></i>
             </button>`;
    
    controls.innerHTML = html;
}

// Go to specific roles page
function goToRolesPage(page) {
    const totalPages = Math.ceil(filteredSystemRoles.length / rolesItemsPerPage);
    if (page < 1 || page > totalPages) return;
    
    rolesCurrentPage = page;
    renderSystemRoles();
    
    // Scroll to top of grid
    document.getElementById('systemRolesGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Filter System Roles
function filterSystemRoles() {
    const searchTerm = document.getElementById('rolesSearchInput').value.toLowerCase();
    const filterValue = document.getElementById('rolesFilterSelect').value;
    
    filteredSystemRoles = systemRoles.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm) || 
                            user.email.toLowerCase().includes(searchTerm);
        const matchesFilter = filterValue === 'all' || user.role === filterValue;
        
        return matchesSearch && matchesFilter;
    });
    
    rolesCurrentPage = 1; // Reset to first page when filtering
    renderSystemRoles();
}

// Sort System Roles
function sortSystemRoles() {
    const sortValue = document.getElementById('rolesSortSelect').value;
    
    switch(sortValue) {
        case 'name':
            filteredSystemRoles.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'role':
            filteredSystemRoles.sort((a, b) => a.role.localeCompare(b.role));
            break;
        case 'date':
            filteredSystemRoles.sort((a, b) => {
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const [aMonth, aYear] = a.joinedDate.split(' ');
                const [bMonth, bYear] = b.joinedDate.split(' ');
                const aDate = new Date(aYear, months.indexOf(aMonth));
                const bDate = new Date(bYear, months.indexOf(bMonth));
                return bDate - aDate;
            });
            break;
    }
    
    rolesCurrentPage = 1; // Reset to first page when sorting
    renderSystemRoles();
}

// Change Roles View
function changeRolesView(view) {
    rolesView = view;
    const grid = document.getElementById('systemRolesGrid');
    const buttons = document.querySelectorAll('#systemRolesPage .view-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('#systemRolesPage .view-btn').forEach(btn => {
        if (btn.getAttribute('data-view') === view) {
            btn.classList.add('active');
        }
    });
    
    if (view === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
}

// Restaurant Members Page
function openRestaurantMembers(restaurantId, restaurantName) {
    currentRestaurant = restaurantId;
    document.getElementById('restaurantMembersTitle').textContent = `${restaurantName} - Members`;
    document.getElementById('restaurantMembersSubtitle').textContent = `Manage staff for ${restaurantName}`;
    
    // Initialize tab states
    tabStates.owners.filteredMembers = restaurantMembers.filter(m => m.role === 'Owner');
    tabStates.recipients.filteredMembers = restaurantMembers.filter(m => m.role === 'Recipient');
    tabStates.viewers.filteredMembers = restaurantMembers.filter(m => m.role === 'Viewer');
    
    // Reset all tabs
    Object.keys(tabStates).forEach(tab => {
        tabStates[tab].currentPage = 1;
        tabStates[tab].searchTerm = '';
        const searchInput = document.getElementById(`${tab}SearchInput`);
        const sortSelect = document.getElementById(`${tab}SortSelect`);
        if (searchInput) searchInput.value = '';
        if (sortSelect) sortSelect.value = 'name';
    });
    
    // Render all tabs
    renderTabMembers('owners');
    renderTabMembers('recipients');
    renderTabMembers('viewers');
    
    showPage('restaurantMembersPage');
}

function closeRestaurantMembersPage() {
    showPage('restaurantsPage');
}

// Switch between tabs
function switchMembersTab(tabName) {
    // Remove active class from all tabs
    document.querySelectorAll('#restaurantMembersPage .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('#restaurantMembersPage .tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to selected tab
    document.querySelector(`#restaurantMembersPage [data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}Tab`).classList.add('active');
}

// Render members for a specific tab
function renderTabMembers(tabName) {
    const state = tabStates[tabName];
    const totalItems = state.filteredMembers.length;
    const totalPages = Math.ceil(totalItems / state.itemsPerPage);
    
    // Make sure current page is valid
    if (state.currentPage > totalPages && totalPages > 0) {
        state.currentPage = totalPages;
    }
    if (state.currentPage < 1) {
        state.currentPage = 1;
    }
    
    // Calculate start and end indices
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = Math.min(startIndex + state.itemsPerPage, totalItems);
    
    // Get items for current page
    const pageItems = state.filteredMembers.slice(startIndex, endIndex);
    
    // Render items
    const grid = document.getElementById(`${tabName}Grid`);
    const roleClass = tabName.slice(0, -1); // Remove 's' from end (owners -> owner)
    
    if (pageItems.length === 0) {
        grid.innerHTML = `<div style="text-align: center; padding: 60px 20px; color: #6b7280; grid-column: 1/-1;"><i class="fas fa-users" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3; display: block;"></i><p style="font-size: 16px;">No ${tabName} found</p></div>`;
    } else {
        grid.innerHTML = pageItems.map(member => {
            const memberRoleClass = member.role.toLowerCase();
            return `
                <div class="member-card ${memberRoleClass}">
                    <div class="member-card-header">
                        <div class="member-info">
                            <div class="member-avatar">${member.name.split(' ').map(n => n[0]).join('')}</div>
                            <div class="member-details">
                                <h4>${member.name}</h4>
                                <span class="member-role-badge ${memberRoleClass}">
                                    ${member.role}
                                </span>
                            </div>
                        </div>
                        <div class="member-actions">
                            <button class="icon-btn edit" onclick="editMember(${member.id}); event.stopPropagation();" title="Edit">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="icon-btn delete" onclick="openDeleteMemberModal(${member.id}, '${member.name}'); event.stopPropagation();" title="Delete">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div class="member-card-body">
                        <p><i class="fas fa-envelope"></i> ${member.email}</p>
                        ${member.branch ? `<p><i class="fas fa-store"></i> ${member.branch}</p>` : ''}
                        <p><i class="fas fa-calendar"></i> Joined ${member.joinedDate}</p>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Update pagination info
    updateTabPaginationInfo(tabName, startIndex + 1, endIndex, totalItems);
    
    // Render pagination controls
    renderTabPagination(tabName, totalPages);
}

// Update tab pagination info
function updateTabPaginationInfo(tabName, start, end, total) {
    document.getElementById(`${tabName}ItemsStart`).textContent = total > 0 ? start : 0;
    document.getElementById(`${tabName}ItemsEnd`).textContent = end;
    document.getElementById(`${tabName}ItemsTotal`).textContent = total;
}

// Render tab pagination controls
function renderTabPagination(tabName, totalPages) {
    const controls = document.getElementById(`${tabName}PaginationControls`);
    const state = tabStates[tabName];
    
    if (totalPages <= 1) {
        controls.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Previous button
    html += `<button class="pagination-btn" onclick="goToTabPage('${tabName}', ${state.currentPage - 1})" ${state.currentPage === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i>
             </button>`;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, state.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // First page
    if (startPage > 1) {
        html += `<button class="pagination-btn" onclick="goToTabPage('${tabName}', 1)">1</button>`;
        if (startPage > 2) {
            html += '<span class="pagination-ellipsis">...</span>';
        }
    }
    
    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
        html += `<button class="pagination-btn ${i === state.currentPage ? 'active' : ''}" onclick="goToTabPage('${tabName}', ${i})">${i}</button>`;
    }
    
    // Last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += '<span class="pagination-ellipsis">...</span>';
        }
        html += `<button class="pagination-btn" onclick="goToTabPage('${tabName}', ${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    html += `<button class="pagination-btn" onclick="goToTabPage('${tabName}', ${state.currentPage + 1})" ${state.currentPage === totalPages ? 'disabled' : ''}>
                <i class="fas fa-chevron-right"></i>
             </button>`;
    
    controls.innerHTML = html;
}

// Go to specific page in tab
function goToTabPage(tabName, page) {
    const state = tabStates[tabName];
    const totalPages = Math.ceil(state.filteredMembers.length / state.itemsPerPage);
    if (page < 1 || page > totalPages) return;
    
    state.currentPage = page;
    renderTabMembers(tabName);
    
    // Scroll to top of grid
    document.getElementById(`${tabName}Grid`).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Filter members in tab
function filterTabMembers(tabName) {
    const state = tabStates[tabName];
    const searchTerm = document.getElementById(`${tabName}SearchInput`).value.toLowerCase();
    state.searchTerm = searchTerm;
    
    // Get branch filter if exists
    const branchFilterElement = document.getElementById(`${tabName}BranchFilter`);
    if (branchFilterElement) {
        state.branchFilter = branchFilterElement.value;
    }
    
    // Get base members for this tab (by role)
    const roleMap = {
        owners: 'Owner',
        recipients: 'Recipient',
        viewers: 'Viewer'
    };
    
    const baseMembers = restaurantMembers.filter(m => m.role === roleMap[tabName]);
    
    state.filteredMembers = baseMembers.filter(member => {
        // Search filter
        const matchesSearch = member.name.toLowerCase().includes(searchTerm) || 
                             member.email.toLowerCase().includes(searchTerm);
        
        // Branch filter (only for recipients and viewers)
        const matchesBranch = !state.branchFilter || 
                             state.branchFilter === 'all' || 
                             member.branch === state.branchFilter;
        
        return matchesSearch && matchesBranch;
    });
    
    state.currentPage = 1; // Reset to first page when filtering
    renderTabMembers(tabName);
}

// Sort members in tab
function sortTabMembers(tabName) {
    const state = tabStates[tabName];
    const sortValue = document.getElementById(`${tabName}SortSelect`).value;
    
    switch(sortValue) {
        case 'name':
            state.filteredMembers.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'date':
            state.filteredMembers.sort((a, b) => {
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const [aMonth, aYear] = a.joinedDate.split(' ');
                const [bMonth, bYear] = b.joinedDate.split(' ');
                const aDate = new Date(aYear, months.indexOf(aMonth));
                const bDate = new Date(bYear, months.indexOf(bMonth));
                return bDate - aDate;
            });
            break;
    }
    
    state.currentPage = 1; // Reset to first page when sorting
    renderTabMembers(tabName);
}

// Change view in tab
function changeTabView(tabName, view) {
    const state = tabStates[tabName];
    state.view = view;
    
    const grid = document.getElementById(`${tabName}Grid`);
    const tabElement = document.getElementById(`${tabName}Tab`);
    const buttons = tabElement.querySelectorAll('.view-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    tabElement.querySelectorAll('.view-btn').forEach(btn => {
        if (btn.getAttribute('data-view') === view) {
            btn.classList.add('active');
        }
    });
    
    if (view === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
}

// Edit Member
function editMember(memberId) {
    const member = restaurantMembers.find(m => m.id === memberId);
    alert(`Edit functionality for ${member.name} would be implemented here`);
    console.log('Editing member:', member);
}

// Delete Member Modal
function openDeleteMemberModal(memberId, memberName) {
    userToDelete = memberId;
    document.getElementById('deleteUserName').textContent = memberName;
    document.getElementById('deleteModal').classList.add('active');
}

// Edit User
function editUser(userId) {
    const user = systemRoles.find(u => u.id === userId);
    alert(`Edit functionality for ${user.name} would be implemented here`);
    console.log('Editing user:', user);
}

// Delete Modal
function openDeleteModal(userId, userName) {
    userToDelete = userId;
    document.getElementById('deleteUserName').textContent = userName;
    document.getElementById('deleteModal').classList.add('active');
}

function closeDeleteModal() {
    userToDelete = null;
    document.getElementById('deleteModal').classList.remove('active');
}

function confirmDelete() {
    if (userToDelete) {
        // Check if deleting from system roles
        const userIndex = systemRoles.findIndex(u => u.id === userToDelete);
        if (userIndex > -1) {
            systemRoles.splice(userIndex, 1);
            filteredSystemRoles = systemRoles.filter(user => {
                const searchTerm = document.getElementById('rolesSearchInput')?.value.toLowerCase() || '';
                const filterValue = document.getElementById('rolesFilterSelect')?.value || 'all';
                const matchesSearch = user.name.toLowerCase().includes(searchTerm) || 
                                    user.email.toLowerCase().includes(searchTerm);
                const matchesFilter = filterValue === 'all' || user.role === filterValue;
                return matchesSearch && matchesFilter;
            });
            renderSystemRoles();
            closeDeleteModal();
            alert('User deleted successfully!');
            return;
        }
        
        // Check if deleting from restaurant members
        const memberIndex = restaurantMembers.findIndex(m => m.id === userToDelete);
        if (memberIndex > -1) {
            const deletedMember = restaurantMembers[memberIndex];
            restaurantMembers.splice(memberIndex, 1);
            
            // Update all tab states
            tabStates.owners.filteredMembers = restaurantMembers.filter(m => m.role === 'Owner');
            tabStates.recipients.filteredMembers = restaurantMembers.filter(m => m.role === 'Recipient');
            tabStates.viewers.filteredMembers = restaurantMembers.filter(m => m.role === 'Viewer');
            
            // Apply current filters
            Object.keys(tabStates).forEach(tab => {
                const searchTerm = tabStates[tab].searchTerm;
                if (searchTerm) {
                    tabStates[tab].filteredMembers = tabStates[tab].filteredMembers.filter(member => {
                        return member.name.toLowerCase().includes(searchTerm) || 
                               member.email.toLowerCase().includes(searchTerm);
                    });
                }
            });
            
            // Re-render all tabs
            renderTabMembers('owners');
            renderTabMembers('recipients');
            renderTabMembers('viewers');
            
            closeDeleteModal();
            alert('Member deleted successfully!');
        }
    }
}

// ============ ADD SYSTEM MEMBER MODAL ============
function openAddSystemMemberModal() {
    // Populate restaurant dropdown
    const restaurantSelect = document.getElementById('systemMemberRestaurant');
    restaurantSelect.innerHTML = '<option value="">Select a restaurant</option>' + 
        restaurants.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
    
    document.getElementById('addSystemMemberModal').classList.add('active');
}

function closeAddSystemMemberModal() {
    document.getElementById('addSystemMemberModal').classList.remove('active');
    document.getElementById('systemMemberForm').reset();
    document.getElementById('systemRestaurantSelect').style.display = 'none';
    document.getElementById('systemBranchSelect').style.display = 'none';
}

function handleSystemRoleChange() {
    const role = document.getElementById('systemMemberRole').value;
    const restaurantSelect = document.getElementById('systemRestaurantSelect');
    const branchSelect = document.getElementById('systemBranchSelect');
    
    // Hide both initially
    restaurantSelect.style.display = 'none';
    branchSelect.style.display = 'none';
    
    // Show restaurant dropdown for Restaurant Owner, Recipient, and Viewer
    if (role === 'Restaurant Owner' || role === 'Recipient' || role === 'Viewer') {
        restaurantSelect.style.display = 'block';
    }
}

function handleSystemRestaurantChange() {
    const role = document.getElementById('systemMemberRole').value;
    const restaurantId = document.getElementById('systemMemberRestaurant').value;
    const branchSelect = document.getElementById('systemBranchSelect');
    const branchSelectElement = document.getElementById('systemMemberBranch');
    
    // Show branch dropdown only for Recipient and Viewer
    if ((role === 'Recipient' || role === 'Viewer') && restaurantId) {
        // Mock branches data - in real app, fetch from server based on restaurant
        const branches = [
            'Downtown Branch',
            'Uptown Branch',
            'Mall Branch'
        ];
        
        branchSelectElement.innerHTML = '<option value="">Select a branch</option>' + 
            branches.map(b => `<option value="${b}">${b}</option>`).join('');
        
        branchSelect.style.display = 'block';
    } else {
        branchSelect.style.display = 'none';
    }
}

function submitSystemMember() {
    const form = document.getElementById('systemMemberForm');
    
    // Basic validation
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const name = document.getElementById('systemMemberName').value;
    const email = document.getElementById('systemMemberEmail').value;
    const password = document.getElementById('systemMemberPassword').value;
    const role = document.getElementById('systemMemberRole').value;
    const restaurantId = document.getElementById('systemMemberRestaurant').value;
    const branch = document.getElementById('systemMemberBranch').value;
    
    // Additional validation
    if (role === 'Restaurant Owner' && !restaurantId) {
        alert('Please select a restaurant');
        return;
    }
    
    if ((role === 'Recipient' || role === 'Viewer') && !restaurantId) {
        alert('Please select a restaurant');
        return;
    }
    
    if ((role === 'Recipient' || role === 'Viewer') && !branch) {
        alert('Please select a branch');
        return;
    }
    
    // Create new member
    const newMember = {
        id: systemRoles.length + 1,
        name: name,
        email: email,
        role: role,
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };
    
    if (restaurantId) {
        newMember.restaurantId = restaurantId;
    }
    
    if (branch) {
        newMember.branch = branch;
    }
    
    // Add to array
    systemRoles.push(newMember);
    
    // Refresh the display
    filterSystemRoles();
    
    // Close modal
    closeAddSystemMemberModal();
    
    // Show success message
    alert(`Successfully added ${name} as ${role}`);
}

// ============ ADD RESTAURANT MEMBER MODAL ============
function openAddRestaurantMemberModal() {
    // Populate branch dropdown with current restaurant's branches
    const branchSelectElement = document.getElementById('restaurantMemberBranch');
    const branches = [
        'Downtown Branch',
        'Uptown Branch',
        'Mall Branch'
    ];
    
    branchSelectElement.innerHTML = '<option value="">Select a branch</option>' + 
        branches.map(b => `<option value="${b}">${b}</option>`).join('');
    
    document.getElementById('addRestaurantMemberModal').classList.add('active');
}

function closeAddRestaurantMemberModal() {
    document.getElementById('addRestaurantMemberModal').classList.remove('active');
    document.getElementById('restaurantMemberForm').reset();
    document.getElementById('restaurantBranchSelect').style.display = 'none';
}

function handleRestaurantRoleChange() {
    const role = document.getElementById('restaurantMemberRole').value;
    const branchSelect = document.getElementById('restaurantBranchSelect');
    
    // Show branch dropdown when role is selected
    if (role === 'Recipient' || role === 'Viewer') {
        branchSelect.style.display = 'block';
    } else {
        branchSelect.style.display = 'none';
    }
}

function submitRestaurantMember() {
    const form = document.getElementById('restaurantMemberForm');
    
    // Basic validation
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const name = document.getElementById('restaurantMemberName').value;
    const email = document.getElementById('restaurantMemberEmail').value;
    const password = document.getElementById('restaurantMemberPassword').value;
    const role = document.getElementById('restaurantMemberRole').value;
    const branch = document.getElementById('restaurantMemberBranch').value;
    
    // Additional validation
    if (!branch) {
        alert('Please select a branch');
        return;
    }
    
    // Create new member
    const newMember = {
        id: restaurantMembers.length + 1,
        name: name,
        email: email,
        role: role,
        branch: branch,
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };
    
    // Add to array
    restaurantMembers.push(newMember);
    
    // Update the appropriate tab
    const tabName = role === 'Recipient' ? 'recipients' : 'viewers';
    
    // Re-initialize the tab with new data
    const roleMap = {
        owners: 'Owner',
        recipients: 'Recipient',
        viewers: 'Viewer'
    };
    
    const state = tabStates[tabName];
    const baseMembers = restaurantMembers.filter(m => m.role === roleMap[tabName]);
    state.filteredMembers = baseMembers;
    state.currentPage = 1;
    
    // Render the updated tab
    renderTabMembers(tabName);
    
    // Close modal
    closeAddRestaurantMemberModal();
    
    // Show success message
    alert(`Successfully added ${name} as ${role}`);
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const deleteModal = document.getElementById('deleteModal');
    const systemModal = document.getElementById('addSystemMemberModal');
    const restaurantModal = document.getElementById('addRestaurantMemberModal');
    
    if (e.target === deleteModal) {
        closeDeleteModal();
    }
    if (e.target === systemModal) {
        closeAddSystemMemberModal();
    }
    if (e.target === restaurantModal) {
        closeAddRestaurantMemberModal();
    }
    
    // Close sidebar on mobile when clicking outside
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Initialize the appropriate page on load
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're in member.html and initialize restaurants page
    if (document.getElementById('restaurantsPage')) {
        showPage('restaurantsPage');
    }
    
    // No need to add click handlers - let browser handle normal navigation
    // Sidebar close on mobile when clicking outside is handled by the existing click listener above
});


