export const formatPrice = (price) => {
  if (price >= 1000000000) {
    return (price / 1000000000).toFixed(1) + " tỷ";
  } else if (price >= 1000000) {
    return (price / 1000000).toFixed(0) + " triệu";
  }
  return price.toLocaleString("vi-VN");
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN");
};

export const getStatusBadge = (status) => {
  const badges = {
    vip: "vip-badge px-2 py-1 rounded text-xs font-bold",
    hot: "hot-badge px-2 py-1 rounded text-xs font-bold text-white",
    new: "new-badge px-2 py-1 rounded text-xs font-bold text-white",
  };
  return badges[status] || "";
};

export const getCategoryName = (category) => {
  const names = {
    apartment: "Căn hộ chung cư",
    house: "Nhà riêng",
    villa: "Biệt thự",
    shophouse: "Nhà mặt phố",
    office: "Văn phòng",
  };
  return names[category] || category;
};

export const animateCounters = () => {
  const counters = document.querySelectorAll(".stats-counter");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const increment = target / 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current).toLocaleString();
      }
    }, 20);
  });
};
