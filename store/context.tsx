import {
  useReducer,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
} from 'react'

import type ProductType from '../interfaces/product'
import type CategoryType from '../interfaces/category'

type State = {
  choosenCurrency: string
  itemsInCart: ProductType[]
  categories: CategoryType[]
  count: number
}

const categories: CategoryType[] = [];
const itemsInCart: ProductType[] = [];

const initialValues = {
  choosenCurrency: 'usd',
  itemsInCart,
  categories,
  count: 0
}

type Action =
  | {
      type: 'SET_CURRENCY'
      payload: string
    }
  | {
      type: 'ADD_TO_CART'
      payload: ProductType
    }
  | {
      type: 'SET_CATEGORIES'
      payload: CategoryType[]
    }
  | {
      type: 'INCREASE'
    }

const StateContext = createContext<State>(initialValues)
const DispatchContext = createContext<Dispatch<Action>>(
  () => null
)

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return {
        ...state,
        choosenCurrency: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        itemsInCart: [...itemsInCart, action.payload],
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      throw new Error(`Unknown action: ${JSON.stringify(action)}`)
  }
}

type ProviderProps = { children: ReactNode }

export const StoreProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialValues)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const useStore = () => useContext(StateContext)
export const useDispatch = () => useContext(DispatchContext)