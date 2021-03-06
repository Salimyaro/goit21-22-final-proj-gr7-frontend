import s from './Contacts.module.css';

export default function ContactsCard({ name, url, photo, role, onload }) {
  return (
    <a className={s.contactLink} target="_blank" rel="noreferrer" href={url}>
      <picture>
        <img
          onLoad={onload}
          className={s.contactPhoto}
          src={photo}
          alt={name}
          width="244px"
          height="280px"
        />
      </picture>
      <div className={s.contactInfo}>
        <span className={s.contactName}>{name}</span>
        <span className={s.contactRole}>{role} </span>
      </div>
    </a>
  );
}
