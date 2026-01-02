import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user is on a phone device
 * @returns {boolean} true if device is a phone, false otherwise
 */
export const useIsPhoneDevice = (): boolean => {
  const [isPhoneDevice, setIsPhoneDevice] = useState<boolean>(false);

  useEffect(() => {
    // Define phone breakpoint (typically 768px)
    const phoneBreakpoint = 768;

    const checkIsPhone = () => {
      setIsPhoneDevice(window.innerWidth < phoneBreakpoint);
    };

    // Check on mount
    checkIsPhone();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsPhone);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsPhone);
    };
  }, []);

  return isPhoneDevice;
};


