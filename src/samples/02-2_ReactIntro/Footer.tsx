const styles: { [key: string]: React.CSSProperties } = {
  footer: { textAlign: "center", padding: "40px 20px", color: "#666" },
};

export function Footer() {
  return (
    <footer style={styles.footer}>
      <hr />
      <address>&copy; 2026 React Study. All rights reserved.</address>
    </footer>
  );
}
