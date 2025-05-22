import { Snackbar, Alert } from '@mui/material';

const Notifications = ({ open, alert, handleClose }) => (
  <Snackbar
    open={open}
    autoHideDuration={3000}
    onClose={handleClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  >
    <Alert severity={alert.severity} sx={{ bgcolor: alert.severity === 'error' ? '#FF5252' : '#1AE5E5' }}>
      {alert.message}
    </Alert>
  </Snackbar>
);

export default Notifications;