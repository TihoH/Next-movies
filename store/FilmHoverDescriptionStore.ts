import { getGanre } from '@/API/getGanre'
import {  IlistItem } from '@/types/types'
import { create } from 'zustand'

type FilmHoverDescriptionStoreState = {
  idMoreDetailsViedeo: number 
  showPopupDetailsFilm: (item: IlistItem) => void
  isActivePopup: boolean
  dataDetailsFilm: IlistItem | null
  setIsActivePopup: (arg: boolean) => void
}

const FilmHoverDescriptionStore = create<FilmHoverDescriptionStoreState>((set , get) => ({
  idMoreDetailsViedeo: 0 ,
  isActivePopup: false,
  dataDetailsFilm: null ,
  setIsActivePopup: (value: boolean) => set({ isActivePopup: value }),
  showPopupDetailsFilm: (item:IlistItem) => {
    set({ isActivePopup: true })
    set({dataDetailsFilm:item})
    set({idMoreDetailsViedeo: item.id })
  },

}))

export default FilmHoverDescriptionStore