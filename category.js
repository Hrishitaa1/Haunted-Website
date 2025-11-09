// Trigger animations for categories when the page loads
window.onload = function () {
  const categories = document.querySelectorAll('.category');

  // Staggered animation for each category
  categories.forEach((category, index) => {
    setTimeout(() => {
      category.classList.add('show');
    }, index * 500); // Add a delay for each category
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("animate-left")) {
          entry.target.classList.add("show");
        } else if (entry.target.classList.contains("animate-right")) {
          entry.target.classList.add("show");
        }
        observer.unobserve(entry.target); // Stop observing once the animation has triggered
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Select all description items and assign left or right animation
  const descriptionItems = document.querySelectorAll(".description-item");
  descriptionItems.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add("animate-left");
    } else {
      item.classList.add("animate-right");
    }
    observer.observe(item);
  });
});
// for start button 

document.addEventListener("DOMContentLoaded", () => {
    const startButtons = document.querySelectorAll('.start-btn');

    startButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetCategory = document.getElementById(button.getAttribute('data-target'));
            if (targetCategory) {
                targetCategory.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("animate-left")) {
                    entry.target.classList.add("show");
                } else if (entry.target.classList.contains("animate-right")) {
                    entry.target.classList.add("show");
                }
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const descriptionItems = document.querySelectorAll(".description-item");
    descriptionItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.classList.add("animate-left");
        } else {
            item.classList.add("animate-right");
        }
        observer.observe(item);
    });
});
// to scroll to main category
document.addEventListener("DOMContentLoaded", () => {
    // Add click event listener to each category
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            // Get the category id
            const categoryId = category.id;
            // Map the category to its description box
            const descriptionId = "description-" + categoryId.split('-')[1]; // e.g., category-1 => description-1
            const descriptionBox = document.getElementById(descriptionId);
            
            // Scroll to the description box
            if (descriptionBox) {
                descriptionBox.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("animate-left")) {
                    entry.target.classList.add("show");
                } else if (entry.target.classList.contains("animate-right")) {
                    entry.target.classList.add("show");
                }
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const descriptionItems = document.querySelectorAll(".description-item");
    descriptionItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.classList.add("animate-left");
        } else {
            item.classList.add("animate-right");
        }
        observer.observe(item);
    });
});
