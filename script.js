const loadReviews = () => {
  console.log("loading reviews");
  const container = document.querySelector("#reviews-list");
  for (const review of reviews) {
    const el = createReviewElement(review);
    console.log(el);
    container.appendChild(el);
  }
};

const handleReviewSubmit = () => {
  console.log("handleReviewSubmit called!");
};
document.addEventListener("DOMContentLoaded", loadReviews);
document.addEventListener("click", handleReviewSubmit);

const createReviewElement = (review) => {
  console.log(review);
  const reviewElement = document.createElement("div");
  reviewElement.className = "review-item";
  reviewElement.innerHTML = `
  <p class = "book-title">${review.title}</p> 
  <p>Rating: ${review.ratomgs} </p>
  <button> Likes: ${review.likes} </button> 
  <button> Reposts: ${review.reposts} </button>`;
  return reviewElement;
};
