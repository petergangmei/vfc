import React from 'react';

// Helper function to calculate time ago or format date
const formatTimeAgoOrDate = (timestamp) => {
  const now = new Date();
  const time = new Date(timestamp);
  
  const timeDifferenceMs = now - time; // Difference in milliseconds
  const timeDifferenceSeconds = Math.floor(timeDifferenceMs / 1000);
  const timeDifferenceMinutes = Math.floor(timeDifferenceSeconds / 60);
  const timeDifferenceHours = Math.floor(timeDifferenceMinutes / 60);
  const timeDifferenceDays = Math.floor(timeDifferenceHours / 24);

  if (timeDifferenceDays < 30) {
    // Return "time ago" format if less than 30 days
    if (timeDifferenceMinutes < 1) {
      return ` just now`;
    } else if (timeDifferenceMinutes < 60) {
      return ` ${timeDifferenceMinutes} minute${timeDifferenceMinutes > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceHours < 24) {
      return ` ${timeDifferenceHours} hour${timeDifferenceHours > 1 ? 's' : ''} ago`;
    } else {
      return ` ${timeDifferenceDays} day${timeDifferenceDays > 1 ? 's' : ''} ago`;
    }
  } else {
    // If more than 30 days, return formatted date (DD-MM-YYYY)
    const day = time.getDate().toString().padStart(2, '0');
    const month = (time.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = time.getFullYear();
    return `${day}-${month}-${year}`;
  }
};

const TimeDisplay = ({ timestamp }) => {
  return (
    <div>
      <p> {formatTimeAgoOrDate(timestamp)}</p>
    </div>
  );
};

export default TimeDisplay;
