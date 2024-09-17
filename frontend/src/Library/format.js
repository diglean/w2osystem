import moment from 'moment';


export function fmtoDt(value, format = 'DD/MM/YYYY')
{
  return moment(value).format(format);
}

export function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};