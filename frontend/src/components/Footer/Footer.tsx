function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)] py-8">
      <div className="max-w-[1320px] mx-auto px-8 text-center text-sm text-[var(--text-secondary)]">
        © {new Date().getFullYear()} Revizzi — Oficina Mecânica. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;