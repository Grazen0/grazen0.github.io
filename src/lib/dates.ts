import { format } from 'date-fns';

export const formatDatePretty = (date: Date) => format(date, 'MMMM do, yyyy');
