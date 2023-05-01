function useBackToTop() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };
  return backToTop;
}

export default useBackToTop;
