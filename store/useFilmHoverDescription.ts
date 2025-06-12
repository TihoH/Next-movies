import { getGanre } from '@/API/getGanre'
import { IAllGenres, IlistItem } from '@/types/types'
import { create } from 'zustand'

type HoverDescriptionState = {
  showPopupDetailsFilm: any
  isActivePopup: boolean
  dataDetailsFilm: any
  setIsActivePopup: (arg: boolean) => void
}

const useFilmHoverDescription = create<HoverDescriptionState>((set , get) => ({
  isActivePopup: false,
  dataDetailsFilm: {} ,
  setIsActivePopup: (value: boolean) => set({ isActivePopup: value }),
  showPopupDetailsFilm: (item:IlistItem) => {
    set({ isActivePopup: true })
    set({dataDetailsFilm:item})
    console.log(item)
  }

}))

export default useFilmHoverDescription