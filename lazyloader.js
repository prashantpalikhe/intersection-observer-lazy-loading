class LazyLoader {
    constructor(selector) {
        this.lazyImages = [...document.querySelectorAll(selector)];

        if (this.lazyImages.length > 0) {
            this.observe();
        }
    }

    getObserver() {
        if (!this.observer) {
            this.observer = new IntersectionObserver(changes => {
                changes.forEach(change => {
                    change.target.src = change.target.dataset.src;

                    this.observer.unobserve(change.target);
                });
            });
        }

        return this.observer;
    }

    observe() {
        const observer = this.getObserver();

        this.lazyImages.forEach(img => {
            observer.observe(img);
        });
    }
}
