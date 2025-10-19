interface FooterNoteProps {
  note: string;
}

export function FooterNote({ note }: FooterNoteProps) {
  return (
    <footer className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-[#6d5a5b]">
      {note}
    </footer>
  );
}
