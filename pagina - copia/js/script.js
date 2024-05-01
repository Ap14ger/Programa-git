document.addEventListener('DOMContentLoaded', function () {
    const inventoryItems = document.querySelectorAll('.inventory-item');
  
    function toggleInventoryDetails() {
      this.classList.toggle('active');
    }
  
    inventoryItems.forEach(item => {
      item.addEventListener('click', toggleInventoryDetails);
    });
  });
  