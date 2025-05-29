<template>
  <footer>
    <RouterLink to="/terms">Terms and Conditions</RouterLink> |
    <RouterLink to="/privacy">Privacy Policy</RouterLink>
  </footer>
</template>
<style scoped lang="scss">
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--app-bg-color);
  gap: 1rem;
  a,
  .router-link-active {
    color: var(--app-text-color);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 400px) {
  footer {
    font-size: 0.875rem;
  }
}
@media (max-width: 300px) {
  footer {
    font-size: 0.75rem;
  }
}
</style>
