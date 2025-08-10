document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('portfolio-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalClose = document.querySelector('.modal-close');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('click', function () {
            // Ambil judul
            const title = item.querySelector('.title-portfolio');
            // Ambil gambar (jika ada)
            const image = item.querySelector('.image-portfolio');
            // Ambil deskripsi
            const description = item.querySelector('.description-portfolio');

            // Isi modal
            modalTitle.innerHTML = title ? title.outerHTML : '';
            modalImage.innerHTML = image ? image.outerHTML : '';
            modalDescription.innerHTML = description ? description.innerHTML : '';

            // Tampilkan modal
            modal.classList.add('show');
        });
    });

    // Tombol close
    modalClose.addEventListener('click', function () {
        modal.classList.remove('show');
    });

    // Klik di luar modal-content untuk menutup
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});