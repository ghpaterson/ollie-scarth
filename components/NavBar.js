import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex justify-end gap-6">
        <li>Work</li>
        <li>Gallery</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
