import * as React from "react"
import { type ToastProps } from "@/components/ui/toast" // Import ToastProps from the toast component

// Defines the properties for a toast, extending ToastProps
const TOAST_LIMIT = 1 // Maximum number of toasts to show at once
const TOAST_REMOVE_DELAY = 1000000 // Delay before a toast is automatically removed (milliseconds)

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}

// Defines the state for the toast system
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

// Reducer function to manage toast state
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case actionTypes.DISMISS_TOAST: { 
      const { toastId } = action
      // Set the toast as dismissed, so it can animate out
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === toastId ? { ...toast, open: false } : toast
        ),
      }

    }

    case actionTypes.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
    default:
      return state
  }
}

// Custom hook to generate unique IDs for toasts
function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

// Context for managing toast state
{/*const ToasterContext = React.createContext<
  { toast: ({ ...props }: ToastProps) => { id: string } } | undefined
>(undefined) */}

// Custom hook for displaying toasts
export function useToast() {
  const [state, dispatch] = React.useReducer(reducer, { toasts: [] })
  const [mounted, setMounted] = React.useState(false);

  // Store timeouts for dismissing toasts
  const dismissedToastRef = React.useRef<Set<string>>(new Set())

  const dismiss = React.useCallback((toastId?: string) => {
    dispatch({ type: "DISMISS_TOAST", toastId })
  }, [])

  const addToast = React.useCallback(
    (toast: ToasterToast) => {
      dispatch({ type: "ADD_TOAST", toast })
    },
    [dispatch]
  )

  // Effect to manage toast timeouts and dismissal
  React.useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }
    state.toasts.forEach((toast) => {
      if (toast.open === false && !dismissedToastRef.current.has(toast.id)) {
        // If toast is dismissed, remove it after a delay
        dismissedToastRef.current.add(toast.id)
        setTimeout(() => {
          dispatch({ type: "REMOVE_TOAST", toastId: toast.id })
        }, TOAST_REMOVE_DELAY)
      }
    })
  }, [state.toasts, dismiss, mounted])

  // Function to create and display a new toast
  const toast = React.useCallback(({ ...props }: ToastProps) => {
    const id = generateId()
    const update = (props: Partial<ToasterToast>) =>
      dispatch({ type: "UPDATE_TOAST", toast: { ...props, id } })
    const dismissToast = () => dismiss(id)

    addToast({
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismissToast()
      },
      ...props,
    })

    return {
      id: id,
      dismiss: dismissToast,
      update,
    }
  }, [addToast, dismiss])

  return {
    ...state,
    toast,
  }
}
