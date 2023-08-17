import { create } from 'zustand'

interface UiState {
  footerDisplay: boolean
  /**
   * 如果在页面中使用了setFooterDisplay(false) 请在页面销毁时调用setFooterDisplay(true)恢复状态
   * @param footerDisplay 是否展示footer
   * @returns
   */
  setFooterDisplay: (footerDisplay: boolean) => void
}

const useUiStore = create<UiState>((set) => ({
  footerDisplay: true,
  setFooterDisplay: (footerDisplay) => set({ footerDisplay }),
}))

export default useUiStore
