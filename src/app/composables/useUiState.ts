// See /docs/2. Features/UI State.md

const state = reactive({
  isNavigationSidebarOpen: false,
});

export function useUiState() {
  const isNavigationSidebarOpen = computed(() => state.isNavigationSidebarOpen);
  function toggleNavigationSidebar(shouldOpen?: boolean) {
    state.isNavigationSidebarOpen = toggle(state.isNavigationSidebarOpen, shouldOpen);
  }

  return {
    isNavigationSidebarOpen,
    toggleNavigationSidebar,
  };
}

function toggle(currentState: boolean, shouldOpen?: boolean) {
  return typeof shouldOpen !== 'undefined' ? shouldOpen : !currentState;
}
