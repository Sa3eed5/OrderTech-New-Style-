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
    
    // Determine page context based on current page
    const isMembersPage = document.getElementById('restaurantsPage')?.closest('body')?.querySelector('.page-header h1')?.textContent?.includes('Members');
    const pageContext = isMembersPage ? 'members' : 'restaurants';
    
    renderRestaurants(pageContext);
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
    const pageContext = getCurrentPageContext();
    renderRestaurants(pageContext);
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
        const pageContext = getCurrentPageContext();
        renderRestaurants(pageContext);
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
// pageContext: 'restaurants' for restaurants page, 'members' for members page
function renderRestaurants(pageContext = 'restaurants') {
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
        grid.innerHTML = pageItems.map(restaurant => {
            const clickHandler = pageContext === 'members' 
                ? `openRestaurantMembers(${restaurant.id}, '${restaurant.name}')` 
                : `openRestaurantDetails(${restaurant.id})`;
            
            return `
            <div class="restaurant-card ${restaurant.status}" onclick="${clickHandler}">
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
            `;
        }).join('');
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
    
    // Determine context from current page
    const pageContext = getCurrentPageContext();
    renderRestaurants(pageContext);
    
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
    
    // Determine context from current page
    const pageContext = getCurrentPageContext();
    renderRestaurants(pageContext);
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
    
    // Determine context from current page
    const pageContext = getCurrentPageContext();
    renderRestaurants(pageContext);
}

// Helper function to determine current page context
function getCurrentPageContext() {
    // Check if we're in member.html by looking at the page title or URL
    const pageTitle = document.querySelector('.page-header h1')?.textContent || '';
    const currentFile = window.location.pathname.split('/').pop();
    
    // If we're in member.html or the page title includes "Members", use members context
    if (currentFile === 'member.html' || pageTitle.includes('Members')) {
        return 'members';
    }
    
    return 'restaurants';
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

// Menu Page Tab Switching
document.addEventListener('DOMContentLoaded', function() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuTabContents = document.querySelectorAll('.menu-tab-content');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents
            menuTabContents.forEach(content => content.classList.remove('active'));
            
            // Show target tab content
            const targetContent = document.getElementById(targetTab + '-content');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Menu Page Functions
function openAddCategoryModal() {
    alert('Add Category modal - Feature coming soon!');
}

function openAddProductModal() {
    alert('Add Product modal - Feature coming soon!');
}

// Filter Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.getElementById('filterDropdownBtn');
    const filterMenu = document.getElementById('filterDropdownMenu');
    const filterLabel = document.getElementById('filterLabel');
    const filterOptions = document.querySelectorAll('.filter-option');
    
    if (filterBtn && filterMenu) {
        // Toggle dropdown
        filterBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            filterMenu.classList.toggle('show');
        });
        
        // Handle option selection
        filterOptions.forEach(option => {
            option.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                const text = this.textContent;
                
                // Update label
                filterLabel.textContent = text;
                
                // Update active state
                filterOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // Close dropdown
                filterMenu.classList.remove('show');
                
                // Trigger filter (you can add filter logic here)
                console.log('Filter changed to:', value);
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target)) {
                filterMenu.classList.remove('show');
            }
        });
    }
});

// ========== Offer Modal Functions ==========
let currentOfferStep = 1;
const totalOfferSteps = 3;

// Validation state
let validationErrors = {};

// Validation rules
const offerValidationRules = {
    offerNameEn: (value) => {
        if (!value || value.trim().length === 0) return 'Offer name (English) is required';
        if (value.trim().length < 3) return 'Minimum 3 characters required';
        if (value.length > 80) return 'Maximum 80 characters allowed';
        return null;
    },
    offerNameAr: (value) => {
        if (value && value.length > 80) return 'Maximum 80 characters allowed';
        return null;
    },
    offerType: (value) => {
        if (!value) return 'Please select an offer type';
        return null;
    },
    time: (startTime, endTime) => {
        if (startTime && endTime && startTime >= endTime) {
            return 'End time must be after start time';
        }
        return null;
    },
    descEn: (value) => {
        if (value && value.length > 400) return 'Maximum 400 characters allowed';
        return null;
    },
    descAr: (value) => {
        if (value && value.length > 400) return 'Maximum 400 characters allowed';
        return null;
    }
};

// Validate single field
function validateField(fieldId) {
    const input = document.getElementById(fieldId);
    if (!input) return true;
    
    const value = input.value;
    let error = null;
    
    switch(fieldId) {
        case 'offerNameEn':
            error = offerValidationRules.offerNameEn(value);
            break;
        case 'offerNameAr':
            error = offerValidationRules.offerNameAr(value);
            break;
        case 'offerDescEn':
            error = offerValidationRules.descEn(value);
            break;
        case 'offerDescAr':
            error = offerValidationRules.descAr(value);
            break;
    }
    
    // Map field ID to error element ID
    const errorIdMap = {
        'offerNameEn': 'offerNameEnError',
        'offerNameAr': 'offerNameArError',
        'offerDescEn': 'descEnError',
        'offerDescAr': 'descArError'
    };
    
    const errorEl = document.getElementById(errorIdMap[fieldId]);
    
    if (error) {
        validationErrors[fieldId] = error;
        input.classList.add('input-error');
        input.setAttribute('aria-invalid', 'true');
        if (errorEl) errorEl.textContent = error;
    } else {
        delete validationErrors[fieldId];
        input.classList.remove('input-error');
        input.removeAttribute('aria-invalid');
        if (errorEl) errorEl.textContent = '';
    }
    
    return !error;
}

// Validate time fields
function validateTimeFields() {
    const startTime = document.getElementById('offerStartTime')?.value || '';
    const endTime = document.getElementById('offerEndTime')?.value || '';
    const errorEl = document.getElementById('timeError');
    
    const error = offerValidationRules.time(startTime, endTime);
    
    if (error) {
        validationErrors['time'] = error;
        if (errorEl) errorEl.textContent = error;
    } else {
        delete validationErrors['time'];
        if (errorEl) errorEl.textContent = '';
    }
    
    return !error;
}

// Validate all fields for step 1
function validateStep1() {
    const isNameEnValid = validateField('offerNameEn');
    const isNameArValid = validateField('offerNameAr');
    const isDescEnValid = validateField('offerDescEn');
    const isDescArValid = validateField('offerDescAr');
    const isTimeValid = validateTimeFields();
    
    const offerType = document.getElementById('offerType')?.value;
    const isTypeValid = !!offerType;
    
    if (!isTypeValid) {
        validationErrors['offerType'] = 'Please select an offer type';
    } else {
        delete validationErrors['offerType'];
    }
    
    return isNameEnValid && isNameArValid && isDescEnValid && isDescArValid && isTimeValid && isTypeValid;
}

// Show validation error summary
function showValidationSummary() {
    const summary = document.getElementById('validationErrorSummary');
    const list = document.getElementById('errorSummaryList');
    
    const errors = Object.values(validationErrors);
    
    if (errors.length > 0 && summary && list) {
        list.innerHTML = errors.map(e => `<li>${e}</li>`).join('');
        summary.style.display = 'block';
        summary.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (summary) {
        summary.style.display = 'none';
    }
}

// Clear validation errors
function clearValidationErrors() {
    validationErrors = {};
    
    // Clear all error messages
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    
    // Remove error classes
    document.querySelectorAll('.input-error').forEach(el => {
        el.classList.remove('input-error');
        el.removeAttribute('aria-invalid');
    });
    
    // Hide summary
    const summary = document.getElementById('validationErrorSummary');
    if (summary) summary.style.display = 'none';
}

// Update character count
function updateCharCount(inputId, maxLength) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    // Map input ID to count element ID
    const countIdMap = {
        'offerNameEn': 'offerNameEnCount',
        'offerNameAr': 'offerNameArCount',
        'offerDescEn': 'descEnCount',
        'offerDescAr': 'descArCount'
    };
    
    const countEl = document.getElementById(countIdMap[inputId]);
    if (!countEl) return;
    
    const len = input.value.length;
    countEl.textContent = `${len}/${maxLength}`;
    
    countEl.classList.remove('warning', 'error');
    if (len > maxLength) {
        countEl.classList.add('error');
    } else if (len > maxLength * 0.9) {
        countEl.classList.add('warning');
    }
}

// Auto-grow textarea
function autoGrowTextarea(textarea) {
    if (!textarea) return;
    textarea.style.height = 'auto';
    const newHeight = Math.min(textarea.scrollHeight, 150);
    textarea.style.height = newHeight + 'px';
}

// Toggle day button selection (Step 1)
function toggleDayBtn(btn) {
    btn.classList.toggle('active');
    btn.setAttribute('aria-pressed', btn.classList.contains('active'));
}

// Select all days (Step 1)
function selectAllDaysHandler() {
    const dayBtns = document.querySelectorAll('#daysFieldRow .day-btn');
    dayBtns.forEach(btn => {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
    });
}

// Clear all days (Step 1)
function clearAllDaysHandler() {
    const dayBtns = document.querySelectorAll('#daysFieldRow .day-btn');
    dayBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
}

function openAddOfferModal() {
    const modal = document.getElementById('addOfferModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        currentOfferStep = 1;
        updateOfferWizard();
        initOfferFormListeners();
    }
}

function closeAddOfferModal() {
    const modal = document.getElementById('addOfferModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        resetOfferForm();
    }
}

function nextOfferStep() {
    // Validate step 1 before proceeding
    if (currentOfferStep === 1) {
        if (!validateStep1()) {
            showValidationSummary();
            return;
        }
        clearValidationErrors();
    }
    
    // Validate step 2 before proceeding
    if (currentOfferStep === 2) {
        if (!validateStep2()) {
            return;
        }
        // Sync step 2 data to legacy selectedOfferProducts for preview
        selectedOfferProducts = collectStep2Data();
    }
    
    if (currentOfferStep < totalOfferSteps) {
        currentOfferStep++;
        updateOfferWizard();
        
        // Initialize Step 2 when entering
        if (currentOfferStep === 2) {
            initStep2Products();
        }
        
        // Update preview when reaching the last step
        if (currentOfferStep === totalOfferSteps) {
            updateOfferPreview();
        }
    }
}

function prevOfferStep() {
    if (currentOfferStep > 1) {
        currentOfferStep--;
        updateOfferWizard();
    }
}

function updateOfferWizard() {
    // Update step indicators
    const steps = document.querySelectorAll('#addOfferModal .wizard-step');
    const connectors = document.querySelectorAll('#addOfferModal .wizard-connector');
    
    steps.forEach((step, index) => {
        step.classList.remove('active', 'completed');
        step.removeAttribute('aria-current');
        
        if (index + 1 === currentOfferStep) {
            step.classList.add('active');
            step.setAttribute('aria-current', 'step');
        } else if (index + 1 < currentOfferStep) {
            step.classList.add('completed');
        }
    });
    
    // Update connectors
    connectors.forEach((connector, index) => {
        connector.classList.remove('completed');
        if (index + 1 < currentOfferStep) {
            connector.classList.add('completed');
        }
    });

    // Update step content
    const stepContents = document.querySelectorAll('#addOfferModal .wizard-step-content');
    stepContents.forEach((content, index) => {
        content.classList.remove('active');
        if (index + 1 === currentOfferStep) {
            content.classList.add('active');
        }
    });

    // Update buttons
    const prevBtn = document.getElementById('offerPrevBtn');
    const nextBtn = document.getElementById('offerNextBtn');
    const publishBtn = document.getElementById('offerPublishBtn');

    if (prevBtn) {
        prevBtn.style.display = currentOfferStep > 1 ? 'flex' : 'none';
    }

    if (nextBtn && publishBtn) {
        if (currentOfferStep === totalOfferSteps) {
            nextBtn.style.display = 'none';
            publishBtn.style.display = 'flex';
        } else {
            nextBtn.style.display = 'flex';
            publishBtn.style.display = 'none';
        }
    }
}

// Initialize offer form listeners (called once when modal opens)
let offerFormInitialized = false;

function initOfferFormListeners() {
    if (offerFormInitialized) return;
    offerFormInitialized = true;
    
    // Offer Name (EN) - input and blur validation
    const offerNameEn = document.getElementById('offerNameEn');
    if (offerNameEn) {
        offerNameEn.addEventListener('input', () => {
            updateCharCount('offerNameEn', 80);
        });
        offerNameEn.addEventListener('blur', () => {
            validateField('offerNameEn');
        });
    }
    
    // Offer Name (AR)
    const offerNameAr = document.getElementById('offerNameAr');
    if (offerNameAr) {
        offerNameAr.addEventListener('input', () => {
            updateCharCount('offerNameAr', 80);
        });
        offerNameAr.addEventListener('blur', () => {
            validateField('offerNameAr');
        });
    }
    
    // Description (EN)
    const descEn = document.getElementById('offerDescEn');
    if (descEn) {
        descEn.addEventListener('input', function() {
            updateCharCount('offerDescEn', 400);
            autoGrowTextarea(this);
        });
        descEn.addEventListener('blur', () => {
            validateField('offerDescEn');
        });
    }
    
    // Description (AR)
    const descAr = document.getElementById('offerDescAr');
    if (descAr) {
        descAr.addEventListener('input', function() {
            updateCharCount('offerDescAr', 400);
            autoGrowTextarea(this);
        });
        descAr.addEventListener('blur', () => {
            validateField('offerDescAr');
        });
    }
    
    // Time fields validation
    const startTime = document.getElementById('offerStartTime');
    const endTime = document.getElementById('offerEndTime');
    if (startTime) startTime.addEventListener('change', validateTimeFields);
    if (endTime) endTime.addEventListener('change', validateTimeFields);
    
    // Offer Type Cards (new style)
    const offerTypeCards = document.querySelectorAll('.offer-type-card');
    const offerTypeInput = document.getElementById('offerType');
    
    offerTypeCards.forEach(card => {
        card.addEventListener('click', function() {
            selectOfferType(this, offerTypeCards, offerTypeInput);
        });
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectOfferType(this, offerTypeCards, offerTypeInput);
            }
        });
    });
    
    // Day buttons with ARIA
    const dayBtns = document.querySelectorAll('.day-btn');
    dayBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            this.setAttribute('aria-pressed', this.classList.contains('active'));
        });
    });
    
    // Select All Days button
    const selectAllBtn = document.getElementById('selectAllDays');
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', function() {
            dayBtns.forEach(btn => {
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
            });
        });
    }
    
    // Clear Days button
    const clearDaysBtn = document.getElementById('clearDays');
    if (clearDaysBtn) {
        clearDaysBtn.addEventListener('click', function() {
            dayBtns.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
        });
    }
    
    // Status toggle
    const statusToggle = document.getElementById('offerActiveToggle');
    const statusText = document.getElementById('toggleStatusText');
    if (statusToggle && statusText) {
        statusToggle.addEventListener('change', function() {
            if (this.checked) {
                statusText.textContent = 'Active';
                statusText.className = 'toggle-label active';
            } else {
                statusText.textContent = 'Inactive';
                statusText.className = 'toggle-label inactive';
            }
        });
    }
}

// Select offer type handler
function selectOfferType(selectedCard, allCards, hiddenInput) {
    // Update ARIA and active state
    allCards.forEach(card => {
        card.classList.remove('active');
        card.setAttribute('aria-checked', 'false');
    });
    
    selectedCard.classList.add('active');
    selectedCard.setAttribute('aria-checked', 'true');
    
    const selectedType = selectedCard.getAttribute('data-type');
    
    // Update hidden input
    if (hiddenInput) {
        hiddenInput.value = selectedType;
    }
    
    // Update UI based on offer type
    updateOfferTypeDetails(selectedType);
}

// Navigate to a specific wizard step
function goToStep(stepNum) {
    if (stepNum < 1 || stepNum > 3) return;
    
    currentOfferStep = stepNum;
    
    // Update step visibility
    document.querySelectorAll('.wizard-step-content').forEach((content, index) => {
        content.classList.toggle('active', index + 1 === stepNum);
    });
    
    // Update stepper indicators
    document.querySelectorAll('.step-item').forEach((item, index) => {
        const stepIndex = index + 1;
        item.classList.remove('active', 'completed');
        if (stepIndex === stepNum) {
            item.classList.add('active');
        } else if (stepIndex < stepNum) {
            item.classList.add('completed');
        }
    });
    
    // Update footer buttons
    const prevBtn = document.getElementById('offerPrevBtn');
    const nextBtn = document.getElementById('offerNextBtn');
    const publishBtn = document.getElementById('offerPublishBtn');
    
    if (prevBtn) prevBtn.style.display = stepNum > 1 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = stepNum < 3 ? 'flex' : 'none';
    if (publishBtn) publishBtn.style.display = stepNum === 3 ? 'flex' : 'none';
    
    // Announce for accessibility
    const announcer = document.getElementById('selectionAnnouncer');
    if (announcer) {
        const stepNames = ['Basic Info', 'Products', 'Review & Publish'];
        announcer.textContent = `Navigated to step ${stepNum}: ${stepNames[stepNum - 1]}`;
    }
}

// ==================== Confirmation Modal ====================

function openConfirmModal() {
    // Update preview before opening
    updateOfferPreview();
    
    // Reset checkboxes
    document.querySelectorAll('.checklist-item input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    
    // Disable publish button
    const publishBtn = document.getElementById('confirmPublishBtn');
    if (publishBtn) publishBtn.disabled = true;
    
    // Show modal
    const overlay = document.getElementById('confirmModalOverlay');
    const modal = document.getElementById('confirmPublishModal');
    
    if (overlay) overlay.classList.add('active');
    if (modal) {
        modal.classList.add('active');
        
        // Focus first checkbox for accessibility
        setTimeout(() => {
            const firstCheckbox = modal.querySelector('input[type="checkbox"]');
            if (firstCheckbox) firstCheckbox.focus();
        }, 100);
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeConfirmModal() {
    const overlay = document.getElementById('confirmModalOverlay');
    const modal = document.getElementById('confirmPublishModal');
    
    if (overlay) overlay.classList.remove('active');
    if (modal) modal.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Return focus to publish button
    const publishBtn = document.getElementById('offerPublishBtn');
    if (publishBtn) publishBtn.focus();
}

function updatePublishButton() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    
    const publishBtn = document.getElementById('confirmPublishBtn');
    if (publishBtn) {
        publishBtn.disabled = !allChecked;
    }
}

function confirmAndPublish() {
    // Close modal first
    closeConfirmModal();
    
    // Then call the actual publish function
    publishOffer();
}

// Store published offers
let publishedOffers = [];

function publishOffer() {
    // Collect form data
    const offerType = document.getElementById('offerType')?.value || 'happy-hour';
    const isActive = document.getElementById('offerActiveToggle')?.checked ?? true;
    
    const offerData = {
        id: Date.now(),
        nameEn: document.getElementById('offerNameEn')?.value || 'Unnamed Offer',
        nameAr: document.getElementById('offerNameAr')?.value || '',
        type: offerType,
        startTime: document.getElementById('offerStartTime')?.value || '',
        endTime: document.getElementById('offerEndTime')?.value || '',
        startDate: document.getElementById('offerStartDate')?.value || '',
        endDate: document.getElementById('offerEndDate')?.value || '',
        descEn: document.getElementById('offerDescEn')?.value || '',
        descAr: document.getElementById('offerDescAr')?.value || '',
        days: Array.from(document.querySelectorAll('.day-btn.active')).map(btn => btn.textContent),
        isActive: isActive,
        products: collectProductsForPublish()
    };
    
    // Add to published offers
    publishedOffers.push(offerData);
    
    // Create and display the offer card
    createOfferCard(offerData);
    
    // Show offer cards wrapper and hide empty state
    document.getElementById('offersEmptyState').style.display = 'none';
    document.getElementById('offersContentWrapper').style.display = 'flex';
    
    // Update offers count
    document.getElementById('offersCountNum').textContent = publishedOffers.length;
    
    console.log('Publishing offer:', offerData);
    
    // Store offer name for toast
    const offerName = offerData.nameEn;
    
    // Close modal first
    closeAddOfferModal();
    
    // Use setTimeout to ensure modal closes first
    setTimeout(() => {
        // Switch to offers tab
        switchToOffersTab();
        
        // Show success toast
        showToast('success', 'Offer Published!', `"${offerName}" has been created successfully.`);
    }, 100);
}

// Show toast notification
function showToast(type, title, message) {
    const toast = document.getElementById('successToast');
    const toastTitle = toast.querySelector('.toast-title');
    const toastMessage = document.getElementById('toastMessage');
    
    // Update content
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    // Update type class
    toast.className = 'toast ' + type;
    
    // Show toast
    toast.classList.add('show');
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        hideToast();
    }, 3000);
}

function hideToast() {
    const toast = document.getElementById('successToast');
    toast.classList.remove('show');
}

// Switch to offers tab
function switchToOffersTab() {
    // Remove active from all tabs
    document.querySelectorAll('.menu-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.menu-tab-content').forEach(content => content.classList.remove('active'));
    
    // Activate offers tab
    const offersTab = document.querySelector('.menu-tab[data-tab="offers"]');
    if (offersTab) offersTab.classList.add('active');
    
    const offersContent = document.getElementById('offers-content');
    if (offersContent) offersContent.classList.add('active');
}

function createOfferCard(offer) {
    const grid = document.getElementById('offersCardsGrid');
    
    // Get type display info
    const typeInfo = {
        'happy-hour': { label: 'Happy Hour', icon: 'fa-clock' },
        'day-deal': { label: 'Day Deal', icon: 'fa-calendar-day' },
        'time-range': { label: 'Time Range', icon: 'fa-hourglass-half' },
        'fixed-price': { label: 'Fixed Price', icon: 'fa-tag' }
    };
    
    const type = typeInfo[offer.type] || typeInfo['happy-hour'];
    
    // Format time and date for display
    const formattedStartTime = formatTime12Hour(offer.startTime);
    const formattedEndTime = formatTime12Hour(offer.endTime);
    const formattedStartDate = formatDateNice(offer.startDate);
    const formattedEndDate = formatDateNice(offer.endDate);
    
    // Build schedule info based on type
    let scheduleHtml = '';
    if (offer.type === 'happy-hour') {
        scheduleHtml = `
            <div class="offer-card-row">
                <i class="fas fa-calendar-week"></i>
                <span>${offer.days.length > 0 ? offer.days.join(', ') : 'All Days'}</span>
            </div>
            <div class="offer-card-row">
                <i class="far fa-clock"></i>
                <span>${formattedStartTime} - ${formattedEndTime}</span>
            </div>
        `;
    } else if (offer.type === 'day-deal') {
        scheduleHtml = `
            <div class="offer-card-row">
                <i class="fas fa-calendar-week"></i>
                <span>${offer.days.length > 0 ? offer.days.join(', ') : 'All Days'}</span>
            </div>
        `;
    } else if (offer.type === 'time-range') {
        scheduleHtml = `
            <div class="offer-card-row">
                <i class="far fa-clock"></i>
                <span>${formattedStartTime} - ${formattedEndTime}</span>
            </div>
            <div class="offer-card-row">
                <i class="fas fa-calendar-alt"></i>
                <span>${formattedStartDate} to ${formattedEndDate}</span>
            </div>
        `;
    } else if (offer.type === 'fixed-price') {
        scheduleHtml = `
            <div class="offer-card-row">
                <i class="fas fa-infinity"></i>
                <span>Always Active</span>
            </div>
        `;
    }
    
    const cardHtml = `
        <div class="offer-card" data-offer-id="${offer.id}">
            <div class="offer-card-header">
                <div class="offer-card-names">
                    <span class="offer-card-name-en">${offer.nameEn}</span>
                    ${offer.nameAr ? `<span class="offer-card-name-ar">${offer.nameAr}</span>` : ''}
                </div>
                <span class="offer-card-badge ${offer.isActive ? 'active' : 'inactive'}">
                    ${offer.isActive ? 'Active' : 'Inactive'}
                </span>
            </div>
            <div class="offer-card-body">
                <div class="offer-card-info">
                    <div class="offer-card-row">
                        <i class="fas ${type.icon}"></i>
                        <span class="offer-card-type-badge">
                            <i class="fas ${type.icon}"></i>
                            ${type.label}
                        </span>
                    </div>
                    ${scheduleHtml}
                    <div class="offer-card-row">
                        <i class="fas fa-box"></i>
                        <span>${offer.products.length} product${offer.products.length !== 1 ? 's' : ''}</span>
                    </div>
                </div>
            </div>
            <div class="offer-card-footer">
                <button class="offer-card-btn edit" onclick="editOffer(${offer.id})" title="Edit">
                    <i class="fas fa-pen"></i>
                </button>
                <button class="offer-card-btn delete" onclick="deleteOffer(${offer.id})" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    
    grid.insertAdjacentHTML('beforeend', cardHtml);
}

function editOffer(offerId) {
    const offer = publishedOffers.find(o => o.id === offerId);
    if (!offer) return;
    
    // TODO: Implement edit functionality
    console.log('Edit offer:', offer);
    alert('Edit functionality coming soon!');
}

function deleteOffer(offerId) {
    if (!confirm('Are you sure you want to delete this offer?')) return;
    
    // Remove from array
    publishedOffers = publishedOffers.filter(o => o.id !== offerId);
    
    // Remove card from DOM
    const card = document.querySelector(`.offer-card[data-offer-id="${offerId}"]`);
    if (card) {
        card.remove();
    }
    
    // Show empty state if no offers left
    if (publishedOffers.length === 0) {
        document.getElementById('offersEmptyState').style.display = 'flex';
        document.getElementById('offersContentWrapper').style.display = 'none';
    } else {
        // Update offers count
        document.getElementById('offersCountNum').textContent = publishedOffers.length;
    }
}

function resetOfferForm() {
    currentOfferStep = 1;
    
    // Reset form fields
    const inputs = document.querySelectorAll('#addOfferModal input, #addOfferModal textarea, #addOfferModal select');
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            // Reset status toggle to checked (active by default)
            if (input.id === 'offerActiveToggle') {
                input.checked = true;
            } else {
                input.checked = false;
            }
        } else if (input.type === 'radio') {
            input.checked = false;
        } else if (input.id === 'offerType') {
            input.value = 'happy-hour';
        } else {
            input.value = '';
        }
    });

    // Reset days to all active
    const dayBtns = document.querySelectorAll('.day-btn');
    dayBtns.forEach(btn => {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
    });

    // Reset offer type cards to happy-hour
    const offerTypeCards = document.querySelectorAll('.offer-type-card');
    offerTypeCards.forEach(card => {
        card.classList.remove('active');
        card.setAttribute('aria-checked', 'false');
        if (card.getAttribute('data-type') === 'happy-hour') {
            card.classList.add('active');
            card.setAttribute('aria-checked', 'true');
        }
    });

    // Also reset legacy offer-type-btn if present
    const offerTypeBtns = document.querySelectorAll('.offer-type-btn');
    offerTypeBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-type') === 'happy-hour') {
            btn.classList.add('active');
        }
    });

    // Reset offer type details
    updateOfferTypeDetails('happy-hour');

    // Reset char counts
    updateCharCount('offerNameEn', 80);
    updateCharCount('offerNameAr', 80);
    updateCharCount('offerDescEn', 400);
    updateCharCount('offerDescAr', 400);

    // Reset validation errors
    clearValidationErrors();

    // Reset status toggle text
    const statusText = document.getElementById('toggleStatusText');
    if (statusText) {
        statusText.textContent = 'Active';
        statusText.className = 'toggle-label active';
    }

    // Reset product selection
    selectedOfferProducts = [];
    const categorySelect = document.getElementById('offerCategorySelect');
    if (categorySelect) categorySelect.value = '';
    const productsContainer = document.getElementById('productsListContainer');
    if (productsContainer) productsContainer.style.display = 'none';
    const summaryContainer = document.getElementById('selectedProductsSummary');
    if (summaryContainer) summaryContainer.style.display = 'none';

    // Reset Step 2 (new products system)
    resetStep2();

    updateOfferWizard();
}

// Day buttons toggle
document.addEventListener('DOMContentLoaded', function() {
    const dayBtns = document.querySelectorAll('.day-btn');
    dayBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

// Offer Type Data
const offerTypeData = {
    'happy-hour': {
        title: 'Happy Hour Settings',
        desc: 'Set specific hours when customers get special discounts on selected items',
        icon: 'fas fa-clock',
        infoTitle: 'How Happy Hour Works',
        infoDesc: 'Customers will see discounted prices only during the time range you specify. Perfect for boosting sales during slow hours.'
    },
    'day-deal': {
        title: 'Day Deal Settings',
        desc: 'Create special offers that are available on specific days of the week',
        icon: 'fas fa-calendar-day',
        infoTitle: 'How Day Deal Works',
        infoDesc: 'Set discounts that apply automatically on selected days. Great for weekly specials like "Taco Tuesday" or "Wing Wednesday".'
    },
    'time-range': {
        title: 'Time Range Settings',
        desc: 'Offer discounts during a custom time period across multiple days',
        icon: 'fas fa-hourglass-half',
        infoTitle: 'How Time Range Works',
        infoDesc: 'Define a flexible time window for your offer. Ideal for lunch specials, dinner promotions, or late-night deals.'
    },
    'fixed-price': {
        title: 'Fixed Price Settings',
        desc: 'Set a special fixed price for selected items regardless of regular pricing',
        icon: 'fas fa-tag',
        infoTitle: 'How Fixed Price Works',
        infoDesc: 'Override regular prices with a fixed amount. Perfect for combo deals, set menus, or promotional pricing.'
    }
};

// Update Offer Type Details
function updateOfferTypeDetails(type) {
    const data = offerTypeData[type];
    if (!data) return;
    
    const timeFieldsRow = document.getElementById('timeFieldsRow');
    const dateFieldsRow = document.getElementById('dateFieldsRow');
    const daysFieldRow = document.getElementById('daysFieldRow');
    const fixedPriceInfoCard = document.getElementById('fixedPriceInfoCard');
    
    // Get dividers in the offer settings card
    const dividers = document.querySelectorAll('#offerStep1 .form-card:last-child .form-divider');
    
    // Toggle field visibility based on offer type with smooth animations
    if (type === 'day-deal') {
        // Day Deal: show only days and descriptions
        if (timeFieldsRow) {
            timeFieldsRow.style.display = 'none';
            timeFieldsRow.style.opacity = '0';
        }
        if (dateFieldsRow) {
            dateFieldsRow.style.display = 'none';
            dateFieldsRow.style.opacity = '0';
        }
        if (daysFieldRow) {
            daysFieldRow.style.display = 'block';
            setTimeout(() => daysFieldRow.style.opacity = '1', 10);
        }
        if (fixedPriceInfoCard) fixedPriceInfoCard.style.display = 'none';
        // Hide first divider
        if (dividers[0]) dividers[0].style.display = 'none';
    } else if (type === 'time-range') {
        // Time Range: show time fields, date fields, descriptions (no days)
        if (timeFieldsRow) {
            timeFieldsRow.style.display = 'grid';
            setTimeout(() => timeFieldsRow.style.opacity = '1', 10);
        }
        if (dateFieldsRow) {
            dateFieldsRow.style.display = 'grid';
            setTimeout(() => dateFieldsRow.style.opacity = '1', 10);
        }
        if (daysFieldRow) {
            daysFieldRow.style.display = 'none';
            daysFieldRow.style.opacity = '0';
        }
        if (fixedPriceInfoCard) fixedPriceInfoCard.style.display = 'none';
        // Show first divider
        if (dividers[0]) dividers[0].style.display = 'block';
    } else if (type === 'fixed-price') {
        // Fixed Price: show only info card and descriptions
        if (timeFieldsRow) {
            timeFieldsRow.style.display = 'none';
            timeFieldsRow.style.opacity = '0';
        }
        if (dateFieldsRow) {
            dateFieldsRow.style.display = 'none';
            dateFieldsRow.style.opacity = '0';
        }
        if (daysFieldRow) {
            daysFieldRow.style.display = 'none';
            daysFieldRow.style.opacity = '0';
        }
        if (fixedPriceInfoCard) {
            fixedPriceInfoCard.style.display = 'flex';
            setTimeout(() => fixedPriceInfoCard.style.opacity = '1', 10);
        }
        // Hide first divider
        if (dividers[0]) dividers[0].style.display = 'none';
    } else {
        // Happy Hour: show days, time fields, descriptions
        if (timeFieldsRow) {
            timeFieldsRow.style.display = 'grid';
            setTimeout(() => timeFieldsRow.style.opacity = '1', 10);
        }
        if (dateFieldsRow) {
            dateFieldsRow.style.display = 'none';
            dateFieldsRow.style.opacity = '0';
        }
        if (daysFieldRow) {
            daysFieldRow.style.display = 'block';
            setTimeout(() => daysFieldRow.style.opacity = '1', 10);
        }
        if (fixedPriceInfoCard) fixedPriceInfoCard.style.display = 'none';
        // Show first divider
        if (dividers[0]) dividers[0].style.display = 'block';
    }
    
    // Clear time validation error when switching types
    const timeError = document.getElementById('timeError');
    if (timeError) timeError.textContent = '';
    delete validationErrors['time'];
}

// Offer Type buttons selection
document.addEventListener('DOMContentLoaded', function() {
    const offerTypeBtns = document.querySelectorAll('.offer-type-btn');
    const offerTypeInput = document.getElementById('offerType');
    
    offerTypeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from all
            offerTypeBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');
            
            const selectedType = this.getAttribute('data-type');
            
            // Update hidden input
            if (offerTypeInput) {
                offerTypeInput.value = selectedType;
            }
            
            // Update offer type details section
            updateOfferTypeDetails(selectedType);
        });
    });
});

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });
});

// ==================== Product Selection for Offers ====================

// Sample products data by category
const productsByCategory = {
    'burgers': [
        { id: 1, name: 'Classic Burger', price: 8.99 },
        { id: 2, name: 'Cheese Burger', price: 9.99 },
        { id: 3, name: 'Double Burger', price: 12.99 },
        { id: 4, name: 'Bacon Burger', price: 11.99 },
        { id: 5, name: 'Veggie Burger', price: 9.49 }
    ],
    'pizza': [
        { id: 6, name: 'Margherita Pizza', price: 12.99 },
        { id: 7, name: 'Pepperoni Pizza', price: 14.99 },
        { id: 8, name: 'BBQ Chicken Pizza', price: 15.99 },
        { id: 9, name: 'Veggie Supreme', price: 13.99 }
    ],
    'drinks': [
        { id: 10, name: 'Coca Cola', price: 2.49 },
        { id: 11, name: 'Fresh Orange Juice', price: 3.99 },
        { id: 12, name: 'Iced Coffee', price: 4.49 },
        { id: 13, name: 'Lemonade', price: 2.99 }
    ],
    'desserts': [
        { id: 14, name: 'Chocolate Cake', price: 5.99 },
        { id: 15, name: 'Ice Cream Sundae', price: 4.99 },
        { id: 16, name: 'Cheesecake', price: 6.49 },
        { id: 17, name: 'Brownie', price: 3.99 }
    ],
    'sides': [
        { id: 18, name: 'French Fries', price: 3.49 },
        { id: 19, name: 'Onion Rings', price: 4.49 },
        { id: 20, name: 'Coleslaw', price: 2.49 },
        { id: 21, name: 'Mozzarella Sticks', price: 5.99 }
    ]
};

// Selected products for the offer
let selectedOfferProducts = [];
let currentProductForPopup = null;

// Initialize product selection
document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('offerCategorySelect');
    
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            const category = this.value;
            loadProductsForCategory(category);
        });
    }
    
    // Status toggle handler
    const statusToggle = document.getElementById('offerActiveToggle');
    if (statusToggle) {
        statusToggle.addEventListener('change', function() {
            const statusText = document.getElementById('toggleStatusText');
            if (statusText) {
                if (this.checked) {
                    statusText.textContent = 'Active';
                    statusText.className = 'toggle-label active';
                } else {
                    statusText.textContent = 'Inactive';
                    statusText.className = 'toggle-label inactive';
                }
            }
        });
    }
});

// Load products for selected category
function loadProductsForCategory(category) {
    const container = document.getElementById('productsListContainer');
    const checkboxList = document.getElementById('productsCheckboxList');
    
    if (!category) {
        container.style.display = 'none';
        return;
    }
    
    const products = productsByCategory[category] || [];
    
    checkboxList.innerHTML = products.map(product => `
        <label class="product-checkbox-item">
            <input type="checkbox" 
                   data-id="${product.id}" 
                   data-name="${product.name}" 
                   data-price="${product.price}"
                   onchange="handleProductCheckbox(this)">
            <div class="product-checkbox-info">
                <span class="product-checkbox-name">${product.name}</span>
                <span class="product-checkbox-price">$${product.price.toFixed(2)}</span>
            </div>
        </label>
    `).join('');
    
    container.style.display = 'block';
    
    // Update checkboxes based on already selected products
    updateProductCheckboxes();
}

// Handle product checkbox change
function handleProductCheckbox(checkbox) {
    const productId = parseInt(checkbox.dataset.id);
    const productName = checkbox.dataset.name;
    const productPrice = parseFloat(checkbox.dataset.price);
    
    if (checkbox.checked) {
        // Open popup to set quantity and offer price
        currentProductForPopup = {
            id: productId,
            name: productName,
            basePrice: productPrice,
            checkbox: checkbox
        };
        openProductPopup(productName, productPrice);
    } else {
        // Remove from selected products
        removeSelectedProduct(productId);
    }
}

// Open product price popup
function openProductPopup(name, price) {
    const popup = document.getElementById('productPricePopup');
    const overlay = document.getElementById('popupOverlay');
    
    document.getElementById('popupProductName').textContent = name;
    document.getElementById('popupBasePrice').textContent = `Base Price: $${price.toFixed(2)}`;
    document.getElementById('popupQuantity').value = '1';
    document.getElementById('popupOfferPrice').value = '';
    
    popup.classList.add('active');
    overlay.classList.add('active');
}

// Close product price popup
function closeProductPopup() {
    const popup = document.getElementById('productPricePopup');
    const overlay = document.getElementById('popupOverlay');
    
    popup.classList.remove('active');
    overlay.classList.remove('active');
    
    // Uncheck the checkbox if cancelled
    if (currentProductForPopup && currentProductForPopup.checkbox) {
        const existingProduct = selectedOfferProducts.find(p => p.id === currentProductForPopup.id);
        if (!existingProduct) {
            currentProductForPopup.checkbox.checked = false;
        }
    }
    
    currentProductForPopup = null;
}

// Confirm product selection with price
function confirmProductSelection() {
    if (!currentProductForPopup) return;
    
    const quantity = parseInt(document.getElementById('popupQuantity').value) || 1;
    const offerPrice = parseFloat(document.getElementById('popupOfferPrice').value) || currentProductForPopup.basePrice;
    
    // Add or update the product
    const existingIndex = selectedOfferProducts.findIndex(p => p.id === currentProductForPopup.id);
    
    const productData = {
        id: currentProductForPopup.id,
        name: currentProductForPopup.name,
        basePrice: currentProductForPopup.basePrice,
        quantity: quantity,
        offerPrice: offerPrice
    };
    
    if (existingIndex >= 0) {
        selectedOfferProducts[existingIndex] = productData;
    } else {
        selectedOfferProducts.push(productData);
    }
    
    updateSelectedProductsSummary();
    closeProductPopup();
}

// Remove selected product
function removeSelectedProduct(productId) {
    selectedOfferProducts = selectedOfferProducts.filter(p => p.id !== productId);
    updateSelectedProductsSummary();
    updateProductCheckboxes();
}

// Update checkboxes based on selected products
function updateProductCheckboxes() {
    const checkboxes = document.querySelectorAll('#productsCheckboxList input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const productId = parseInt(checkbox.dataset.id);
        checkbox.checked = selectedOfferProducts.some(p => p.id === productId);
    });
}

// Update selected products summary
function updateSelectedProductsSummary() {
    const summaryContainer = document.getElementById('selectedProductsSummary');
    const summaryList = document.getElementById('selectedProductsList');
    
    if (selectedOfferProducts.length === 0) {
        summaryContainer.style.display = 'none';
        return;
    }
    
    summaryList.innerHTML = selectedOfferProducts.map(product => `
        <div class="selected-product-card">
            <div class="selected-product-info">
                <div class="selected-product-name">${product.name}</div>
                <div class="selected-product-details">
                    <span><i class="fas fa-tag"></i> $${product.offerPrice.toFixed(2)}</span>
                    <span><i class="fas fa-cube"></i> ${product.quantity} pcs</span>
                    <span class="base-price-info">Base: $${product.basePrice.toFixed(2)}</span>
                </div>
            </div>
            <div class="selected-product-actions">
                <button class="selected-product-edit" onclick="editSelectedProduct(${product.id})">
                    <i class="fas fa-pen"></i>
                </button>
                <button class="selected-product-remove" onclick="removeSelectedProduct(${product.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    summaryContainer.style.display = 'block';
}

// Edit selected product
function editSelectedProduct(productId) {
    const product = selectedOfferProducts.find(p => p.id === productId);
    if (!product) return;
    
    // Set current product for popup
    currentProductForPopup = {
        id: product.id,
        name: product.name,
        basePrice: product.basePrice,
        checkbox: null,
        isEditing: true
    };
    
    // Open popup with existing values
    const popup = document.getElementById('productPricePopup');
    const overlay = document.getElementById('popupOverlay');
    
    document.getElementById('popupProductName').textContent = product.name;
    document.getElementById('popupBasePrice').textContent = `Base Price: $${product.basePrice.toFixed(2)}`;
    document.getElementById('popupQuantity').value = product.quantity;
    document.getElementById('popupOfferPrice').value = product.offerPrice;
    
    popup.classList.add('active');
    overlay.classList.add('active');
}

// ==================== Preview Functions ====================

function updateOfferPreview() {
    // Status Badge
    const isActive = document.getElementById('offerActiveToggle')?.checked ?? true;
    const statusBadge = document.getElementById('previewStatusBadge');
    const statusText = document.getElementById('previewStatusText');
    
    if (statusBadge) {
        statusBadge.textContent = isActive ? 'Active' : 'Draft';
        statusBadge.className = 'status-badge ' + (isActive ? 'active' : 'draft');
        statusBadge.setAttribute('data-status', isActive ? 'active' : 'draft');
    }
    if (statusText) {
        statusText.innerHTML = isActive 
            ? '<span style="color: #059669;"><i class="fas fa-check-circle"></i> Active</span>' 
            : '<span style="color: #f59e0b;"><i class="fas fa-pause-circle"></i> Draft</span>';
    }
    
    // Basic Information
    const nameEn = document.getElementById('offerNameEn')?.value || '-';
    const nameAr = document.getElementById('offerNameAr')?.value || '-';
    const offerType = document.getElementById('offerType')?.value || 'happy-hour';
    const descEn = document.getElementById('offerDescEn')?.value || '-';
    const descAr = document.getElementById('offerDescAr')?.value || '-';
    
    document.getElementById('previewNameEn').textContent = nameEn || '-';
    document.getElementById('previewNameAr').textContent = nameAr || '-';
    document.getElementById('previewDescEn').textContent = descEn || '-';
    
    const previewDescAr = document.getElementById('previewDescAr');
    if (previewDescAr) {
        previewDescAr.textContent = descAr || '-';
    }
    
    // Offer type display name
    const typeNames = {
        'happy-hour': 'Happy Hour',
        'day-deal': 'Day Deal',
        'time-range': 'Time Range',
        'fixed-price': 'Fixed Price'
    };
    document.getElementById('previewOfferType').textContent = typeNames[offerType] || offerType;
    
    // Schedule section visibility
    const scheduleSection = document.getElementById('previewScheduleSection');
    const previewDaysItem = document.getElementById('previewDaysItem');
    const previewTimeItem = document.getElementById('previewTimeItem');
    const previewDateItem = document.getElementById('previewDateItem');
    const previewTimeContainer = document.getElementById('previewTimeContainer');
    
    let activeDaysCount = 0;
    
    if (offerType === 'fixed-price') {
        scheduleSection.style.display = 'none';
    } else {
        scheduleSection.style.display = 'block';
        
        // Days as tags
        if (offerType === 'day-deal' || offerType === 'happy-hour') {
            previewDaysItem.style.display = 'flex';
            const daysTags = document.getElementById('previewDaysTags');
            const activeDays = [];
            document.querySelectorAll('.day-btn.active').forEach(btn => {
                activeDays.push(btn.textContent);
            });
            activeDaysCount = activeDays.length;
            
            if (activeDays.length > 0) {
                daysTags.innerHTML = activeDays.map(day => 
                    `<span class="preview-tag" role="listitem">${day}</span>`
                ).join('');
            } else {
                daysTags.innerHTML = '<span class="preview-tag" style="color: #f59e0b; background: #fffbeb;">None selected</span>';
            }
        } else {
            previewDaysItem.style.display = 'none';
        }
        
        // Time
        if (offerType === 'happy-hour' || offerType === 'time-range') {
            previewTimeContainer.style.display = 'grid';
            previewTimeItem.style.display = 'flex';
            const startTime = document.getElementById('offerStartTime')?.value || '';
            const endTime = document.getElementById('offerEndTime')?.value || '';
            const formattedStart = formatTime12Hour(startTime);
            const formattedEnd = formatTime12Hour(endTime);
            document.getElementById('previewTime').textContent = `${formattedStart} – ${formattedEnd}`;
        } else {
            previewTimeContainer.style.display = 'none';
            previewTimeItem.style.display = 'none';
        }
        
        // Date Range
        if (offerType === 'time-range') {
            previewDateItem.style.display = 'flex';
            const startDate = document.getElementById('offerStartDate')?.value || '';
            const endDate = document.getElementById('offerEndDate')?.value || '';
            const formattedStartDate = formatDateNice(startDate);
            const formattedEndDate = formatDateNice(endDate);
            document.getElementById('previewDateRange').textContent = `${formattedStartDate} to ${formattedEndDate}`;
        } else {
            previewDateItem.style.display = 'none';
        }
    }
    
    // Products - Use step2SelectedProducts Map
    const productsList = document.getElementById('previewProductsList');
    const productsTable = document.getElementById('previewProductsTable');
    const noProductsMsg = document.getElementById('noProductsMsg');
    
    let totalSavings = 0;
    const productsArray = [];
    
    // Collect products from the step2SelectedProducts Map
    if (typeof step2SelectedProducts !== 'undefined' && step2SelectedProducts.size > 0) {
        step2SelectedProducts.forEach((data, productId) => {
            // Find product details from allProducts
            const product = allProducts.find(p => p.id === productId);
            if (product) {
                const qty = data.qty || 1;
                const offerPrice = data.offerPrice || product.price;
                const basePrice = product.price;
                const savings = (basePrice - offerPrice) * qty;
                totalSavings += savings;
                
                productsArray.push({
                    name: product.name,
                    qty: qty,
                    basePrice: basePrice,
                    offerPrice: offerPrice,
                    savings: savings
                });
            }
        });
    } else if (selectedOfferProducts && selectedOfferProducts.length > 0) {
        // Fallback to old array format
        selectedOfferProducts.forEach(product => {
            const savings = (product.basePrice - product.offerPrice) * product.quantity;
            totalSavings += savings;
            productsArray.push({
                name: product.name,
                qty: product.quantity,
                basePrice: product.basePrice,
                offerPrice: product.offerPrice,
                savings: savings
            });
        });
    }
    
    // Render products table
    if (productsArray.length === 0) {
        if (productsList) productsList.innerHTML = '';
        if (productsTable) productsTable.style.display = 'none';
        if (noProductsMsg) noProductsMsg.classList.add('visible');
    } else {
        if (noProductsMsg) noProductsMsg.classList.remove('visible');
        if (productsTable) productsTable.style.display = 'table';
        
        if (productsList) {
            productsList.innerHTML = productsArray.map(product => `
                <tr>
                    <td><span class="preview-product-name">${product.name}</span></td>
                    <td class="text-center"><span class="preview-product-qty">${product.qty}</span></td>
                    <td class="text-right"><span class="preview-original-price">$${product.basePrice.toFixed(2)}</span></td>
                    <td class="text-right"><span class="preview-offer-price">$${product.offerPrice.toFixed(2)}</span></td>
                    <td class="text-right">
                        <span class="preview-savings">
                            <i class="fas fa-arrow-down" aria-hidden="true"></i>
                            $${product.savings.toFixed(2)}
                        </span>
                    </td>
                </tr>
            `).join('');
        }
    }
    
    // Update stats
    document.getElementById('statProductCount').textContent = productsArray.length;
    document.getElementById('statTotalSavings').textContent = `$${totalSavings.toFixed(0)}`;
    document.getElementById('statDaysCount').textContent = activeDaysCount;
    
    // Update confirmation modal summary if it exists
    const confirmOfferName = document.getElementById('confirmOfferName');
    const confirmOfferStatus = document.getElementById('confirmOfferStatus');
    const confirmProductCount = document.getElementById('confirmProductCount');
    
    if (confirmOfferName) confirmOfferName.textContent = nameEn || '-';
    if (confirmOfferStatus) {
        confirmOfferStatus.innerHTML = isActive 
            ? '<span style="color: #059669;">Active</span>' 
            : '<span style="color: #f59e0b;">Draft</span>';
    }
    if (confirmProductCount) confirmProductCount.textContent = `${productsArray.length} item${productsArray.length !== 1 ? 's' : ''}`;
}

// Format time from 24-hour (HH:mm) to 12-hour (hh:mm AM/PM)
function formatTime12Hour(timeStr) {
    if (!timeStr) return '-';
    
    const [hours, minutes] = timeStr.split(':');
    const h = parseInt(hours, 10);
    const m = minutes;
    
    if (isNaN(h)) return '-';
    
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 || 12;
    
    return `${hour12}:${m} ${ampm}`;
}

// Format date from YYYY-MM-DD to readable format
function formatDateNice(dateStr) {
    if (!dateStr) return '-';
    
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '-';
    
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ============================================
// STEP 2: PRODUCTS SELECTION - NEW SYSTEM
// ============================================

// Enhanced product data with stock info
const allProducts = [
    // Burgers
    { id: 1, name: 'Classic Burger', price: 12.99, basePrice: 14.99, inStock: true, category: 'burgers' },
    { id: 2, name: 'Cheese Burger', price: 13.99, basePrice: 15.99, inStock: true, category: 'burgers' },
    { id: 3, name: 'Double Bacon Burger', price: 16.99, basePrice: 19.99, inStock: false, category: 'burgers' },
    { id: 4, name: 'Mushroom Swiss Burger', price: 14.99, basePrice: 17.99, inStock: true, category: 'burgers' },
    { id: 5, name: 'BBQ Ranch Burger', price: 15.49, basePrice: 18.49, inStock: true, category: 'burgers' },
    // Pizzas
    { id: 6, name: 'Margherita Pizza', price: 15.99, basePrice: 18.99, inStock: true, category: 'pizzas' },
    { id: 7, name: 'Pepperoni Pizza', price: 17.99, basePrice: 20.99, inStock: true, category: 'pizzas' },
    { id: 8, name: 'Supreme Pizza', price: 19.99, basePrice: 23.99, inStock: true, category: 'pizzas' },
    { id: 9, name: 'Hawaiian Pizza', price: 16.99, basePrice: 19.99, inStock: false, category: 'pizzas' },
    { id: 10, name: 'BBQ Chicken Pizza', price: 18.49, basePrice: 21.99, inStock: true, category: 'pizzas' },
    // Drinks
    { id: 11, name: 'Coca Cola', price: 2.99, basePrice: 3.49, inStock: true, category: 'drinks' },
    { id: 12, name: 'Sprite', price: 2.99, basePrice: 3.49, inStock: true, category: 'drinks' },
    { id: 13, name: 'Fresh Orange Juice', price: 4.99, basePrice: 5.99, inStock: true, category: 'drinks' },
    { id: 14, name: 'Mango Smoothie', price: 5.99, basePrice: 7.49, inStock: false, category: 'drinks' },
    { id: 15, name: 'Iced Coffee', price: 4.49, basePrice: 5.49, inStock: true, category: 'drinks' },
    // Desserts
    { id: 16, name: 'Chocolate Brownie', price: 5.99, basePrice: 7.49, inStock: true, category: 'desserts' },
    { id: 17, name: 'Cheesecake Slice', price: 6.49, basePrice: 8.49, inStock: true, category: 'desserts' },
    { id: 18, name: 'Ice Cream Sundae', price: 4.99, basePrice: 6.49, inStock: true, category: 'desserts' },
    { id: 19, name: 'Apple Pie', price: 5.49, basePrice: 6.99, inStock: false, category: 'desserts' },
    // Sides
    { id: 20, name: 'French Fries', price: 3.49, basePrice: 4.49, inStock: true, category: 'sides' },
    { id: 21, name: 'Onion Rings', price: 4.49, basePrice: 5.49, inStock: true, category: 'sides' },
    { id: 22, name: 'Mozzarella Sticks', price: 5.99, basePrice: 7.49, inStock: true, category: 'sides' },
    { id: 23, name: 'Chicken Wings (6pc)', price: 8.99, basePrice: 10.99, inStock: true, category: 'sides' },
    { id: 24, name: 'Garlic Bread', price: 3.99, basePrice: 4.99, inStock: false, category: 'sides' }
];

// Selection state: Map<productId, { id, qty, offerPrice }>
let step2SelectedProducts = new Map();
let step2SearchTerm = '';
let step2FilterInStock = false;
let step2SelectedCategory = '';
let step2Initialized = false;

// Initialize Step 2 when modal opens or step changes
function initStep2Products() {
    if (step2Initialized) return;
    step2Initialized = true;
    
    // Category selector
    const categorySelect = document.getElementById('offerCategorySelect');
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            step2SelectedCategory = this.value;
            renderStep2Products();
        });
    }
    
    // Search input
    const searchInput = document.getElementById('productsSearchInput');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                step2SearchTerm = this.value.toLowerCase().trim();
                renderStep2Products();
            }, 200);
        });
    }
    
    // In-stock filter
    const inStockFilter = document.getElementById('inStockFilter');
    if (inStockFilter) {
        inStockFilter.addEventListener('change', function() {
            step2FilterInStock = this.checked;
            renderStep2Products();
        });
    }
    
    // Bulk actions
    const selectAllBtn = document.getElementById('selectAllPageBtn');
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', selectAllVisibleProducts);
    }
    
    const clearPageBtn = document.getElementById('clearPageBtn');
    if (clearPageBtn) {
        clearPageBtn.addEventListener('click', clearVisibleProducts);
    }
    
    // Toggle selected panel
    const toggleBtn = document.getElementById('toggleSelectedPanel');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const content = document.getElementById('selectedPanelContent');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('collapsed', isExpanded);
        });
    }
    
    // Initial render
    renderStep2Products();
    renderSelectedProductsPanel();
}

// Get filtered products based on current filters
function getFilteredProducts() {
    return allProducts.filter(product => {
        // Category filter
        if (step2SelectedCategory && product.category !== step2SelectedCategory) {
            return false;
        }
        
        // Search filter
        if (step2SearchTerm && !product.name.toLowerCase().includes(step2SearchTerm)) {
            return false;
        }
        
        // In-stock filter
        if (step2FilterInStock && !product.inStock) {
            return false;
        }
        
        return true;
    });
}

// Render products table
function renderStep2Products() {
    const tbody = document.getElementById('productsTableBody');
    const loadingState = document.getElementById('productsLoadingState');
    const emptyState = document.getElementById('productsEmptyState');
    const table = document.querySelector('.products-table');
    
    if (!tbody) return;
    
    // Show loading briefly
    if (loadingState) loadingState.style.display = 'block';
    if (emptyState) emptyState.style.display = 'none';
    if (table) table.style.display = 'none';
    
    setTimeout(() => {
        const filteredProducts = getFilteredProducts();
        
        if (loadingState) loadingState.style.display = 'none';
        
        if (filteredProducts.length === 0) {
            if (emptyState) emptyState.style.display = 'flex';
            if (table) table.style.display = 'none';
            return;
        }
        
        if (table) table.style.display = 'table';
        if (emptyState) emptyState.style.display = 'none';
        
        tbody.innerHTML = filteredProducts.map(product => {
            const isSelected = step2SelectedProducts.has(product.id);
            const stockClass = product.inStock ? '' : 'out-of-stock';
            const selectedClass = isSelected ? 'selected' : '';
            const stockBadge = product.inStock 
                ? '<span class="stock-badge in-stock">In Stock</span>'
                : '<span class="stock-badge out-of-stock">Out of Stock</span>';
            
            return `
                <tr class="${stockClass} ${selectedClass}" 
                    data-product-id="${product.id}"
                    tabindex="0"
                    role="row"
                    aria-selected="${isSelected}"
                    onclick="toggleProductSelection(${product.id}, event)"
                    onkeydown="handleProductRowKeydown(event, ${product.id})">
                    <td class="col-checkbox" data-label="">
                        <input type="checkbox" 
                               class="product-row-checkbox"
                               ${isSelected ? 'checked' : ''}
                               ${!product.inStock ? 'disabled' : ''}
                               aria-label="Select ${product.name}"
                               onchange="toggleProductSelection(${product.id}, event)"
                               onclick="event.stopPropagation()">
                    </td>
                    <td class="col-name" data-label="Product">
                        <div class="product-name-cell">
                            <span class="product-name-text">${product.name}</span>
                        </div>
                    </td>
                    <td class="col-price" data-label="Offer Price">$${product.price.toFixed(2)}</td>
                    <td class="col-base-price" data-label="Base Price">$${product.basePrice.toFixed(2)}</td>
                    <td class="col-stock" data-label="Stock">${stockBadge}</td>
                </tr>
            `;
        }).join('');
        
        announceSelection();
    }, 150);
}

// Toggle product selection
function toggleProductSelection(productId, event) {
    if (event) event.stopPropagation();
    
    const product = allProducts.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    if (step2SelectedProducts.has(productId)) {
        step2SelectedProducts.delete(productId);
    } else {
        step2SelectedProducts.set(productId, { id: productId, qty: 1, offerPrice: product.price });
    }
    
    // Update row appearance
    const row = document.querySelector(`tr[data-product-id="${productId}"]`);
    if (row) {
        const isSelected = step2SelectedProducts.has(productId);
        row.classList.toggle('selected', isSelected);
        row.setAttribute('aria-selected', isSelected);
        const checkbox = row.querySelector('.product-row-checkbox');
        if (checkbox) checkbox.checked = isSelected;
    }
    
    renderSelectedProductsPanel();
    updateStep2NextButton();
    announceSelection();
}

// Handle keyboard navigation on product rows
function handleProductRowKeydown(event, productId) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleProductSelection(productId, event);
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        const nextRow = event.target.nextElementSibling;
        if (nextRow) nextRow.focus();
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        const prevRow = event.target.previousElementSibling;
        if (prevRow) prevRow.focus();
    }
}

// Select all visible products
function selectAllVisibleProducts() {
    const filteredProducts = getFilteredProducts();
    filteredProducts.forEach(product => {
        if (product.inStock && !step2SelectedProducts.has(product.id)) {
            step2SelectedProducts.set(product.id, { id: product.id, qty: 1, offerPrice: product.price });
        }
    });
    renderStep2Products();
    renderSelectedProductsPanel();
    updateStep2NextButton();
    announceSelection();
}

// Clear selection for visible products
function clearVisibleProducts() {
    const filteredProducts = getFilteredProducts();
    filteredProducts.forEach(product => {
        step2SelectedProducts.delete(product.id);
    });
    renderStep2Products();
    renderSelectedProductsPanel();
    updateStep2NextButton();
    announceSelection();
}

// Render selected products panel
function renderSelectedProductsPanel() {
    const emptyState = document.getElementById('selectedEmptyState');
    const listContainer = document.getElementById('selectedProductsList');
    const summaryFooter = document.getElementById('selectedSummaryFooter');
    const panelTitle = document.querySelector('.selected-panel-title');
    const toolbarCountBadge = document.getElementById('selectedCountBadge');
    
    if (!listContainer) return;
    
    const selectedCount = step2SelectedProducts.size;
    
    // Update toolbar counter badge
    if (toolbarCountBadge) {
        toolbarCountBadge.textContent = selectedCount;
    }
    
    // Update title badge
    if (panelTitle) {
        const existingBadge = panelTitle.querySelector('.counter-badge');
        if (existingBadge) existingBadge.remove();
        if (selectedCount > 0) {
            const badge = document.createElement('span');
            badge.className = 'counter-badge';
            badge.textContent = selectedCount;
            panelTitle.appendChild(badge);
        }
    }
    
    if (selectedCount === 0) {
        if (emptyState) emptyState.style.display = 'flex';
        if (listContainer) listContainer.style.display = 'none';
        if (summaryFooter) summaryFooter.style.display = 'none';
        return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    if (listContainer) listContainer.style.display = 'block';
    if (summaryFooter) summaryFooter.style.display = 'block';
    
    // Get selected product details
    const selectedItems = Array.from(step2SelectedProducts.values()).map(item => {
        const product = allProducts.find(p => p.id === item.id);
        return { ...product, qty: item.qty, offerPrice: item.offerPrice };
    });
    
    listContainer.innerHTML = selectedItems.map(item => `
        <div class="selected-product-item" data-product-id="${item.id}">
            <div class="selected-item-header">
                <span class="selected-item-name">${item.name}</span>
                <button class="selected-item-remove" 
                        onclick="removeFromSelected(${item.id})"
                        aria-label="Remove ${item.name}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="selected-item-prices">
                <div class="offer-price-input-group">
                    <label class="offer-price-label">Offer Price</label>
                    <div class="offer-price-input-wrapper">
                        <span class="currency-symbol">$</span>
                        <input type="number" 
                               class="offer-price-input" 
                               value="${item.offerPrice.toFixed(2)}" 
                               step="0.01" 
                               min="0"
                               onchange="updateProductOfferPrice(${item.id}, this.value)"
                               aria-label="Offer price for ${item.name}">
                    </div>
                </div>
                <span class="selected-item-base-price">Base: $${item.basePrice.toFixed(2)}</span>
            </div>
            <div class="qty-stepper">
                <button class="qty-stepper-btn" 
                        onclick="updateProductQty(${item.id}, -1)"
                        ${item.qty <= 1 ? 'disabled' : ''}
                        aria-label="Decrease quantity">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="qty-stepper-value">${item.qty}</span>
                <button class="qty-stepper-btn" 
                        onclick="updateProductQty(${item.id}, 1)"
                        aria-label="Increase quantity">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Update summary
    const totalItems = selectedItems.length;
    const totalQty = selectedItems.reduce((sum, item) => sum + item.qty, 0);
    const totalValue = selectedItems.reduce((sum, item) => sum + (item.offerPrice * item.qty), 0);
    
    const totalItemsEl = document.getElementById('totalItemsCount');
    const totalQtyEl = document.getElementById('totalQtyCount');
    const totalValueEl = document.getElementById('totalOfferValue');
    
    if (totalItemsEl) totalItemsEl.textContent = totalItems;
    if (totalQtyEl) totalQtyEl.textContent = totalQty;
    if (totalValueEl) totalValueEl.textContent = `$${totalValue.toFixed(2)}`;
}

// Remove product from selection
function removeFromSelected(productId) {
    step2SelectedProducts.delete(productId);
    renderStep2Products();
    renderSelectedProductsPanel();
    updateStep2NextButton();
    announceSelection();
}

// Update product quantity
function updateProductQty(productId, delta) {
    const item = step2SelectedProducts.get(productId);
    if (!item) return;
    
    const newQty = Math.max(1, item.qty + delta);
    step2SelectedProducts.set(productId, { ...item, qty: newQty });
    
    renderSelectedProductsPanel();
}

// Update product offer price
function updateProductOfferPrice(productId, newPrice) {
    const item = step2SelectedProducts.get(productId);
    if (!item) return;
    
    const price = parseFloat(newPrice) || 0;
    step2SelectedProducts.set(productId, { ...item, offerPrice: price });
    
    // Update summary without full re-render
    updateSelectedSummary();
}

// Update just the summary footer
function updateSelectedSummary() {
    const selectedItems = Array.from(step2SelectedProducts.values()).map(item => {
        const product = allProducts.find(p => p.id === item.id);
        return { ...product, qty: item.qty, offerPrice: item.offerPrice };
    });
    
    const totalItems = selectedItems.length;
    const totalQty = selectedItems.reduce((sum, item) => sum + item.qty, 0);
    const totalValue = selectedItems.reduce((sum, item) => sum + (item.offerPrice * item.qty), 0);
    
    const totalItemsEl = document.getElementById('totalItemsCount');
    const totalQtyEl = document.getElementById('totalQtyCount');
    const totalValueEl = document.getElementById('totalOfferValue');
    
    if (totalItemsEl) totalItemsEl.textContent = totalItems;
    if (totalQtyEl) totalQtyEl.textContent = totalQty;
    if (totalValueEl) totalValueEl.textContent = `$${totalValue.toFixed(2)}`;
}

// Announce selection change for screen readers
function announceSelection() {
    const announcer = document.getElementById('selectionAnnouncer');
    if (announcer) {
        const count = step2SelectedProducts.size;
        announcer.textContent = `${count} product${count !== 1 ? 's' : ''} selected`;
    }
}

// Update Next button state for Step 2
function updateStep2NextButton() {
    const nextBtn = document.getElementById('offerNextBtn');
    if (nextBtn && currentOfferStep === 2) {
        const hasProducts = step2SelectedProducts.size > 0;
        nextBtn.disabled = !hasProducts;
        nextBtn.setAttribute('aria-disabled', !hasProducts);
    }
}

// Validate Step 2
function validateStep2() {
    if (step2SelectedProducts.size === 0) {
        // Show error
        const announcer = document.getElementById('selectionAnnouncer');
        if (announcer) {
            announcer.textContent = 'Please select at least one product before proceeding.';
        }
        return false;
    }
    return true;
}

// Collect Step 2 data for preview/publish
function collectStep2Data() {
    return Array.from(step2SelectedProducts.values()).map(item => {
        const product = allProducts.find(p => p.id === item.id);
        return {
            id: product.id,
            name: product.name,
            offerPrice: item.offerPrice,
            basePrice: product.basePrice,
            quantity: item.qty
        };
    });
}

// Collect products for publishing - supports both new Map and old array format
function collectProductsForPublish() {
    // Try new step2SelectedProducts Map first
    if (typeof step2SelectedProducts !== 'undefined' && step2SelectedProducts.size > 0) {
        return Array.from(step2SelectedProducts.values()).map(item => {
            const product = allProducts.find(p => p.id === item.id);
            return {
                id: product?.id || item.id,
                name: product?.name || 'Unknown Product',
                offerPrice: item.offerPrice || product?.price || 0,
                basePrice: product?.price || 0,
                quantity: item.qty || 1
            };
        });
    }
    
    // Fallback to old selectedOfferProducts array
    if (typeof selectedOfferProducts !== 'undefined' && selectedOfferProducts.length > 0) {
        return [...selectedOfferProducts];
    }
    
    return [];
}

// Reset Step 2 state
function resetStep2() {
    step2SelectedProducts.clear();
    step2SearchTerm = '';
    step2FilterInStock = false;
    step2SelectedCategory = '';
    step2Initialized = false;
    
    // Reset UI elements
    const searchInput = document.getElementById('productsSearchInput');
    if (searchInput) searchInput.value = '';
    
    const inStockFilter = document.getElementById('inStockFilter');
    if (inStockFilter) inStockFilter.checked = false;
    
    const categorySelect = document.getElementById('offerCategorySelect');
    if (categorySelect) categorySelect.value = '';
}
