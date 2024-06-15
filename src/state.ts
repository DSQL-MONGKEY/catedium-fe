import { create } from 'zustand'

interface BreedPrediction {
   requestId: string,
   class: string
}

interface BreedPredictionHistoryState {
   histories: BreedPrediction[],
   addHistories: (state: BreedPrediction) => void,
}

export const useHistoryStore = create<BreedPredictionHistoryState>((set) => ({
   // intial state
   histories: [],
   addHistories: (response: BreedPrediction) => {
      set((state) => ({
         histories: [
            ...state.histories,
            {
               requestId: response.requestId,
               class: response.class
            } as BreedPrediction
         ]
      }))
   }
}))

// type PredictionHistoryState = {
//    predictionHistory: {class: string}[],
// }
// type PredictionHistoryAction = {
//    updatePredictionHistory: (predictionHistory: PredictionHistoryState['predictionHistory']) => void
// }
// const initialGlobalState: PredictionHistoryState = {
//    predictionHistory: []
// }
// export const usePredictionHistoryStore = create<PredictionHistoryState & PredictionHistoryAction>((set) => ({
//    ...initialGlobalState,
//    updatePredictionHistory: (predict) => set(() => (
//       { predictionHistory: predict }
//    ))
// }))