import { ref, computed, type Ref, type ComputedRef } from 'vue';
import { useRoute } from 'vue-router';

export interface UseNavigationReturn {
  isMenuOpen: Ref<boolean>;
  toggleMenu: () => void;
  closeMenu: () => void;
  currentRoute: ComputedRef<string>;
}

export function useNavigation(): UseNavigationReturn {
  const route = useRoute();
  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
  };

  const currentRoute = computed(() => route.path);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    currentRoute,
  };
}
