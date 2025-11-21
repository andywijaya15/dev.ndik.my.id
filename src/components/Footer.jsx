export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <p>© {new Date().getFullYear()} Andy Wijaya</p>
      </aside>
    </footer>
  );
}
