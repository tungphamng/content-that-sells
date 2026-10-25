export const HEADER_OFFSET = 88;

export function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export function scrollToRegisterSection() {
  scrollToHash("#dang-ky");
}
