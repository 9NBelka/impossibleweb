'use client';

import { useState } from 'react';
import scss from './FloatingContacts.module.scss';
import { BsEnvelope, BsMessenger, BsWhatsapp, BsTelegram } from 'react-icons/bs';

const contacts = [
  {
    icon: <BsEnvelope className={scss.icon} />,
    href: 'mailto:mpdart2013@gmail.com',
    label: 'Email',
    className: 'email',
  },
  {
    icon: <BsMessenger className={scss.icon} />,
    href: 'https://m.me/impossibleweb',
    label: 'Messenger',
    className: 'messenger',
  },
  {
    icon: <BsWhatsapp className={scss.icon} />,
    href: 'https://wa.me/34610988651',
    label: 'WhatsApp',
    className: 'whatsapp',
  },
  {
    icon: <BsTelegram className={scss.icon} />,
    href: 'https://t.me/Archerius',
    label: 'Telegram',
    className: 'telegram',
  },
];

export default function FloatingContacts() {
  return (
    <div className={scss.floatingContacts}>
      {contacts.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={contact.label}
          className={`${scss.button} ${scss[contact.className]}`}>
          {contact.icon}
        </a>
      ))}
    </div>
  );
}
