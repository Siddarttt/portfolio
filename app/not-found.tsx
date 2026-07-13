import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Back to home</Link>
    </Container>
  );
}
