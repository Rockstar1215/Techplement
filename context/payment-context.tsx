'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface PaymentContextType {
  isPaymentComplete: boolean;
  registeredEvents: Set<string>;
  completePayment: () => void;
  registerEvent: (eventId: string) => void;
  isEventRegistered: (eventId: string) => boolean;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState<Set<string>>(new Set());

  const completePayment = () => {
    setIsPaymentComplete(true);
  };

  const registerEvent = (eventId: string) => {
    setRegisteredEvents(prev => new Set([...prev, eventId]));
  };

  const isEventRegistered = (eventId: string) => {
    return registeredEvents.has(eventId);
  };

  return (
    <PaymentContext.Provider value={{
      isPaymentComplete,
      registeredEvents,
      completePayment,
      registerEvent,
      isEventRegistered
    }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within PaymentProvider');
  }
  return context;
}
