import moment from 'moment';


export function fmtoDt(value, format = 'DD/MM/YYYY')
{
  return moment(value).format(format);
}