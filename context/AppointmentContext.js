import { createContext, useState } from 'react';

const Appointment = createContext();

const AppointmentContext = ({ children }) => {
  const [appointmentDetails, setAppointmentDetails] = useState([]);

  return (
    <Appointment.Provider value={{ appointmentDetails, setAppointmentDetails }}>
      {children}
    </Appointment.Provider>
  );
};

export { Appointment, AppointmentContext };
