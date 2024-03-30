export const scrollToSection = (sectionId, gap = 100) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const topOffset = section.offsetTop - gap;
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  }
}
