import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.getElementsByClassName("anim");
      const scrollY = window.scrollY;

      Array.from(sections).forEach((sec) => {
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;

        if (scrollY >= offset && scrollY < offset + height) {
          sec.classList.add("anim");
        } else {
          sec.classList.remove("anim");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // You can render null since this component handles the scroll behavior only
};

export default ScrollAnimation;
