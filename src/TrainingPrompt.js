import { useEffect, useState } from 'react';

const trainingHref = `${process.env.PUBLIC_URL}/?page=training`;
const STORAGE_KEY = 'bimaxis-training-prompt';

function TrainingPrompt() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === 'closed') return undefined;
    const timer = window.setTimeout(() => setOpen(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, 'closed');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="train-modal" role="presentation" onClick={close}>
      <div
        className="train-modal__card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="train-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="train-modal__close" aria-label="Close" onClick={close}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <p className="eyebrow">BIM-AXIS Training</p>
        <h2 id="train-modal-title">Ready to master AutoCAD and BIM?</h2>
        <p>
          Join AutoCAD / BIM Mastery with Racquel Sisgon Burdeos, Autodesk Certified
          Instructor and owner of BIM-AXIS. Learn online, at your own pace, with an Autodesk
          license and certificate.
        </p>
        <a className="btn btn--primary" href={trainingHref}>
          Go to Training
        </a>
      </div>
    </div>
  );
}

export default TrainingPrompt;
