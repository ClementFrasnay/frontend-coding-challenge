import dayjs from 'dayjs';

export const formatDate = (date: string) =>
  dayjs(date)
    .locale('en-GB')
    .format('DD/MM/YYYY, HH:mm:ss');
