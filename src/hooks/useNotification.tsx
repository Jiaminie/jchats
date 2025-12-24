import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from '../components/notifications/Toast';

type Severity = 'success' | 'error' | 'warning' | 'info';

interface NotificationContextType {
  showNotification: (severity: Severity, message: string, title?: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<{
    open: boolean;
    severity: Severity;
    message: string;
    title?: string;
  }>({
    open: false,
    severity: 'info',
    message: '',
  });

  const showNotification = useCallback((severity: Severity, message: string, title?: string) => {
    setNotification({
      open: true,
      severity,
      message,
      title,
    });
  }, []);

  const handleClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Toast
        open={notification.open}
        onClose={handleClose}
        severity={notification.severity}
        message={notification.message}
        title={notification.title}
      />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
