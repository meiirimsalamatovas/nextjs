import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  color: "salmon"
};

export default function Header() {
  return (
    <div>
      <Link href="/"style={linkStyle}>Home
      </Link>
      <Link href="/pets" style={linkStyle}>Pets
      </Link>
    </div>
  );
}
