const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        const openMenuBtn = document.getElementById('openMenu');
        const closeMenuBtn = document.getElementById('closeMenu');

        function openMenu() {
            sidebar.classList.add('mobile-visible');
            overlay.classList.add('active');
        }

        function closeMenu() {
            sidebar.classList.remove('mobile-visible');
            overlay.classList.remove('active');
        }

        openMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);

        // Handle nav item clicks
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all nav items
                navItems.forEach(nav => nav.classList.remove('active'));
                // Add active class to clicked item
                this.classList.add('active');
                
                // Close menu on mobile
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
            });
        });

        // Handle sidebar status badge clicks
        const sidebarBadges = document.querySelectorAll('.sidebar-badge');
        sidebarBadges.forEach(badge => {
            badge.addEventListener('click', function() {
                // Toggle selected class
                this.classList.toggle('selected');
            });
        });

        // Handle mobile status badge clicks
        const mobileBadges = document.querySelectorAll('.status-section .badge');
        mobileBadges.forEach(badge => {
            badge.addEventListener('click', function() {
                // Toggle selected class
                this.classList.toggle('selected');
            });
        });