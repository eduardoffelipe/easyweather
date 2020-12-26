import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

export const round = (value: number): number => Math.round(value);

/**
 * format Hour
 * @param date
 *
 */
export const formatTime = (date: number): string => {
  const parse = moment.unix(date);
  const parseDate = moment(parse).format('LT');

  return parseDate;
};
