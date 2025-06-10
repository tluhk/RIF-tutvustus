// Ostunimekirja rakenduse klass
class ShoppingListApp {
    constructor() {
        this.items = [];
        this.currentFilter = 'all';
        this.editingItemId = null;
        this.nextId = 1;
        
        this.init();
        this.loadFromStorage();
    }

    // Rakenduse initsialiseerimine
    init() {
        this.bindEvents();
        this.updateDisplay();
    }

    // Sündmuste sidujad
    bindEvents() {
        // Toote lisamise vorm
        const addForm = document.getElementById('add-item-form');
        addForm.addEventListener('submit', (e) => this.handleAddItem(e));

        // Filtreerimise nupud
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterChange(e));
        });

        // Ostetud toodete eemaldamine
        const clearCompletedBtn = document.getElementById('clear-completed');
        clearCompletedBtn.addEventListener('click', () => this.clearCompleted());

        // Modal sündmused
        const closeModalBtn = document.getElementById('close-modal');
        const cancelEditBtn = document.getElementById('cancel-edit');
        const editForm = document.getElementById('edit-form');
        const modal = document.getElementById('edit-modal');

        closeModalBtn.addEventListener('click', () => this.closeModal());
        cancelEditBtn.addEventListener('click', () => this.closeModal());
        editForm.addEventListener('submit', (e) => this.handleEditSubmit(e));
        
        // Modal sulgemine klõpsuga taustale
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // ESC klahv modali sulgemiseks
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                this.closeModal();
            }
        });
    }

    // Toote lisamine
    handleAddItem(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('item-name');
        const quantityInput = document.getElementById('item-quantity');
        
        const name = nameInput.value.trim();
        const quantity = parseInt(quantityInput.value) || 1;
        
        if (name) {
            this.addItem(name, quantity);
            nameInput.value = '';
            quantityInput.value = '1';
            nameInput.focus();
        }
    }

    // Uue toote lisamine nimekirja
    addItem(name, quantity = 1) {
        const item = {
            id: this.nextId++,
            name: name,
            quantity: quantity,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.items.unshift(item); // Lisa algusesse
        this.saveToStorage();
        this.updateDisplay();
        this.showNotification(`"${name}" lisatud nimekirja`, 'success');
    }

    // Toote kustutamine
    deleteItem(id) {
        const item = this.items.find(item => item.id === id);
        if (item && confirm(`Kas soovid kustutada "${item.name}"?`)) {
            this.items = this.items.filter(item => item.id !== id);
            this.saveToStorage();
            this.updateDisplay();
            this.showNotification(`"${item.name}" kustutatud`, 'info');
        }
    }

    // Toote oleku muutmine (ostetud/ostmata)
    toggleItem(id) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.completed = !item.completed;
            this.saveToStorage();
            this.updateDisplay();
            
            const status = item.completed ? 'ostetud' : 'ostmata';
            this.showNotification(`"${item.name}" märgitud kui ${status}`, 'success');
        }
    }

    // Toote muutmise modali avamine
    editItem(id) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            this.editingItemId = id;
            
            const modal = document.getElementById('edit-modal');
            const nameInput = document.getElementById('edit-item-name');
            const quantityInput = document.getElementById('edit-item-quantity');
            
            nameInput.value = item.name;
            quantityInput.value = item.quantity;
            
            modal.classList.add('show');
            nameInput.focus();
        }
    }

    // Toote muutmise vormi esitamine
    handleEditSubmit(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('edit-item-name');
        const quantityInput = document.getElementById('edit-item-quantity');
        
        const name = nameInput.value.trim();
        const quantity = parseInt(quantityInput.value) || 1;
        
        if (name && this.editingItemId) {
            const item = this.items.find(item => item.id === this.editingItemId);
            if (item) {
                item.name = name;
                item.quantity = quantity;
                this.saveToStorage();
                this.updateDisplay();
                this.closeModal();
                this.showNotification(`"${name}" uuendatud`, 'success');
            }
        }
    }

    // Modali sulgemine
    closeModal() {
        const modal = document.getElementById('edit-modal');
        modal.classList.remove('show');
        this.editingItemId = null;
    }

    // Filtri muutmine
    handleFilterChange(e) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        e.target.classList.add('active');
        this.currentFilter = e.target.dataset.filter;
        this.updateDisplay();
    }

    // Ostetud toodete kustutamine
    clearCompleted() {
        const completedItems = this.items.filter(item => item.completed);
        if (completedItems.length > 0 && confirm(`Kas soovid kustutada ${completedItems.length} ostetud toodet?`)) {
            this.items = this.items.filter(item => !item.completed);
            this.saveToStorage();
            this.updateDisplay();
            this.showNotification(`${completedItems.length} ostetud toodet kustutatud`, 'info');
        }
    }

    // Filteeritud toodete saamine
    getFilteredItems() {
        switch (this.currentFilter) {
            case 'completed':
                return this.items.filter(item => item.completed);
            case 'pending':
                return this.items.filter(item => !item.completed);
            default:
                return this.items;
        }
    }

    // Kuva uuendamine
    updateDisplay() {
        this.renderItems();
        this.updateStats();
        this.updateEmptyState();
    }

    // Toodete renderdamine
    renderItems() {
        const list = document.getElementById('shopping-list');
        const filteredItems = this.getFilteredItems();
        
        list.innerHTML = '';
        
        filteredItems.forEach(item => {
            const li = document.createElement('li');
            li.className = `shopping-item ${item.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <div class="item-checkbox ${item.completed ? 'checked' : ''}" 
                     onclick="app.toggleItem(${item.id})"></div>
                <div class="item-content">
                    <span class="item-text">${this.escapeHtml(item.name)}</span>
                    <span class="item-quantity">${item.quantity} tk</span>
                </div>
                <div class="item-actions">
                    <button class="edit-btn" onclick="app.editItem(${item.id})" title="Muuda">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn" onclick="app.deleteItem(${item.id})" title="Kustuta">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            list.appendChild(li);
        });
    }

    // Statistika uuendamine
    updateStats() {
        const totalItems = this.items.length;
        const completedItems = this.items.filter(item => item.completed).length;
        const remainingItems = totalItems - completedItems;
        
        document.getElementById('total-items').textContent = totalItems;
        document.getElementById('completed-items').textContent = completedItems;
        document.getElementById('remaining-items').textContent = remainingItems;
    }

    // Tühja oleku uuendamine
    updateEmptyState() {
        const emptyState = document.getElementById('empty-state');
        const filteredItems = this.getFilteredItems();
        
        if (filteredItems.length === 0 && this.items.length === 0) {
            emptyState.classList.add('show');
        } else {
            emptyState.classList.remove('show');
        }
    }

    // HTML escape funktsioon turvalisuse jaoks
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }

    // Andmete salvestamine kohalikku salvestusruumi
    saveToStorage() {
        try {
            const data = {
                items: this.items,
                nextId: this.nextId
            };
            localStorage.setItem('shoppingList', JSON.stringify(data));
        } catch (error) {
            console.error('Viga andmete salvestamisel:', error);
            this.showNotification('Viga andmete salvestamisel', 'error');
        }
    }

    // Andmete laadimine kohalikust salvestusruumist
    loadFromStorage() {
        try {
            const data = localStorage.getItem('shoppingList');
            if (data) {
                const parsed = JSON.parse(data);
                this.items = parsed.items || [];
                this.nextId = parsed.nextId || 1;
                this.updateDisplay();
            }
        } catch (error) {
            console.error('Viga andmete laadimisel:', error);
            this.showNotification('Viga andmete laadimisel', 'error');
        }
    }

    // Teatise kuvamine
    showNotification(message, type = 'info') {
        // Eemalda vanad teatised
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Loo uus teatis
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;

        // Lisa stiilid
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: this.getNotificationColor(type),
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            zIndex: '9999',
            animation: 'slideInRight 0.3s ease',
            maxWidth: '400px',
            wordWrap: 'break-word'
        });

        // Lisa animatsiooni stiil
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideOutRight {
                    from {
                        opacity: 1;
                        transform: translateX(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Eemalda teatis automaatselt
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }

    // Teatise ikooni määramine
    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            info: 'info-circle',
            warning: 'exclamation-triangle'
        };
        return icons[type] || 'info-circle';
    }

    // Teatise värvi määramine
    getNotificationColor(type) {
        const colors = {
            success: 'linear-gradient(135deg, #28a745, #20c997)',
            error: 'linear-gradient(135deg, #dc3545, #c82333)',
            info: 'linear-gradient(135deg, #17a2b8, #138496)',
            warning: 'linear-gradient(135deg, #ffc107, #e0a800)'
        };
        return colors[type] || colors.info;
    }

    // Andmete eksportimine JSON formaadis
    exportData() {
        const data = {
            items: this.items,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `ostunimekiri_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url);
        this.showNotification('Andmed eksporditud', 'success');
    }

    // Andmete importimine
    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.items && Array.isArray(data.items)) {
                    if (confirm('Kas soovid asendada praeguse nimekirja imporditud andmetega?')) {
                        this.items = data.items;
                        this.nextId = Math.max(...this.items.map(item => item.id), 0) + 1;
                        this.saveToStorage();
                        this.updateDisplay();
                        this.showNotification('Andmed edukalt imporditud', 'success');
                    }
                } else {
                    throw new Error('Vigane failivorming');
                }
            } catch (error) {
                console.error('Import error:', error);
                this.showNotification('Viga andmete importimisel', 'error');
            }
        };
        reader.readAsText(file);
    }
}

// Rakenduse käivitamine
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new ShoppingListApp();
    
    // Lisa klaviatuuri otseteed
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + E ekspordiks
        if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
            e.preventDefault();
            app.exportData();
        }
        
        // Ctrl/Cmd + N uue toote lisamiseks
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            document.getElementById('item-name').focus();
        }
    });
    
    // Drag & drop import funktsioon
    const container = document.querySelector('.container');
    
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        container.style.opacity = '0.8';
    });
    
    container.addEventListener('dragleave', (e) => {
        e.preventDefault();
        container.style.opacity = '1';
    });
    
    container.addEventListener('drop', (e) => {
        e.preventDefault();
        container.style.opacity = '1';
        
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type === 'application/json') {
            app.importData(files[0]);
        }
    });
});

// Service Worker registreerimine (kui soovite offline funktsionaalsust)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
