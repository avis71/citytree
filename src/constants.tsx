import React from 'react';
import { stripPhoneNumber } from './utils';

export const homePhone = '03-525-4196';
export const tamiPhone = '058-422-7531';
export const einatPhone = '054-750-5847';
export const alonPhone = '054-228-6173';
export const bitPhone = alonPhone;
export const whatsappPhone = tamiPhone;
export const email = 'tree@citytree.net';

export const whatsappGroupInviteLink = 'https://chat.whatsapp.com/FsTi2IrNA4uJTjk6k554O0';
export const tamiPhoneLink = (
  <a style={{ whiteSpace: 'nowrap' }} href={`tel:${stripPhoneNumber(tamiPhone)}`}>
    {tamiPhone}
  </a>
);
export const einatPhoneLink = (
  <a style={{ whiteSpace: 'nowrap' }} href={`tel:${stripPhoneNumber(einatPhone)}`}>
    {einatPhone}
  </a>
);
export const emailLink = <a href={`mail:${email}`}>{email}</a>;
export const patreonUrl = 'https://www.patreon.com/CityTree';
export const whatsappUrl = `https://wa.me/972${stripPhoneNumber(whatsappPhone, 1)}`;
export const whatsappLink = <a href={whatsappUrl}>{whatsappPhone}</a>;
export const joinPatreonUrl = 'https://www.patreon.com/join/CityTree';
export const calendarUrl =
  'https://calendar.google.com/calendar/u/1/render?cid=fmhj0n2anv9prsoquhoc22g8m0%40group.calendar.google.com';
export const paypalUrl = 'https://www.paypal.me/citytree';
export const payboxUrl = 'https://payboxapp.page.link/ecdf8UhBJ6dG25Mu7';
export const facebookUrl = 'https://facebook.com/citytree';
export const youtubeUrl = 'https://www.youtube.com/user/citytreenet/';
export const instagramUrl = 'https://www.instagram.com/citytree/';
export const bankAccount = {
  bank: 'הבינלאומי',
  branch: 'דיזינגוף 065',
  account: '006691',
  name: 'עץבעיר',
};

export const githubProject = 'https://github.com/ranbena/citytree';
export const ranbenaPage = 'https://github.com/ranbena/';

export enum PAGES {
  hineni = '/hineni',
  practicalEcologySummer = '/practical-ecology-summer',
  practicalEcologyWinter = '/practical-ecology-winter',

  // non-exsistent (coming soon modal)
  retreats = '/retreats',
  apprenticeship = '/apprenticeship',
  lectures = '/lectures',
  tamiLecture = '/lectures/#tami',
  einatLecture = '/lectures/#einat',
  forageTours = '/lectures/#forage',
  sessions = '/lectures/#sessions',
  virtual = '/lectures/#virtual',
  glossary = '/glossary',
  blog = '/blog',
  manifestos = '/manifestos',
  articles = '/articles',
  references = '/references',
  trees = '/trees',
  forestCity = '/forest-city',
  poetry = '/poetry',
  huggers = '/huggers',
  money = '/money',

  // temp external
  magicalEconomy = 'https://docs.google.com/document/d/1ZPso0AjZKwiUz-IHtoe6drc1Nd56SyqiZ2ZeuxZ59sM/preview',
  people = 'https://docs.google.com/document/d/e/2PACX-1vTjJy7kZ9ObbIz6E7oHKkxvF50gNUeo0Rapknf99YzxzYixFvLsao20QbhGnZ3LsEmr9e24qkXsHNq-/pub',
  employment = 'https://docs.google.com/document/d/e/2PACX-1vStK7lP26XAvT35LRbUlDs5mrJeniHmSrGHL53g2YYSPnxc00u395MMfjnx7GcbbcBf-pxCxJgqLkfC/pub',

  // forms
  lecturesForm = 'https://docs.google.com/forms/d/e/1FAIpQLSe5fQf-dTVV4smr82rRXO8RqvZan1ejCB8qwE3w7XeQnElz9Q/viewform',
}
