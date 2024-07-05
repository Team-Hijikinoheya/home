// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // ドロップダウンメニューのクリックイベント
    document.querySelectorAll('.dropdown-toggle').forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();
            const dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // ドキュメントのクリックイベントでメニューを閉じる
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-content').forEach(function(menu) {
                menu.style.display = 'none';
            });
        }
    });
});
